<script setup>
import { Badge } from "../ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card";

const props = defineProps(["index", "destination"]);

const getTags = (tags) => {
    return tags.filter(
        (t) => !["point_of_interest", "establishment"].includes(t)
    );
};
</script>
<template>
    <Card class="relative">
        <CardHeader>
            <CardTitle class="text-base">{{ destination.name }}</CardTitle>
            <CardDescription>
                {{ destination.area }}
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div class="flex gap-x-3">
                <Badge
                    v-for="tag in getTags(destination.tags)"
                    :key="tag"
                    class="bg-brownish-yellow px-2 text-white"
                    >{{ tag }}</Badge
                >
            </div>
        </CardContent>
        <img
            src="/img/x-circle-icon.svg"
            class="absolute top-3 right-3 cursor-pointer w-4"
            @click="$emit('remove', index)"
        />
    </Card>
</template>
