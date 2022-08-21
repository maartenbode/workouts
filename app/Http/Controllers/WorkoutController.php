<?php

namespace App\Http\Controllers;

use App\Models\Workout;
use App\Models\WorkoutSet;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WorkoutController extends Controller
{
    public function index()
    {
        $workouts = Workout::orderBy('name')->get();

        return Inertia::render('Workouts/Index', [
            'workouts' => $workouts,
        ]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show(Request $request, Workout $workout)
    {
        return Inertia::render('Workouts/Detail', [
            'workout' => $workout,
            'sets' => $workout
                ->sets()
                ->where('user_uuid', $request->user()->uuid)
                ->latest()
                ->get()
                ->groupBy(fn (WorkoutSet $set) => $set->created_at->locale('nl_NL')->isoFormat('dddd DD MMMM Y')),
        ]);
    }

    public function edit(Workout $workout)
    {
        //
    }

    public function update(Request $request, Workout $workout)
    {
        //
    }

    public function destroy(Workout $workout)
    {
        //
    }
}
