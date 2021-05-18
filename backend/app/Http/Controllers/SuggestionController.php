<?php

namespace App\Http\Controllers;

use App\suggestion;
use App\User;
use Illuminate\Http\Request;

class SuggestionController extends Controller
{

    public function getsuggestion()
    {

        $suggestions = suggestion::with('users')->get();
        return response()->json($suggestions, 200);
    }
    public function addsuggestion(Request $request, $id_user)
    {
        $suggestions = new suggestion();
        $suggestions->titre = $request->titre;
        $suggestions->message = $request->message;
        $suggestions->document = $request->document;
        $suggestions->date = $request->date;
        $suggestions->status = $request->status="En attend";
        $users = User::find($id_user);
        $suggestions->users()->associate($users, [$suggestions->users_id]);
if ($suggestions->save()) {
            return response($suggestions, 201);
        }
    }
    public function getUserById($id)
    {
        $user = User::find($id);
        if (is_null($user)) {
            return response()->json(['message' => 'Utilisateur non disponible'], 404);
        }
        return response()->json(User::find($id), 200);
    }
    public function getsuggestionById($id)
    {

        $suggestions = suggestion::with('users')->get()->find($id);

        if (is_null($suggestions)) {
            return response()->json(['message' => 'suggestions non disponible'], 404);
        }
        return response()->json($suggestions, 200);
    }

    public function updasuggestion(Request $request, $id)
    {
        $suggestions= suggestion::find($id);
        if (is_null($suggestions)) {
            return response()->json(['message' => 'suggestion non disponible'], 400);
        }
        $suggestions->update($request->all());
        return response($suggestions, 202);
    }


}
