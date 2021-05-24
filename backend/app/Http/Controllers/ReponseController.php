<?php

namespace App\Http\Controllers;

use App\reponce;
use App\sondage;
use App\User;
use Illuminate\Http\Request;

class ReponseController extends Controller
{
    public function addreponce(Request $request, $id_user,$sondage_id)
    {
        $reponces= new reponce();
        $reponces->reponce = $request->reponce;
        $users = User::find($id_user);
        $reponces->users()->associate($users, [$reponces->users_id]);
        $sondages = sondage::find($sondage_id);
        $reponces->sondage()->associate($sondages, [$reponces->sondage_id]);
        if ($reponces::where('users_id', $id_user)->where('sondage_id', $sondage_id)->exists()) {
            return response()->json(['message' => 'deja envoyer'], 200);
        }
        if ($reponces->save()) {
            return response($sondages, 201);
        }

    }



    public function getresult()
    {

        $reponces = reponce::with('users')->get();
        return response()->json($reponces, 200);
    }
    public function getreponcesById($id)
    {

        $reponces = reponce::with('users')->get()->find($id);

        if (is_null($reponces)) {
            return response()->json(['message' => 'reponces non disponible'], 404);
        }
        return response()->json($reponces, 200);
    }

    public function deletereponce(Request $request, $id)
    {
        $reponces = reponce::find($id);
        if (is_null($reponces)) {
            return response()->json(['message' => 'reponces no disponible'], 404);
        }
        $reponces->delete($request->all());
        return response()->json(['message' => 'reponces supprime'], 204);
    }
}
