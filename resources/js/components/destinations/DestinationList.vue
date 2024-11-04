<script setup>
import { VueDraggableNext as draggable } from "vue-draggable-next";
import { Alert, AlertDescription } from "@/components/ui/alert";
import DestinationListItem from "./DestinationListItem.vue";

const props = defineProps(["destinations"]);
</script>
<template>
    <div>
        <Alert class="bg-brownish-yellow" v-show="destinations.length > 1">
            <AlertDescription>
                Drag cards to re-order destinations
            </AlertDescription>
        </Alert>

        <draggable
            :list="destinations"
            @change="$emit('reorder', destinations)"
            class="mt-4 space-y-4 lg:space-y-6"
        >
            <transition-group>
                <template
                    v-for="(destination, i) in destinations"
                    :key="destination.name"
                >
                    <DestinationListItem
                        :index="i"
                        :destination="destination"
                        @remove="(i) => $emit('remove', i)"
                    />
                </template>
            </transition-group>
        </draggable>
    </div>
</template>
