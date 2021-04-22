<?php

namespace App\Http\Controllers;

use App\abonner;
use App\event;
use App\User;
use Illuminate\Http\Request;

class AbonnerController extends Controller
{
    public function addUserToEvent($iduser,$iddevent)
    {
        $user= new User();
        $event = new event();
        $user = User::find($iduser);
        $event = event::find($iddevent);
        $abonner = new abonner();
        if (is_null($user)) {
            return response()->json(['message' => 'user no disponible'], 404);
        }
        if (is_null($event)) {
            return response()->json(['message' => 'event no disponible'], 404);
        }
        if($abonner::where('users_id', $iduser)->where('events_id', $iddevent)->exists() ) {
            return response()->json(['message' => 'deja inscri rakk héyy '], 200);

        }
        else{


        //userAffected yehseb 9adeh men user affecter ll event mou3ayen
        $userAffected= $abonner::where('events_id', $iddevent)->count()+1;

        if ($event->nb_place  < $userAffected) {
            //ma3adech 3andek 7ata blasa
            if ($event->nb_place +3  < $userAffected) {
                    return response()->json(['message' => 'arja3 ghodwa'], 200);

            }
            //affecte twali 0 ki yebda fel liste d'attente
            //ken nombre de place meyzazich yodkhel fi liste d'attente
            $event->userabonne()->attach($user, ['rang' => 1, 'affecter' => false]);
                return response()->json(['message' => 'khlat makher rak fi list dattente'], 200);
        }
        $event->userabonne()->attach($user, ['rang' => 1, 'affecter' => true]);
            return response()->json(['message' => 'c bn jawek behi'], 200);

        }
    }
    public function annulationAbonnement($iduser, $iddevent,Request $request)
    {
        $user = new User();
        $event = new event();
        $user = User::find($iduser);
        $event = event::find($iddevent);

        $abonner = new abonner();
        $listAttend = new abonner();
        if (is_null($user)) {
            return response()->json(['message' => 'user no disponible'], 200);
        }
        if (is_null($event)) {
            return response()->json(['message' => 'event no disponible'], 200);
        }
        if (is_null($abonner::where('users_id', $iduser)->where('events_id', $iddevent) -> first())) {
            return response()->json(['message' => ' deja makech inscri ya bgra'], 200);
        }
        //traja3lek abonnement 3ala 7aseb user_id w events_id
        $abonnerToDelete= $abonner::where('users_id', $iduser)->where('events_id', $iddevent)->first();
        $abonnerToDelete->delete();
        if (is_null($abonner::where('affecter', false)->where('events_id', $iddevent)->first())) {
            return response()->json(['message' => 'fama had fi list dattente'], 200);
        }
        $listAttend = $abonner::where('affecter', false)->where('events_id', $iddevent)->first()->get();
        $listAttend->affecter= true;
        $listAttend->update($listAttend -> toArray());
        return response()->json(['message' => ' c bn jawek behi'], 200);
    }
    public function getAllabonne($idevent){
        $event = new event();
        $event = event::find($idevent);
        return response()->json($event->userabonne()->get(), 200);

    }

}
