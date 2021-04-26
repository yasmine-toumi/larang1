<?php

namespace App\Http\Controllers;

use App\Document;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Event;

class EventController extends Controller
{
    public function addevent(Request $request)
    {
        $event = new Event();
        $event->date_devent = $request->date_devent;
        $event->date_overture_inscrit = $request->date_overture_inscrit;
        $event->date_cloture_inscrit = $request->date_cloture_inscrit;
        $event->image = $request->image;
        $event->nb_place = $request->nb_place;
        $event->titre = $request->titre;
        $event->description = $request->description;
        $event->statut = true;
        if ($event->save()) {
            return response($event, 201);
        }
    }
    public function getevent()
    {
        return response()->json(Event::all(), 200);
    }



    // public function upload(Request $request)
    // {
    //     // Get file name from FormData (postman)
    //     $filename = $request->file('file')->getClientOriginalName();
    //     //path bech yesna3 fel ficher fi dossier angular (sna3et event) put tesna3 dossier esmou laravelimg i7ot fi westou des fichiers
    //     $path = Storage::disk('local')->put('event', $request->file('file'));
    //     //bech nsajel fel base de donnee
    //     //$path = 'event/' . $path;
    //     $file = new Document();
    //     $file->name = $filename;
    //     $file->path = $path;
    //         return response($file, 200);
    // }
    // public function deleteEvent(Request $request, $id)
    // {
    //     $event = Event::find($id);
    //     if (is_null($event)) {
    //         return response()->json(['message' => 'event no disponible'], 404);
    //     }
    //     $event->delete($request->all());
    //     return response()->json(['message' => 'evenement supprime'], 204);
    // }

    public function deleteEvent(Request $request, $id)
    {
        $event = Event::find($id);
        if (is_null($event)) {
            return response()->json(['message' => 'event no disponible'], 404);
        }
        $event->delete($request->all());
        return response()->json(['message' => 'evenement supprime'], 204);
    }
    public function getEventById($id)
    {
        $agences = Event::find($id);
        if (is_null($agences)) {
            return response()->json(['message' => 'Event non disponible'], 404);
        }
        return response()->json(Event::find($id), 200);
    }
    public  function showimg(Request $request)
    {
       // $url=
        //return "<img src='".$url."'/>";
        return response(Storage::url('link.png'), 200);
    }
    public function upload(Request $request)
    {
        // Get file name from FormData (postman)
        $filename = $request->file('file')->getClientOriginalName();
        $path = Storage::putFileAs(
            'public',
            $request->file('file'),
            $filename
        );
        $file = new Document();
        $file->name = $filename;
        $file->path = $path;
        return response($file, 200);
    }


}
