<?php

namespace App\Http\Controllers;

use App\commentaire;
use App\post;
use App\User;
use Illuminate\Http\Request;

class CommentaireController extends Controller
{
    public function addcommentaire(Request $request, $id_user, $post_id)
    {
        $commentaire = new commentaire();
        $commentaire->content = $request->content;
        $commentaire->image = $request->image;
        $users = User::find($id_user);
        $commentaire->users()->associate($users, [$commentaire->users_id]);
        $posts = post::find($post_id);
        $commentaire->posts()->associate($posts, [$commentaire->post_id]);
        if ($commentaire->save()) {
            return response($commentaire, 201);
        }
    }
    public function updacommentaire(Request $request, $id)
    {
        $commentaire = commentaire::find($id);
        if (is_null($commentaire)) {
            return response()->json(['message' => 'commentaire non disponible'], 400);
        }
        $commentaire->update($request->all());
        return response($commentaire, 202);
    }
    public function getcommentaireById($id)
    {

        $commentaire = commentaire::with('users')->get()->find($id);

        if (is_null($commentaire)) {
            return response()->json(['message' => 'commentaire non disponible'], 404);
        }
        return response()->json($commentaire, 200);
    }

    public function getcommentaire()
    {

        $commentaire = commentaire::with('users')->get();

        return response()->json($commentaire, 200);
    }

    public function deletecommentaire(Request $request, $id)
    {
        $commentaire = commentaire::find($id);
        if (is_null($commentaire)) {
            return response()->json(['message' => 'commentaire no disponible'], 404);
        }
        $commentaire->delete($request->all());
        return response()->json(['message' => 'commentaire supprime'], 204);
    }

}
