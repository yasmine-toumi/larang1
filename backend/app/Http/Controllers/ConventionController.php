<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use App\convention;
use Illuminate\Http\Request;

class ConventionController extends Controller
{
    public function getConv()
    {
        return response()->json(convention::all(), 200);
    }


    public function uploadConv(Request $request)
    {
        // Get file name from FormData (postman)
        $filename = $request->file('file')->getClientOriginalName();
        //path bech yesna3 fel ficher fi dossier angular (sna3et document) put tesna3 dossier esmou laravelimg i7ot fi westou des fichiers
        $path = Storage::disk('document')->put('document', $request->file('file'));
        //bech nsajel fel base de donnee
        $file = new convention();
        $file->name = $filename;

        $file->path = 'assets/document/' . $path;
        if ($file->save()) {
            return response($file, 201);
        }
    }
    public function deleteconvention(Request $request, $id)
    {
        $doc = convention::find($id);
        if (is_null($doc)) {
            return response()->json(['message' => 'doc non disponible'], 404);
        }
        $doc->delete($request->all());
        return response()->json(['message' => 'doc supprime'], 204);
    }
}
