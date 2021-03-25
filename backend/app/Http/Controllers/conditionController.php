<?php

namespace App\Http\Controllers;

use App\Files;
use Illuminate\Http\Request;

class conditionController extends Controller
{

    public function getfiles()
    {
        return response()->json(Files::all(), 200);
    }


public function upload(Request $request){
       //$path=$request->file('file')->store('conditionBank');
        //$result->name = $request->name;

       $file=new Files();
       $file->name=$request->input('fileName');
$file->path=$request->file('file')->store('conditionBank');
if($file->save()){
return response($file,201);
        }
}
}
