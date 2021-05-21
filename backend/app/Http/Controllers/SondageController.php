<?php

namespace App\Http\Controllers;

use App\sondage;
use App\User;
use Illuminate\Http\Request;

class SondageController extends Controller
{
    public function addsondages(Request $request, $id_user)
    {
        $sondages= new sondage();
        $sondages->message = $request->message;
        $sondages->choix = $request->choix ;
        $sondages->status = $request->status;
        $users = User::find($id_user);
        $sondages->users()->associate($users, [$sondages->users_id]);
        if ($sondages->save()) {
            return response($sondages, 201);
        }
    }
    public function getsondages()
    {

        $sondages = sondage::with('users')->get();
        return response()->json($sondages, 200);
    }
    public function updasondages(Request $request, $id)
    {
        $sondages = sondage::find($id);
        if (is_null($sondages)) {
            return response()->json(['message' => 'sondage non disponible'], 400);
        }
        $sondages->update($request->all());
        return response($sondages, 202);
    }


    public function deletesondage(Request $request, $id)
    {
        $sondages = sondage::find($id);
        if (is_null( $sondages)) {
            return response()->json(['message' => 'sondages  no disponible'], 404);
        }
        $sondages->delete($request->all());
        return response()->json(['message' => 'sondages  supprime'], 204);
    }

}
