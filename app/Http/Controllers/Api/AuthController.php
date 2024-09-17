<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Handles the sign up request.
     * Validates the request data and creates a new user.
     * Creates a new token for the user.
     * Returns the user and the token in the response.
     *
     * @param  \App\Http\Requests\SignupRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function signup(SignupRequest $request){
        $data = $request->validated();

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        //creating a token
        $token = $user->createToken('main')->plainTextToken;
        return compact('user', 'token');
    }



    /**
     * Handles the login request.
     * Validates the request data and logs the user in.
     * Creates a new token for the user.
     * Returns the user and the token in the response.
     *
     * @param  \App\Http\Requests\LoginRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function login(LoginRequest $request){
        $credentials = $request->validated();
        if(!Auth::attempt($credentials)){
            return response([
                'message' => 'Provided credentials are not correct'
            ]);
        }
        /** @var User $user */
        $user = Auth::user();
        $user->createToken('main')->plainTextToken;
        return compact('user','token');
    }



    public  function logout(Request $request){
        /**@var User $user*/
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response('', 204);
    }
}
