<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\RoleResource;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $roles = Role::all();
        return RoleResource::collection($roles);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // La validation de données
        $this->validate($request, [
            'name' => 'required|min:3|max:100',

        ]);

        $roles = Role::create([
            'name' => $request->name,
        ]);

        return response()->json($roles, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new RoleResource(Role::find($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // La validation de données
        $this->validate($request, [
            'name' => 'required|min:3|max:100',

        ]);

        // On modifie les informations de l'utilisateur
        $roles = Role::findById($id);
        $roles->update([
            'name' => $request->name,
        ]);
        // On retourne la réponse JSON
        return response()->json($roles, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $roles = Role::findById($id);
        $roles->delete();
    }
}
