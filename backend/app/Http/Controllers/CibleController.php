<?php
namespace App\Http\Controllers;

use App\cible;
use Illuminate\Http\Request;

class CibleController extends Controller
{
        public function getcible()
        {
            return response()->json(cible::all(), 200);
        }

        public function getCibleById($id)
        {
            $Cible  = cible::find($id);
            if (is_null( $Cible)) {
                return response()->json(['message' => 'cible non disponible'], 404);
            }
            return response()->json(cible::find($id), 200);
        }
        public function addcible(Request $request)
        {
            $Cible = new cible();
            $Cible->cible = $request->cible;

            if ($Cible->save()) {
                return response($Cible, 201);
            }
        }
        public function updatecible(Request $request, $id)
        {
            $Cible = cible::find($id);
            if (is_null($Cible)) {
                return response()->json(['message' => 'cible non disponible'], 400);
            }
            $Cible->update($request->all());
            return response($Cible, 202);
        }
        public function deletecible(Request $request, $id)
        {
            $Cible = cible::find($id);
            if (is_null($Cible)) {
                return response()->json(['message' => 'cible non disponible'], 404);
            }
            $Cible->delete($request->all());
            return response()->json(['message' => 'cible supprime'], 204);
        }
}
