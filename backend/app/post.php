<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class post extends Model
{
    protected $fillable = [
        'content', 'filepath'
    ];

    public function users()
    {
        return $this->belongsTo(User::class, 'users_id');
    }
    public function commentaire()
    {
        return $this->hasMany(commentaire::class);
    }
}
