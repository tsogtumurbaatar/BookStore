<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use DB;
use App\Book;

class BookController extends Controller
{
    function indexApi()
    {
    	$my_array = DB::table('books')
		->leftJoin('categories','books.cat_id','=','categories.cat_id')
		->select('books.*','categories.cat_name')
		->orderBy('books.book_id', 'desc')
		->get();
	
		return \Response::json($my_array);
    }

    function fetchOneApi(Request $request, $id)
    {
		 $my_array = DB::table('books')
		 ->leftJoin('categories','books.cat_id','=','categories.cat_id')
		 ->leftJoin('language','books.lng_id','=','language.lng_id')
		 ->select('books.*','categories.cat_name','language.lng_name')
		 ->where('book_id', $id)
		 ->first();
		

		return \Response::json($my_array);
    }

    function removeApi(Request $request)
	{
		 $ids = $request['book_ids'];

		 $deleted_books = new Collection();
		 
		foreach ($ids as $id) {
		$deleted_books->push(Book::where('book_id',$id)->delete());	
		}
		 
		 return response()->json($deleted_books);
	}

	function addApi(Request $request)
	{

		$newbook =  Book::create([
			'book_name' => $request['book_name'],
			'book_desc' => $request['book_desc'],
			'book_motto' => $request['book_motto'],								  
			'book_isbn' => $request['book_isbn' ],
			'book_publisher' => $request['book_publisher'],
			'book_author' => $request['book_author'],
			'book_price1' => $request['book_price1'],
			'book_price2' => $request['book_price2'],
			'cat_id' => $request['cat_id'],
			'lng_id' => $request['lng_id'],
			'book_img1' => $request['book_img1'],
			'book_img2' => $request['book_img2'],
			'book_img3' => $request['book_img3'],
			'book_img4' => $request['book_img4']
			]);
		$newbook->book_id = $newbook->id;

		return response()->json($newbook);
	}

	function saveApi(Request $request)
	{
		$updatedCat = DB::table('books')
		->where('book_id',$request['book_id'])
		->update([
		'book_name' => $request['book_name'],
			'book_desc' => $request['book_desc'],
			'book_motto' => $request['book_motto'],								  
			'book_isbn' => $request['book_isbn' ],
			'book_publisher' => $request['book_publisher'],
			'book_author' => $request['book_author'],
			'book_price1' => $request['book_price1'],
			'book_price2' => $request['book_price2'],
			'cat_id' => $request['cat_id'],
			'lng_id' => $request['lng_id'],
			'book_img1' => $request['book_img1'],
			'book_img2' => $request['book_img2'],
			'book_img3' => $request['book_img3'],
			'book_img4' => $request['book_img4']
			]);


		if($updatedCat)
		{
			 $my_array = DB::table('books')
			->where('book_id', $request['book_id'])
			->first();
			return \Response::json($my_array);
		}
		
		else
		return response()->json($updatedCat);
	}
}
