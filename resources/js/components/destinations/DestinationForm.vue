<script setup>
import { ref } from "vue";

import Button from "../ui/button/Button.vue";

const emit = defineEmits(["add-destination"]);

const destination = ref({
    name: "",
    area: "",
    position: {
        lat: null,
        lng: null,
    },
    tags: [],
});

const error = ref("");

const addDestination = () => {
    const storedDestinations = localStorage.getItem("destinations");
    if (storedDestinations) {
        const destinations = JSON.parse(storedDestinations);
        const latlng = destinations.flatMap((d) => ({
            lat: d.position.lat,
            lng: d.position.lng,
        }));
        for (const element of latlng) {
            if (
                element.lat === destination.value.position.lat &&
                element.lng === destination.value.position.lng
            ) {
                error.value = "Destination already selected";
                return;
            }
        }
    }
    emit("add-destination", destination.value);
    error.value = "";
};

const setPlace = (e) => {
    destination.value = {
        name: e.name,
        area: e.vicinity,
        position: {
            lat:
                typeof e.geometry.location.lat === "function"
                    ? e.geometry.location.lat()
                    : e.geometry.location.lat,
            lng:
                typeof e.geometry.location.lng === "function"
                    ? e.geometry.location.lng()
                    : e.geometry.location.lng,
        },
        tags: e.types,
    };
};
</script>
<template>
    <form @submit.prevent="addDestination" class="w-full">
        <div class="space-y-3">
            <GMapAutocomplete
                placeholder="Enter a destination"
                class="flex h-10 w-full rounded-md border focus:border-brownish-yellow focus-visible:ring-0 bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                @place_changed="setPlace"
                required
            >
            </GMapAutocomplete>
            <div v-if="error" class="mt-3 text-red-500 text-sm">
                {{ error }}
            </div>
            <Button type="submit" class="bg-dark-green text-white"
                >Add Destination</Button
            >
        </div>
    </form>
</template>
