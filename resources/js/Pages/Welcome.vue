<script setup>
import { Head, Link } from "@inertiajs/vue3";
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
    <!-- <Head title="Welcome" /> -->
    <!-- v-if="$page.props.auth.user" -->
    <div class="bg-gray-50 dark:bg-black dark:text-white/50">
        <div
            class="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white"
        >
            <main>
                <h1 class="text-3xl">Road Trip Planner</h1>
                <div
                    v-if="canLogin && canRegister"
                    class="flex items-center justify-center gap-x-4 mt-3"
                >
                    <Link :href="route('login')">
                        <Button> Login </Button>
                    </Link>
                    <Link :href="route('register')">
                        <Button outline="primary">Create an account</Button>
                    </Link>
                </div>
            </main>
        </div>
    </div>
</template>
