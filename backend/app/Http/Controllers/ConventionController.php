<?php

namespace App\Http\Controllers;

use App\Categorie;
use App\cible;
use Illuminate\Support\Facades\Storage;
use App\convention;
use Illuminate\Http\Request;

class ConventionController extends Controller
{
    public function getconvention()
    {
        return response()->json(convention::all(), 200);
    }
    public function addconvention(Request $request, $id_cat,$id_cib)
    {
        $convention = new convention();
        $convention->titre = $request->titre;
        $convention->description = $request->description;
        $convention->adresse = $request->adresse;
        $convention->tel = $request->tel;
        $convention->image = $request->image;
        $convention->logo = $request->logo;
        $convention->document = $request->document;
        $convention->date_debut = $request->date_debut;
        $convention->date_fin = $request->date_fin;
        $categories= Categorie::find($id_cat);
        // $convention->category()->attach($request->categories_id);
        $convention->category()->associate($categories, [$convention->category_id]);
        $cible = cible::find($id_cib);
        $convention->cible()->associate($cible,[$convention->cible_id]);
        if ($convention->save()) {
            return response($convention, 201);
        }
    }

    public function getconvByCate($id_cat)
    {
        $categories = Categorie::find($id_cat);
return response()->json(convention::where('category_id', $categories->id)->get(), 200);

    }


}
