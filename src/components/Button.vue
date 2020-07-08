<template>
    <button class="button font-bold rounded-full py-4 px-8 shadow-xl focus:outline-none transition duration-300 ease-in-out transform hover:underline hover:shadow-lg" :class="classes">
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

    button {
        perspective: 1000px;
        transform-style: preserve-3d;
    }
    button:hover{
        transform: scale(0.95) translateY(0.1em);
        backdrop-filter: brightness(0.9);
    }

</style>