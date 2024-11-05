<script setup>
import { useForm, usePage } from "@inertiajs/vue3";

import { useToast } from "vue-toastification";

import { Button } from "../ui/button";

const form = useForm({
    destinations: localStorage.getItem("destinations"),
});

const toast = useToast();
const { props } = usePage();

const saveTrip = () => {
    const formattedDestinations = JSON.parse(
        localStorage.getItem("destinations")
    ).map((destination) => ({
        name: destination.name,
        area: destination.area,
        lat: destination.position.lat,
        lng: destination.position.lng,
        tags: destination.tags,
    }));

    form.destinations = JSON.stringify(formattedDestinations);

    form.post(route("save.trip"), {
        onFinish: () => {
            toast.success(props.flash.message, {
                timeout: 2000,
            });
            localStorage.removeItem("destinations");
        },
    });
};
</script>
<template>
    <form @submit.prevent="saveTrip">
        <Button class="bg-dark-green text-white w-full" size="lg" type="submit"
            >Save Trip</Button
        >
    </form>
</template>
