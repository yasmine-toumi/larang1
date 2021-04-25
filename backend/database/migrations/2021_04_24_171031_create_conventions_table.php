<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConventionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('conventions', function (Blueprint $table) {
            $table->id();
            $table->text('titre');
            $table->string('description');
            $table->text('adresse');
            $table->integer('tel');
            $table->string('image')->nullable();
            $table->string('logo')->nullable();
            $table->string('document')->nullable();
            $table->date('date_debut');
            $table->date('date_fin');
            $table->unsignedBigInteger('category_id')->unsigned();
            $table->foreign('category_id')->references('id')->on('categories')
                ->onDelete('cascade');
            $table->unsignedBigInteger('cible_id')->unsigned();
            $table->foreign('cible_id')->references('id')->on('cibles')
                ->onDelete('cascade');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('conventions');
    }
}
