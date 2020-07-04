<template>
    
</template>

<script>
    export default {
        name: "Button",
        properties: {
            label: {
                type: String,
                required: true
            },
            classes: {
                type: String,
                required: false
            },
            link: {
                type: String,
                required: false,
            },
        }
    }
</script>

<style scoped>

</style>