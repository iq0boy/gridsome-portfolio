<template>
    <g-link class="project-card mb-16 lg:w-3/5 rounded lg:rounded-full shadow-lg shadow-xl mx-4" :to="project.path">

        <div class="flex flex-col">

            <h2 class="text-center md:mt-8">
                {{ project.title }}
            </h2>
            <p class="text-center px-4">{{ project.shortDescription }}</p>

            <span class="info-button hover:underline text-white font-bold rounded-full my-8 py-4 px-8 shadow-lg text-center self-center">
                More info
            </span>

        </div>
    </g-link>

</template>

<script>
    export default {
        props: {
            project: {
                title: String,
                shortDescription: String,
                path: String
            },
        },
    };
</script>

<style lang="scss" scoped>
    ul {
        list-style: none;
        padding: 0;
    }

    body[data-theme="light"] .project-card{
        background-color: #e6e6e6;
    }
    body[data-theme="dark"] .project-card{
        background-color: #2f2e41;
    }

    .info-button {
        background-color: #f50057;
    }

</style>