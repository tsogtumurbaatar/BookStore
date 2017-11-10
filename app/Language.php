<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
   	protected $table ='language';


    protected $fillable = [
        'lng_name', 'lng_desc', 
    ];
}
