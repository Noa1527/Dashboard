<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserStoreRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = User::all();

        return UserResource::collection($user);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(UserStoreRequest $request, User $user)
    {
        // La validation de données
        $this->validate($request, [
            'name' => 'required|max:100',
            'email' => 'required|email|unique:users',

        ]);

        // On modifie les informations de l'utilisateur
        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);
        // On retourne la réponse JSON
        return response()->json($user, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        // On supprime l'utilisateur
        $user->delete();
        auth()->user()->tokens()->delete();
        // On retourne la réponse JSON
        return response()->json([
            'message' => 'Utilisateur ' . $user->name . 'a été supprimé avec succès'
        ], 204);
    }

    // public function assignRole (Request $request, User $user){
    //     if ($user->hasRole($request->role)) {

    //         return back()->with ('message', 'Role exists.');
    //     }

    //     $user->assignRole ($request->role) ;

    //     return back()->with('message', 'Role assigned. ');
    // }
    // public function removeRole (User $user, Role $role){

    //     if ($user->hasRole($role)) {
    //         $user->removeRole($role) ;
    //         return back()->with( 'message', 'Role removed.');
    //     }
    //     return back()->with('message', 'Role not exists.');

    // }
}
