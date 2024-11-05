<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Trip extends Model
{
    protected $fillable = ['user_id', 'destinations'];

    protected $casts = [
        'destinations' => 'array'
    ];
}