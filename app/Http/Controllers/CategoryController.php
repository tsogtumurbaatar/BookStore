<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Category;

class CategoryController extends Controller
{
    function indexApi()
    {
    	$my_array = DB::table('categories')
		->orderBy('cat_id', 'desc')
		->get();
		sleep(3);
		return \Response::json($my_array);
    }

    function deleteApi(Request $request)
	{
		 $ids = $request['ids'];
		 
		foreach ($ids as $id) {
		Books::where('id',$id)->delete();	
		}
		 
		 return response()->json('success');
	}

	function addApi(Request $request)
	{
		$newpost =  Category::create([
			'book_name' => $request['book_name'],
			'book_desc' => $request['book_desc'],
			'cat_id' => $request['cat_id']
			]);
		$newpost->id = $newpost->id;

		return response()->json($newpost);
	}

	function updateApi(Request $request)
	{
		DB::table('categories')
		->where('id',$request['id'])
		->update([
			'book_name' => $request['book_name'],
			'book_desc' => $request['book_desc'],
			'cat_id' => $request['cat_id']
			]);

		return response()->json($request);
	}
}
