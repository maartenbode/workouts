<?php

namespace App\Http\Controllers;

use App\Models\Workout;
use App\Models\WorkoutSet;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WorkoutSetController extends Controller
{
    protected $validationRules = [
        'workout_uuid' => 'exists:workouts,uuid',
        'amount' => 'integer',
        'reps' => 'integer',
        'weight' => 'numeric',
    ];

    public function index()
    {
        //
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $request->validate($this->validationRules);

        Workout::find($request->input('workout_uuid'))->sets()->create([
            'amount' => $request->input('amount'),
            'reps' => $request->input('reps'),
            'weight' => $request->input('weight'),
            'user_uuid' => $request->user()->uuid,
        ]);

        return back();
    }

    public function show(Request $request, WorkoutSet $workoutSet)
    {
        $workoutSet = WorkoutSet::query()
            ->where('user_uuid', $request->user()->uuid)
            ->findOrFail($workoutSet->uuid);

        return Inertia::render('Workouts/Set', [
            'set' => $workoutSet,
        ]);
    }

    public function edit(WorkoutSet $workoutSet)
    {
        //
    }

    public function update(Request $request, WorkoutSet $workoutSet)
    {
        $workoutSet = WorkoutSet::query()
            ->where('user_uuid', $request->user()->uuid)
            ->findOrFail($workoutSet->uuid);

        $request->validate($this->validationRules);

        $workoutSet->update([
            'amount' => $request->input('amount'),
            'reps' => $request->input('reps'),
            'weight' => $request->input('weight'),
        ]);

        return back();
    }

    public function destroy(Request $request, WorkoutSet $workoutSet)
    {
        $workoutSet = WorkoutSet::query()
            ->where('user_uuid', $request->user()->uuid)
            ->findOrFail($workoutSet->uuid);

        $workout = $workoutSet->workout;

        $workoutSet->delete();

        return redirect()->route('workouts.show', $workout);
    }
}
