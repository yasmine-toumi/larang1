<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Agences extends Model
{
    protected $fillable = [
        'code', 'name',  'tel','adresse', 'active'
    ];
}
