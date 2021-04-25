<?php

namespace App\Http\Controllers;

use App\Categorie;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getcategory()
    {
        return response()->json(Categorie::all(), 200);
    }

    public function getCategorieById($id)
    {
        $Categorie = Categorie::find($id);
        if (is_null($Categorie)) {
            return response()->json(['message' => 'catgorie non disponible'], 404);
        }
        return response()->json(Categorie::find($id), 200);
    }
    public function addCategorie(Request $request)
    {
        $Categorie = new Categorie();
        $Categorie->category = $request->category;

        if ($Categorie->save()) {
            return response($Categorie, 201);
        }
    }
    public function updateCategorie(Request $request, $id)
    {
        $Categorie=Categorie::find($id);
        if (is_null($Categorie)) {
            return response()->json(['message' => 'Categorie non disponible'], 400);
        }
        $Categorie->update($request->all());
        return response($Categorie, 202);
    }
    public function deleteCategorie(Request $request, $id)
    {
        $Categorie = Categorie::find($id);
        if (is_null($Categorie)) {
            return response()->json(['message' => 'Categorie non disponible'], 404);
        }
        $Categorie->delete($request->all());
        return response()->json(['message' => 'Categorie supprime'], 204);
    }
}
