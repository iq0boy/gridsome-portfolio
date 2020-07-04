<template>
    <div class="project-card mb-16 lg:w-3/5 rounded-lg lg:rounded-full shadow-lg shadow-xl mx-6" >

        <div class="flex flex-col">

            <h2 class="text-center md:mt-8">
                {{ project.title }}
            </h2>
            <p class="card-description text-center px-4">{{ project.shortDescription }}</p>

            <div class="flex justify-center">
                <g-link :to="project.path">
                    <Button
                        :label="'More info'"
                        :classes="['bg-rose', 'my-8']"
                    />
                </g-link>
            </div>

        </div>
    </div>

</template>

<script>
    import Button from "~/components/Button";

    export default {
        components: {
            Button
        },
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

    body[data-theme="light"] .project-card{
        background-color: #e6e6e6;
        .card-description{
            color: #2f2e41;
        }
    }
    body[data-theme="dark"] .project-card{
        background-color: #2f2e41;
        .card-description{
            color: #7e7d99;
        }
    }



</style>