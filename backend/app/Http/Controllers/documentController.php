<?php

namespace App\Http\Controllers;

use App\Document;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;

class documentController extends Controller
{

    public function getfiles()
    {
        return response()->json(Document::all(), 200);
    }


    public function upload(Request $request)
    {
        // Get file name from FormData (postman)
        $filename = $request->file('file')->getClientOriginalName();
        //path bech yesna3 fel ficher fi dossier angular (sna3et document) put tesna3 dossier esmou laravelimg i7ot fi westou des fichiers
        $path = Storage::disk('document')->put('document', $request->file('file'));
        //bech nsajel fel base de donnee
        $file = new Document();
        $file->name = $filename;

        $file->path = 'assets/document/' . $path;
        if ($file->save()) {
            return response($file, 201);
        }
    }
}

