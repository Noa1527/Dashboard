<?php

use App\Http\Controllers\API\Admin\PermissionController;
use App\Http\Controllers\API\Admin\RoleController;
use App\Http\Controllers\API\Admin\UserController as AdminUserController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:api')->group( function () {
    Route::apiResource('users', UserController::class);
    Route::group(['middleware' => ['role:admin']], function () {
        Route::apiResource('users', AdminUserController::class);
        Route::apiResource('roles', RoleController::class);
        Route::apiResource('permission', PermissionController::class);
    });
    Route::post('/logout', [AuthController::class, 'logout']);
});

