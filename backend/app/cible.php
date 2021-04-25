<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class cible extends Model
{
    protected $fillable = [
    'cible'
    ];
    public function convention()
    {
        return $this->hasMany(convention::class);
    }

}
