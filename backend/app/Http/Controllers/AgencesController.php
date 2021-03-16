<?php

namespace App\Http\Controllers;

use App\Agences;
use Illuminate\Http\Request;

class AgencesController extends Controller
{
    public function getagence()
    {
        return response()->json(Agences::all(), 200);
    }
    public function getagenceById($id)
    {
        $agences = Agences::find($id);
        if (is_null($agences)) {
            return response()->json(['message' => 'agences non disponible'], 404);
        }
        return response()->json(Agences::find($id), 200);
    }

    public function addagences(Request $request)
    {
        $agences = new Agences();
        $agences->code = $request->code;
        $agences->name= $request->ename;
        $agences->tel= $request->tel;
        $agences->adresse = $request->adresse;
        $agences->active = $request->active;

        if ($agences->save()) {
            return response($agences, 201);
        }
    }
    public function updagences(Request $request, $id)
    {
        $agences= Agences::find($id);
        if (is_null($agences)) {
            return response()->json(['message' => 'agence non disponible'], 400);
        }
        $agences->update($request->all());
        return response($agences, 202);
    }
    public function deleteagences(Request $request, $id)
    {
        $agences = Agences::find($id);
        if (is_null($agences)) {
            return response()->json(['message' => 'Agence non disponible'], 404);
        }
        $agences->delete($request->all());
        return response()->json(['message' => 'Agence supprime'], 204);
    }

}
