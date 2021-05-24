<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class sondage extends Model
{
    protected $fillable = [
        'message','choix','status'
    ];
    public function users()
    {
        return $this->belongsTo(User::class, 'users_id');
    }
    public function reponce()
    {
        return $this->hasMany(reponce::class);
    }
    protected $casts =[
        'choix'=>'array'
    ];
}
