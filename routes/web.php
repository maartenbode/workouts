<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/', '/workouts');

Route::group(['middleware' => ['auth', 'verified']], function () {
    Route::resource('workouts', \App\Http\Controllers\WorkoutController::class);
    Route::resource('workout-sets', \App\Http\Controllers\WorkoutSetController::class);
});

require __DIR__.'/auth.php';
