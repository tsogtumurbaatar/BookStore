<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use DB;
use App\Language;

class LngController extends Controller
{
    function indexApi()
    {
    	$my_array = DB::table('language')
		->orderBy('lng_id', 'asc')
		->get();
		return \Response::json($my_array);
    }

    function fetchOneApi(Request $request, $id)
    {
		 $my_array = DB::table('language')
		->where('lng_id', $id)
		->first();
		return \Response::json($my_array);
    }

    function removeApi(Request $request)
	{
		 $ids = $request['lng_ids'];

		 $deleted_language = new Collection();
		 
		foreach ($ids as $id) {
		$deleted_language->push(Language::where('lng_id',$id)->delete());	
		}
		 
		 return response()->json($deleted_language);
	}

	function addApi(Request $request)
	{

		$newcat =  Language::create([
			'lng_name' => $request['lng_name'],
			'lng_desc' => $request['lng_desc']
			]);
		$newcat->lng_id = $newcat->id;

		return response()->json($newcat);
	}

	function saveApi(Request $request)
	{
		$updatedCat = DB::table('language')
		->where('lng_id',$request['lng_id'])
		->update([
			'lng_name' => $request['lng_name'],
			'lng_desc' => $request['lng_desc'],
			]);

		if($updatedCat)
		{
			 $my_array = DB::table('language')
			->where('lng_id', $request['lng_id'])
			->first();
			return \Response::json($my_array);
		}
		
		else
		return response()->json($updatedCat);
	}
}
