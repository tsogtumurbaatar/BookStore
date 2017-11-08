<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use DB;
use App\Category;

class CategoryController extends Controller
{
    function indexApi()
    {
    	$my_array = DB::table('categories')
		->orderBy('cat_id', 'asc')
		->get();
		return \Response::json($my_array);
    }

    function fetchOneApi(Request $request, $id)
    {
		 $my_array = DB::table('categories')
		->where('cat_id', $id)
		->first();
		return \Response::json($my_array);
    }

    function removeApi(Request $request)
	{
		 $ids = $request['cat_ids'];

		 $deleted_categories = new Collection();
		 
		foreach ($ids as $id) {
		$deleted_categories->push(Category::where('cat_id',$id)->delete());	
		}
		 
		 return response()->json($deleted_categories);
	}

	function addApi(Request $request)
	{

		$newcat =  Category::create([
			'cat_name' => $request['cat_name'],
			'cat_desc' => $request['cat_desc']
			]);
		$newcat->cat_id = $newcat->id;

		return response()->json($newcat);
	}

	function saveApi(Request $request)
	{
		$updatedCat = DB::table('categories')
		->where('cat_id',$request['cat_id'])
		->update([
			'cat_name' => $request['cat_name'],
			'cat_desc' => $request['cat_desc'],
			]);

		if($updatedCat)
		{
			 $my_array = DB::table('categories')
			->where('cat_id', $request['cat_id'])
			->first();
			return \Response::json($my_array);
		}
		
		else
		return response()->json($updatedCat);
	}
}
