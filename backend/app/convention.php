<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class convention extends Model
{
    protected $fillable = [
        'name', 'path'
    ];
}
