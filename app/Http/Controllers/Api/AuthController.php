<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //__Login__
    public function login(Request $request)
    {

        try {
            if (Auth::attempt($request->only('email','password'))) {
                $user=Auth::user();
                $token=$user->createToken('app')->accessToken;

                return response([
                    'message'=>"Success Login",
                    'token'=>$token,
                    'user'=>$user,
                ],200);
            }
        } catch (Exception $e) {
            return response([
                'message'=> $e->getMessage()
            ],201);
        }

        return response([
            'message'=> "Invalid Email or Password!"
        ],201);
    }

    //__Register__

    public function register(Request $request)
    {
        $request->validate([
            'name'=>'required|max:25',
            'email'=>'required|unique:users|email',
            'password'=>'required|min:6|confirmed',
        ]);

        try {
            $user=User::create([
                'name'=>$request->name,
                'email'=>$request->email,
                'password'=>Hash::make($request->password),
            ]);

            $token=$user->createToken('app')->accessToken;

            return response([
                'message'=>"Success Registration",
                'token'=>$token,
                'user'=>$user,
            ],200);
            
        } catch (Exception $exception) {
            return response([
                'message'=> $exception->getMessage()
            ],201);
        }

    }
}
