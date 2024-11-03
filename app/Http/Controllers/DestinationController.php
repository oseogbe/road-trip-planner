<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DestinationController extends Controller
{
    public function pastTrips()
    {
        return Inertia::render('Destinations/History');
    }
}
