<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(LoginRequest $request){

        $data = $request -> validated();

        /** @var \App\Models\User $user */
        User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        $tokenResult  = $user->createToken('main');
        $token = $tokenResult->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function signup(SignupRequest $signupRequest){

    }

    public  function logout(Request $request){

    }
}
