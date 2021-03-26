<?php

namespace App\Http\Controllers;

use App\Files;
use Illuminate\Http\Request;
use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;

class conditionController extends Controller
{

    public function getfiles()
    {
        return response()->json(Files::all(), 200);
    }


    public function upload(Request $request)
    {
        // Get file name from FormData (postman)
        $filename = $request->file('file')->getClientOriginalName();
        //path bech yesna3 fel ficher fi dossier angular (sna3et costum) put tesna3 dossier esmou laravelimg i7ot fi westou des fichiers
        $path = Storage::disk('costum')->put('laravelimg', $request->file('file'));
        //bech nsajel fel base de donnee
        $file = new Files();
        $file->name = $filename;

        $file->path = 'assets/img/' . $path;
        if ($file->save()) {
            return response($file, 201);
        }
    }
}
