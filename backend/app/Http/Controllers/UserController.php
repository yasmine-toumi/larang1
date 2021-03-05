<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\User;


class UserController extends Controller
{
    public function getUser()
    {
        return response()->json(User::all(), 200);
    }
    public function getUserById($id)
    {
        $user = User::find($id);
        if (is_null($user)) {
            return response()->json(['message' => 'Utilisateur non disponible'], 404);
        }
        return response()->json(User::find($id), 200);
    }
    public function addUser(Request $request)
    {
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = $request->passord;
        $user->birthday= $request->birthday;
        $user->tel = $request->tel;

        if ($user->save()) {
            return response($user ,201);
        }
    }
    public function updateUser(Request $request, $id)
    {
        $user = User::find($id);
        if (is_null($user)) {
            return response()->json(['message' => 'Utilisateur non disponible'], 400);
        }
        $user->update($request->all());
        return response($user, 202);
    }
    public function deleteUser(Request $request, $id)
    {
        $user = User::find($id);
        if (is_null($user)) {
            return response()->json(['message' => 'utillisateur non disponible'], 404);
        }
        $user->delete($request->all());
        return response()->json(null, 204);
    }
}
