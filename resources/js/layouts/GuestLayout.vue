<template>
    <div class="h-screen flex">
        <section
            class="h-screen flex flex-1 justify-center items-center flex-col py-10"
        >
            <slot />
        </section>

        <div
            class="hidden xl:block w-1/2 bg-[url('/img/nature-2571115_1920.jpg')] bg-cover"
        ></div>
    </div>
</template>
