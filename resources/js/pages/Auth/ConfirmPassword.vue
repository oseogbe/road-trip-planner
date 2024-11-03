<script setup>
import GuestLayout from "@/layouts/GuestLayout.vue";
import InputError from "@/components/InputError.vue";
import InputLabel from "@/components/InputLabel.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import TextInput from "@/components/TextInput.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";

const form = useForm({
    password: "",
});

const submit = () => {
    form.post(route("password.confirm"), {
        onFinish: () => form.reset(),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Confirm Password" />

        <div class="min-w-[290px] sm:w-[420px] flex-center flex-col">
            <Link href="/">
                <h1 class="text-2xl lg:text-3xl font-semibold lg:font-bold">
                    <span class="text-dark-green">Road</span
                    ><span class="text-brownish-yellow">Trip</span>Planner
                </h1>
            </Link>

            <div class="mt-8 mb-4 text-sm text-gray-600">
                This is a secure area of the application. Please confirm your
                password before continuing.
            </div>

            <form @submit.prevent="submit">
                <div>
                    <InputLabel for="password" value="Password" />
                    <TextInput
                        id="password"
                        type="password"
                        class="mt-1 block w-full"
                        v-model="form.password"
                        required
                        autocomplete="current-password"
                        autofocus
                    />
                    <InputError class="mt-2" :message="form.errors.password" />
                </div>

                <div class="mt-4 flex justify-end">
                    <PrimaryButton
                        class="ms-4"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                    >
                        Confirm
                    </PrimaryButton>
                </div>
            </form>
        </div>
    </GuestLayout>
</template>
