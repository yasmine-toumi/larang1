<?php

namespace App\Http\Controllers;

use App\suggestion;
use App\User;
use Illuminate\Http\Request;

class SuggestionController extends Controller
{

    public function getsuggestion()
    {
        return response()->json(suggestion::all(), 200);
    }
    public function addsuggestion(Request $request, $id_user)
    {
        $suggestions = new suggestion();
        $suggestions->titre = $request->titre;
        $suggestions->message = $request->message;
        $suggestions->document = $request->document;
        $suggestions->date = $request->date;
        $suggestions->status = $request->status;
        $users = User::find($id_user);
        $suggestions->users()->associate($users, [$suggestions->users_id]);

        if ($suggestions->save()) {
            return response($suggestions, 201);
        }
    }
}
