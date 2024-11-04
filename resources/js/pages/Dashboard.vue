<script setup>
import { ref } from "vue";
import { Head } from "@inertiajs/vue3";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout.vue";
import Map from "@/components/Map.vue";
import DestinationForm from "@/components/destinations/DestinationForm.vue";
import DestinationList from "@/components/destinations/DestinationList.vue";

const destinations = ref(
    JSON.parse(localStorage.getItem("destinations")) ?? []
);

const updateDestinations = (newDestination) => {
    destinations.value.push(newDestination);
    localStorage.setItem("destinations", JSON.stringify(destinations.value));
};

const deleteDestination = (index) => {
    destinations.value.splice(index, 1);
    localStorage.setItem("destinations", JSON.stringify(destinations.value));
};
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <div class="py-12">
            <div class="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                <div
                    class="flex flex-col lg:flex-row gap-y-8 lg:gap-x-8 mx-3 lg:mx-0"
                >
                    <div class="flex-1 flex flex-col gap-y-8">
                        <DestinationForm
                            @add-destination="updateDestinations"
                        />
                        <DestinationList
                            :destinations="destinations"
                            @reorder="(d) => (destinations = d)"
                            @remove="deleteDestination"
                        />
                    </div>
                    <div class="flex-1">
                        <Map :destinations="destinations" />
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
