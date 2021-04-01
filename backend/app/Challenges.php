<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Symfony\Component\HttpKernel\DataCollector\AjaxDataCollector;

class Challenges extends Model
{
    protected $fillable = [
        'name', 'description',  'date_debut', 'date_fin'
    ];
    public function agences()
    {
        //return $this->belongsToMany(RelatedModel, pivot_table_name, foreign_key_of_current_model_in_pivot_table, foreign_key_of_other_model_in_pivot_table);
        return $this->belongsToMany(
            Agences::class,
            'challenges_agences',
            'challenges_id',
            'agences_id'
        )->withPivot('rang');
    }
}
