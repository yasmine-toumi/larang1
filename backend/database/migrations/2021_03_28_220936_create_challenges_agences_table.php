<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChallengesAgencesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('challenges_agences', function (Blueprint $table) {
            $table->id();
            $table->integer('rang');
            $table->unsignedBigInteger('challenges_id');
            $table->foreign('challenges_id')
            ->references('id')
                ->on('challenges')->onDelete('cascade');
            $table->unsignedBigInteger('agences_id')->unsigned();
            $table->foreign('agences_id')
            ->references('id')
            ->on('agences')->onDelete('cascade');
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
        Schema::dropIfExists('challenges_agences');
    }
}
