<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categorie extends Model
{

    protected $fillable = [
        'category'
    ];

    public function convention()
    {
        return $this->hasMany(convention::class);
    }
}
