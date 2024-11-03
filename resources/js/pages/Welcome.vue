<script setup>
import { Link } from "@inertiajs/vue3";
import { Button } from "@/components/ui/button";

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
});
</script>

<template>
    <!-- v-if="$page.props.auth.user" -->
    <img
        src="/img/nature-2571115_1920.jpg"
        class="absolute top-0 left-0 w-full h-full object-cover"
    />
    <div class="bg-gray-50 dark:bg-black dark:text-white/50">
        <div
            class="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white"
        >
            <div
                class="absolute top-6 w-full flex items-center justify-between px-4 xl:max-w-screen-2xl"
            >
                <div class="bg-white px-3 py-2 lg:px-4 lg:py-3 rounded-md">
                    <h1 class="text-lg lg:text-3xl font-semibold lg:font-bold">
                        <span class="text-dark-green">Road</span
                        ><span class="text-brownish-yellow">Trip</span>Planner
                    </h1>
                </div>
                <div
                    v-if="canLogin && canRegister"
                    class="flex items-center justify-center gap-x-4"
                >
                    <Link :href="route('login')">
                        <Button
                            class="shadow-none lg:bg-white lg:h-10 lg:rounded-md px-0 lg:px-8 font-medium text-dark-green"
                        >
                            Login
                        </Button>
                    </Link>
                    <Link :href="route('register')">
                        <Button
                            class="shadow-none lg:bg-white lg:h-10 lg:rounded-md px-0 lg:px-8 font-medium text-dark-green"
                            >Create an account</Button
                        >
                    </Link>
                </div>
            </div>
            <main></main>
        </div>
    </div>
</template>
