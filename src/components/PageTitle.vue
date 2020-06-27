<template>

    <div class="container mx-auto px-4 sm:px-0">
        <div class="mb-4 md:mb-8 lg:mb-16">
            <h1 class="text-5xl mx-auto lg:mx-0 font-medium rounded-full w-48 h-48 flex justify-center items-center shadow-lg border">{{title}}</h1>
            <figure id="titleLogoContainer" class="w-1/2 h-auto absolute top-8 right-8">
                <slot />
            </figure>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageTitle",
        props: {
            title: String
        }
    }
</script>

<style lang="scss" scoped>
    #titleLogoContainer {
        width: 75%;
        top: 8em;
        right: 2em;
        @media (min-width: 1024px) {
            right: 0em;
            width: 50%;
        }
        z-index: -1;
    }

    svg {
        width: 100%;
        height: auto;
    }
    h1 {
        background-color: rgba(250,250,250, 0.6);
        @media (min-width: 1024px) {
            background-color: rgba(250,250,250, 1);
        }
        color: #555555;
    }

</style>