<script setup>
import { ref, watch } from "vue";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { MapPin } from "lucide-vue-next";

const props = defineProps(["destination", "nearbyPlaces", "open"]);

const emit = defineEmits(["dialogClosed"]);

const isDialogOpen = ref(props.open ?? false);

watch(
    () => isDialogOpen.value,
    (newVal) => {
        emit("dialogClosed");
    }
);
</script>
<template>
    <Dialog v-model:open="isDialogOpen">
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Nearby Attractions</DialogTitle>
                <DialogDescription>
                    {{ destination }}
                </DialogDescription>
            </DialogHeader>
            <div>
                <ul class="space-y-4">
                    <li
                        v-for="(place, index) in nearbyPlaces"
                        :key="index"
                        class="flex items-start gap-x-3 relative"
                    >
                        <MapPin size="14" class="absolute top-2 left-0" />
                        <div class="ml-6">
                            {{ place.name }} -
                            {{ place.vicinity }}
                        </div>
                    </li>
                </ul>
            </div>
        </DialogContent>
    </Dialog>
</template>
