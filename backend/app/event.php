<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class event extends Model
{
    protected $fillable = [
        'id', 'date_devent','date_overture_inscrit','date_cloture_inscrit','image','nb_place'
,'titre','description','statut'
    ];
    public function userabonne()
    {
        return $this->belongsToMany(
            User::class,
            'abonners',
            'events_id',
            'users_id'
        )->withPivot('rang','affecter');
    }
}
