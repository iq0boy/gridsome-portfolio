<template>
    <button class="font-bold rounded-full py-4 px-8 shadow-lg hover:underline focus:outline-none" :class="classes">
        {{label}}
    </button>
</template>

<script>
    export default {
        name: "Button",
        props: {
            label: {
                type: String,
                required: true
            },
            classes: {
                required: false
            }
        }
    }
</script>

<style lang="scss" scoped>

    .bg-gradient, .bg-rose {
        color: white;
    }
    .bg-rose {
        background-color: #f50057;
    }
    body[data-theme="dark"] {
        .bg-gradient {
            background: linear-gradient(90deg,#1a202c 60%, #c53030 250%);
        }
    }

    body[data-theme="light"] {
         .bg-gradient {
            background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
        }
    }

</style>