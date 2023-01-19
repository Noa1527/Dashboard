<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $permission = Permission::all();

        if ($permission->isEmpty()) {
            return response()->json(['message' => 'No data found'], 404);
        } else {
            return response()->json($permission, 200);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|min:3|max:100',

        ]);

        $permission = Permission::create([
            'name' => $request->name,
        ]);

        return response()->json($permission, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $permission = Permission::findById($id);

        if ($permission) {
            return response()->json($permission, 200);
        } else {
            return response()->json(['message' => 'No data found'], 404);
        }
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
        $this->validate($request, [
            'name' => 'required|min:3|max:100',

        ]);

        // On modifie les informations de l'utilisateur
        $permission = Permission::find($id);
        $permission->update([
            'name' => $request->name,
        ]);
        // On retourne la réponse JSON
        return response()->json($permission, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $permission = Permission::find($id);
        $permission->delete();

        return response()->json(['message' => 'Permission deleted'], 200);
    }
}
