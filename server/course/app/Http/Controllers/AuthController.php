<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegisterRequest;

class AuthController extends Controller
{
    public function register(RegisterRequest $request){
        $newUser = new User();

        $newUser->name = $request->name;
        $newUser->email = $request->email;
        $newUser->password = Hash::make($request->password);

        $newUser->save();

        return response()->json([
            'succes' => 'User created succesfully',
            'user' => $newUser
        ], 201);
    }


    public function login(LoginRequest $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $token = Auth::user()->createToken('auth_token')->plainTextToken;
            // $expiresInMinutes = config('sanctum.expiration');
            // $token->expiresIn($expiresInMinutes);
            $data = [
                'access_token' => $token
            ];
            return response()->json([
                'data' => $data
            ], 200);
        }

        return response()->json(['error' => 'Incorrect credentials'], 401);
    }

    public function logout()
    {
        $user = Auth::user();

        if ($user) {
            $user->tokens()->delete();
            return response()->json(['message' => 'logout successfully'], 200);
        } else {
            return response()->json(['error' => 'not user auth'], 401);
        }
    }
}
