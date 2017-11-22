<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $table ='reviews';


    protected $fillable = [
        'book_id', 'user_id','review_title', 'review_body', 'review_score',  
    ];
}
