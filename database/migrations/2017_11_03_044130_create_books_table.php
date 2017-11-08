<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->increments('book_id');
            $table->string('book_name',64)->nullable();
            $table->string('book_motto',256)->nullable();
            $table->text('book_desc')->nullable();
            $table->string('book_isbn',64)->nullable();
            $table->string('book_publisher',64)->nullable();
            $table->string('book_author',64)->nullable();
            $table->float('book_point', 8, 2)->nullable();
            $table->float('book_price1', 8, 2)->nullable();
            $table->float('book_price2', 8, 2)->nullable();
            $table->integer('book_review_count')->default(0);
            $table->integer('cat_id')->nullable();
            $table->integer('lng_id')->nullable();
            $table->string('book_img1',64)->default('default.jpg');
            $table->string('book_img2',64)->default('default.jpg');
            $table->string('book_img3',64)->default('default.jpg');
            $table->string('book_img4',64)->default('default.jpg');
             
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('books');
    }
}
