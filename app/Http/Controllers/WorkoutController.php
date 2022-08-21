<?php

namespace App\Http\Controllers;

use App\Models\Workout;
use App\Models\WorkoutSet;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WorkoutController extends Controller
{
    public function index(Request $request)
    {
        $workouts = Workout::query()
            ->with('sets', fn ($query) => $query->where('user_uuid', $request->user()->uuid))
            ->orderBy('name')
            ->get();

        return Inertia::render('Workouts/Index', [
            'workouts' => $workouts->map(function (Workout $workout) {
                return array_merge($workout->toArray(), [
                    'stats' => [
                        'max_weight' => $workout->sets->max('weight'),
                        'last_set' => $workout->sets->count() ? $workout->sets->sortByDesc('created_at')->first()->created_at : null,
                    ]
                ]);
            }),
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
