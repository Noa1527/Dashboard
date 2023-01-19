<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator as FacadesValidator;
class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = FacadesValidator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] =  $user->createToken('MyApp')->accessToken;
        $success['name'] =  $user->name;

        // return $this->sendResponse($success, 'User register successfully.');
        return response($success, 200);
    }

    public function login(Request $request)
    {
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){ 
            $user = Auth::user(); 
            $success['token'] =  $user->createToken('MyApp')->accessToken; 
            $success['name'] =  $user->name;
            return response($success, 200);
            // return $this->sendResponse($success, 'User login successfully.');
        } 
        else{ 
            return response()->json(['error'=>'Unauthorised'], 401);
            // return $this->sendError('Unauthorised.', ['error'=>'Unauthorised']);
        } 
    }


    public function logout()
    {
        if (Auth::check()) {
            auth()->user()->tokens()->delete();

        return [
            'message' => 'vous êtes déconnecté'
        ];
        }
        // return $this->sendResponse([], 'User logout successfully.');
    }
}
