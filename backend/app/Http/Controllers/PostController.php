<?php

namespace App\Http\Controllers;

use App\post;
use App\User;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function addpost(Request $request, $id_user)
    {
        $post = new post();
        $post->content = $request->content;
        $post->filepath= $request->filepath;
        $users = User::find($id_user);
        $post->users()->associate($users, [$post->users_id]);
        if ($post->save()) {
            return response($post, 201);
        }
    }
    public function updapost(Request $request, $id)
    {
        $post = post::find($id);
        if (is_null($post)) {
            return response()->json(['message' => 'post non disponible'], 400);
        }
        $post->update($request->all());
        return response($post, 202);
    }


    public function getpost()
    {

        $post = post::with('users','commentaire.users')->orderBy('created_at', 'desc')->get();

        return response()->json($post, 200);
    }

    public function deletepost(Request $request, $id)
    {
        $post = post::find($id);
        if (is_null($post)) {
            return response()->json(['message' => 'post no disponible'], 404);
        }
        $post->delete($request->all());
        return response()->json(['message' => 'post supprime'], 204);
    }


}
