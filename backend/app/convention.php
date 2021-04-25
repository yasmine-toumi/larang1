<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class convention extends Model
{
    protected $fillable = [
        'titre', 'description', 'adresse', 'tel', 'image', 'logo', 'document', 'date_debut', 'date_fin'
    ];
    public function category()
    {
        return $this->belongsTo(Categorie::class,'category_id');
    }
    public function cible()
    {
        return $this->belongsTo(cible::class,'cible_id');
    }
}
