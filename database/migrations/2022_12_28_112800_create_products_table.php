<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('category_id');
            $table->unsignedBigInteger('subcategory_id');
            $table->integer('brand_id');
            $table->string('name');
            $table->string('slug')->nullable();
            $table->text('details');
            $table->string('price');
            $table->string('image');
            $table->string('size')->nullable();
            $table->string('color')->nullable();
            $table->string('discount_price')->nullable();
            $table->string('stockout')->nullable();
            $table->string('hot_deal')->nullable();
            $table->string('buy_one_get_one')->nullable();
            $table->timestamps();
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->foreign('subcategory_id')->references('id')->on('subcategories')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
