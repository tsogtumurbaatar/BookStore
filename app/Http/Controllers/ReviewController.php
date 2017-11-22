<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use DB;
use App\Review;

class ReviewController extends Controller
{
    function indexApi(Request $request, $id)
    {
    	$my_array = DB::table('reviews')
		->orderBy('review_id', 'desc')
		->where('book_id', $id)
		->get();
		return \Response::json($my_array);
    }

    function fetchOneApi(Request $request, $id)
    {
		 $my_array = DB::table('reviews')
		->where('review_id', $id)
		->first();
		return \Response::json($my_array);
    }

    function removeApi(Request $request)
	{
		 $ids = $request['review_ids'];

		 $deleted_language = new Collection();
		 
		foreach ($ids as $id) {
		$deleted_language->push(Language::where('review_id',$id)->delete());	
		}
		 
		 return response()->json($deleted_language);
	}

	function addApi(Request $request)
	{

		$newcat =  Review::create([
			'book_id' => $request['book_id'],
			'user_id' => $request['user_id'],
			'review_title' => $request['review_title'],
			'review_body' => $request['review_body'],
			'review_score' => $request['review_score']
			
			]);
		$newcat->review_id = $newcat->id;

		$total_score = DB::table('reviews')
			->where('book_id', $request['book_id'])
			->sum('review_score');

		$total_review = DB::table('reviews')
			->where('book_id', $request['book_id'])
			->count();
		$book_score = $total_score / $total_review;	

		DB::table('books')
		->where('book_id',$request['book_id'])
		->update([
			'book_point' => $book_score,
			'book_review_count' => $total_review
			]);


		return response()->json($newcat);
	}

	function saveApi(Request $request)
	{
		$updatedCat = DB::table('reviews')
		->where('review_id',$request['review_id'])
		->update([
			'lng_name' => $request['lng_name'],
			'lng_desc' => $request['lng_desc'],
			]);

		if($updatedCat)
		{
			 $my_array = DB::table('reviews')
			->where('review_id', $request['review_id'])
			->first();
			return \Response::json($my_array);
		}
		
		else
		return response()->json($updatedCat);
	}
}
