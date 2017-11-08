<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
     
	protected $table ='books';


    protected $fillable = [
        'book_name', 'book_motto',  'book_desc','book_isbn' ,'book_publisher' ,'book_author','book_price1' ,'book_price2' ,'cat_id' ,'lng_id', 'book_img1','book_img2','book_img3','book_img4',
    ];
}
