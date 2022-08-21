<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Workout extends Model
{
    use HasFactory, UsesUuid;

    public function sets()
    {
        return $this->hasMany(WorkoutSet::class);
    }
}
