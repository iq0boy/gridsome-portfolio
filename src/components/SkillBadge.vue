<template>
    <Badge
        :path="path"
    >
        <template>
            <div class="flex items-center text-xs sm:text-sm md:text-base justify-center font-bold">
                {{ title }}
            </div>
        </template>
    </Badge>
</template>

<script>
    import Badge from "~/components/Badge";

    export default {
        components: {
            Badge
        },
        props: {
            path: {
                type: String
            },
            title: {
                type: String
            }
        },
    }
</script>

<style scoped>

</style>