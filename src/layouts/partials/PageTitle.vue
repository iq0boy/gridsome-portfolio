<template>

    <div id="titleContainer" class="container mx-auto px-4 sm:px-0">
        <div class="mb-4 md:mb-8 lg:mb-16">
            <h1 class="mx-auto w-32 h-32 text-2xl lg:w-48 lg:h-48 lg:text-4xl lg:mx-0 rounded-full flex justify-center items-center shadow-lg transition duration-300 ease-in-out">{{title}}</h1>
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
    #titleContainer {
        height: 16em;
        @media (min-width: 1024px) {
            height: 20em;
        }
    }

    #titleLogoContainer {
        width: 74%;
        top: 8em;
        right: 8%;
        @media (min-width: 1024px) {
            right: 0;
            width: 50%;
        }
        z-index: -1;
    }
    .blob svg {
        width: 15em;
        height: 15em;
    }
    figure svg {
        width: 100%;
        height: auto;

    }
    h1 {
        background-color: #fbfbfb;
        color: #2f2e41;
        box-shadow: inset 16px 5px 4px 0 rgba(0, 0, 0, 0.03)

    }
    body[data-theme="dark"] {
        h1 {
            background-color: #2f2e41;
            color: rgba(250,250,250, 1);
            box-shadow: inset -11px -7px 4px 0 rgba(0, 0, 0, 0.1);
        }
        #titleContainer svg {
            opacity: 0.5;
        }
    }

</style>