<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/', '/dashboard');

Route::group(['middleware' => ['auth', 'verified']], function () {
    Route::get('/dashboard', fn () => Inertia::render('Dashboard'))->name('dashboard');
    Route::resource('workouts', \App\Http\Controllers\WorkoutController::class);
    Route::resource('workout-sets', \App\Http\Controllers\WorkoutSetController::class);
});

require __DIR__.'/auth.php';
