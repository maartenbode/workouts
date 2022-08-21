<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class WorkoutSet extends Model
{
    use HasFactory, UsesUuid;

    public function workout()
    {
        return $this->belongsTo(Workout::class);
    }
}
