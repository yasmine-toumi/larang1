<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class reponce extends Model
{
    protected $fillable = [
       'reponce'
    ];
    public function users()
    {
        return $this->belongsTo(User::class, 'users_id');
    }
    public function sondage()
    {
        return $this->belongsTo(sondage::class, 'sondage_id');
    }




}
