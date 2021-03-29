<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Agences extends Model
{
    protected $fillable = [
       'id', 'code', 'name',  'tel','adresse', 'active'
    ];
    public function challenges()
    {
        return $this->belongsToMany(Challenges::class);
    }
}
