<?php

namespace App\Http\Resources;

use App\Models\Destination;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TripResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "destinations" => Destination::whereIn("id", $this->destinations)->get(),
            "created_at" => Carbon::parse($this->created_at)->toFormattedDayDateString()
        ];
    }
}
