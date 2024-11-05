<script setup>
import { Head } from "@inertiajs/vue3";

import AuthenticatedLayout from "@/layouts/AuthenticatedLayout.vue";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

defineProps(["trips"]);
</script>

<template>
    <Head title="Destinations" />

    <AuthenticatedLayout>
        <div class="py-12">
            <div class="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                <Card v-for="trip in trips">
                    <CardHeader>
                        <CardTitle class="text-base">
                            <div v-for="(destination, i) in trip.destinations">
                                {{ destination.name }}, {{ destination.area }}
                                <div
                                    v-if="i < trip.destinations.length - 1"
                                    class="ml-2 h-4 w-1 bg-dark-green"
                                ></div>
                            </div>
                        </CardTitle>
                        <CardDescription>{{ trip.created_at }}</CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
