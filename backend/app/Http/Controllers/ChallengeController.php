<?php

namespace App\Http\Controllers;


use App\Challenges;
use Illuminate\Http\Request;

class ChallengeController extends Controller
{
    //
    public function addChallenges(Request $request)
    {
        $challenges = new Challenges();
        $challenges->name = $request->name;
        $challenges->description = $request->description;
        $challenges->date_debut = $request->date_debut;
        $challenges->date_fin = $request->date_fin;
        $challenges->affected=0;

        if ($challenges->save()) {
            return response($challenges, 201);
        }
    }
    public function getchallenge()
    {
        return response()->json(Challenges::all(), 200);
    }

}
