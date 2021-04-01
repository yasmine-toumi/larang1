<?php

namespace App\Http\Controllers;

use App\Agences;
use App\Challenges;
use App\Challenges_agence;
use Illuminate\Http\Request;

class ChallengeAgenceController extends Controller
{
    public function addChallengesToAllAgences($id)
    {
        $Challenges_agence = new Challenges_agence();
        $Challenges_agence->rang = 0;
        $challenges =  Challenges::find($id);
        $agences = Agences::all();
        $challenges->agences()->attach($agences, ['rang' => $Challenges_agence->rang]);
        return response("challange ". $challenges->name." a effectuer a tout les agences",201);
     }


    public function changeRankForOneAgence(Request $request,$idagence,$idchallance)
    {
        $Challenges_agence2 = Challenges_agence::where("challenges_id", $idchallance)->where("agences_id",$idagence)->get()->first();
         $Challenges_agence = new Challenges_agence();
        $Challenges_agence =  Challenges_agence::find($Challenges_agence2->id);
        if (is_null($Challenges_agence)) {
            return response()->json(['message' => 'challange_agence non disponible'], 400);
        }
        $Challenges_agence->update($request->all());
         return response($Challenges_agence, 202);
    }

}
