<?php

namespace App\Http\Controllers;

use App\Http\Resources\TripResource;
use App\Models\Destination;
use App\Models\Trip;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TripController extends Controller
{
    public function pastTrips()
    {
        $trips = TripResource::collection(Trip::orderBy('created_at', 'desc')->get());
        return Inertia::render('Destinations/History', compact('trips'));
    }

    public function saveTrip()
    {
        $destinations = json_decode(request('destinations'), true);

        $createdDestinations = [];

        foreach ($destinations as $destinationData) {
            $destinationData['tags'] = json_encode($destinationData['tags']);

            $destination = Destination::create($destinationData);

            $createdDestinations[] = $destination->id;
        }

        Trip::create([
            'user_id' => auth()->id(),
            'destinations' => $createdDestinations,
        ]);

        return to_route('dashboard')->with('message', 'Trip saved');
    }
}
