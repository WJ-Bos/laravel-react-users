<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function signup(SignupRequest $request){

        //validating the data from request
        $data = $request->validated();

        //create a user using request data
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        //creating a token
        $token = $user->createToken('main')->plainTextToken;

        return compact('user', 'token');
    }

    public function login(LoginRequest $request){

    }

    public  function logout(Request $request){

    }
}
