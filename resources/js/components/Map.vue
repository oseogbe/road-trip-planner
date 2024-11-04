<script setup>
import { onMounted, ref } from "vue";

const props = defineProps(["destinations"]);

const center = ref({ lat: null, lng: null });

const zoom = ref(13);

const onMarkerClick = (destination) => {
    alert(`Destination: ${destination.name}`);
};

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
    </GMapMap>
</template>
