<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class commentaire extends Model
{
    protected $fillable = [
        'content', 'image'
    ];
    public function users()
    {
        return $this->belongsTo(User::class, 'users_id');
    }
    public function posts()
    {
        return $this->belongsTo(post::class, 'post_id');
    }
}
