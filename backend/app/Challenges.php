<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Symfony\Component\HttpKernel\DataCollector\AjaxDataCollector;

class Challenges extends Model
{
    protected $fillable = [
        'name', 'description',  'date_debut', 'date_fin','affected'
    ];
    public function agences()
    {
        return $this->belongsToMany(
            Agences::class,
            'challenges_agences',
            'challenges_id',
            'agences_id'
        )->withPivot('rang');
    }
}
