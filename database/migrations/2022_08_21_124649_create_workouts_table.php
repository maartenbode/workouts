<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('workouts', function (Blueprint $table) {
            $table->uuid()->primary();
            $table->string('name');
            $table->string('img_path')->nullable();
            $table->boolean('is_public')->default(false);
            $table->timestamps();
        });

        Schema::create('workout_sets', function (Blueprint $table) {
            $table->uuid()->primary();
            $table->foreignUuid('workout_uuid')->references('uuid')->on('workouts');
            $table->foreignUuid('user_uuid')->references('uuid')->on('users');
            $table->integer('amount');
            $table->integer('reps');
            $table->float('weight');
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
        Schema::dropIfExists('workouts');
    }
};
