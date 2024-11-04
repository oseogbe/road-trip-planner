<script setup>
import { onMounted, ref, watch } from "vue";

const props = defineProps(["destinations"]);

import Directions from "./Directions.vue";

const center = ref({ lat: null, lng: null });
const zoom = ref(13);
const route = ref(null);
const routeDetails = ref([]);
const totalDistance = ref("");
const totalDuration = ref("");

const onMarkerClick = (destination) => {
    alert(`Destination: ${destination.name}`);
};

const calculateRoute = () => {
    if (props.destinations.length < 2) return; // Need at least two points

    const directionsService = new google.maps.DirectionsService();

    const waypoints = props.destinations.slice(1, -1).map((dest) => ({
        location: new google.maps.LatLng(dest.position.lat, dest.position.lng),
        stopover: true,
    }));

    const request = {
        origin: new google.maps.LatLng(
            props.destinations[0].position.lat,
            props.destinations[0].position.lng
        ),
        destination: new google.maps.LatLng(
            props.destinations[props.destinations.length - 1].position.lat,
            props.destinations[props.destinations.length - 1].position.lng
        ),
        waypoints,
        travelMode: google.maps.TravelMode.DRIVING,
    };

    directionsService.route(request, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
            route.value = result.routes[0];
            const legs = result.routes[0].legs;

            // Extracting steps and their details
            routeDetails.value = legs.flatMap((leg) =>
                leg.steps.map((step) => ({
                    instruction: step.instructions,
                    distance: step.distance.text,
                    duration: step.duration.text,
                }))
            );

            // Calculate total distance and duration
            totalDistance.value =
                (
                    legs.reduce((total, leg) => total + leg.distance.value, 0) /
                    1000
                ).toFixed(2) + " km"; // Convert to km

            totalDuration.value =
                Math.round(
                    legs.reduce((total, leg) => total + leg.duration.value, 0) /
                        60
                ) + " min"; // Convert to minutes
        } else {
            console.error("Error fetching directions", status);
        }
    });
};

// Watch for changes in destinations and recalculate route
watch(
    () => props.destinations,
    (newDestinations) => {
        calculateRoute();
    },
    { deep: true }
);

onMounted(() => {
    if (props.destinations.length > 0) {
        const { lat, lng } = props.destinations[0].position;
        center.value = { lat, lng };
    } else {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                center.value = { lat, lng };
            },
            (error) => {
                console.error("Error getting geolocation:", error);
            }
        );
    }
    calculateRoute();
});
</script>
<template>
    <GMapMap
        v-if="center"
        :center="center"
        :zoom="zoom"
        style="width: 100%; height: 400px"
    >
        <GMapMarker
            v-for="(destination, i) in destinations"
            :key="i"
            :position="destination.position"
            :clickable="true"
            @click="onMarkerClick(destination)"
        />
        <GMapPolyline
            v-if="route"
            :path="route.overview_path"
            strokeColor="#FF0000"
            :strokeWeight="3"
        />
    </GMapMap>
    <div class="mt-8" v-if="routeDetails.length">
        <Directions
            :routeDetails="routeDetails"
            :totalDistance="totalDistance"
            :totalDuration="totalDuration"
        />
    </div>
</template>
