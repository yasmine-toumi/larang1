<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class suggestion extends Model
{
    protected $fillable = [
        'titre', 'message', 'status', 'document', 'date'
    ];
    public function users()
    {
        return $this->belongsTo(User::class, 'users_id');
    }
}
