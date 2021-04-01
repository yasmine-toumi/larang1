<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Agences extends Model
{
    protected $fillable = [
        'id', 'code', 'name',  'tel', 'adresse', 'active'
    ];
    public function challanges()
    {
        //return $this->belongsToMany(RelatedModel, pivot_table_name, foreign_key_of_current_model_in_pivot_table, foreign_key_of_other_model_in_pivot_table);
        return $this->belongsToMany(
            Trop::class,
            'challenges_agences',
            'agences_id',
            'challenges_id'
        )->withPivot('rang');
    }
}
