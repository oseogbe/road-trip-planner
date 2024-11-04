<script setup>
import Badge from "./ui/badge/Badge.vue";

import { Clock } from "lucide-vue-next";

defineProps(["routeDetails", "totalDistance", "totalDuration"]);
</script>
<template>
    <h3 class="text-2xl font-semibold leading-none tracking-tight">
        Directions
    </h3>
    <ul class="max-h-[400px] overflow-y-scroll space-y-4 mt-6">
        <li
            v-for="(step, index) in routeDetails"
            :key="index"
            class="flex items-center justify-between"
        >
            <span class="w-[65%]">
                <div v-html="step.instruction"></div>

                <Badge class="bg-grey px-2 text-white">{{
                    step.distance
                }}</Badge>
            </span>
            <div class="flex items-center gap-x-1">
                <Clock size="14" />
                {{ step.duration }}
            </div>
        </li>
    </ul>
    <div class="mt-6 text-lg lg:text-xl">
        <strong>Total Distance: {{ totalDistance }}</strong
        ><br />
        <strong>Total Duration: {{ totalDuration }}</strong>
    </div>
</template>
