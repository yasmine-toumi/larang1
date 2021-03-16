<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\User;

$array = array("admin", "user");
class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth.role:admin,user', ['only' => ['blockUser']]);
    }
    public function blockUser()
    {
        return 'This is an admin route.';
    }
    public function profile()
    {
        return 'This route is for all users.';
    }

    public function getUser()
    {
        return response()->json(User::all(), 200);

    }
    public function getUserPageable($size)
    {
        //return response()->json(User::all(), 200);
        return response()->json(User::paginate($size), 200);
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
        return response()->json(['message' => 'utillisateur supprime'], 204);
    }
    public function search($name){
        return User::where("name","like","%".$name."%")->get();

    }

    public function searchuser(Request $request)
    {
        $name = $request->get('user');
        //$name = $request->get('size');

        //return User::where("name", "like", "%" . $name . "%")->get()->paginate(5);
        return response()->json(User::where("name", "like", "%" . $name . "%")->paginate(1), 200);
    }
}
