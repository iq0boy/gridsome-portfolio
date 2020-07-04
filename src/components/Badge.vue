<template>
    <div class="mb-4 p-2 cursor-pointer inline-flex flex-row justify-center" :style="css">
        <g-link :to="path">
            <div class="badge flex items-center justify-center border hover:border-red-400 border-gray-600 rounded-full hover:bg-black bg-white shadow-lg">
                <slot></slot>
            </div>
            <p v-if="label" class="text-center text-xs sm:text-sm md:text-base">
                {{ label }}
            </p>
        </g-link>
    </div>
</template>

<script>
    export default {
        name: "Badge",
        data: function(){
            return {
                baseWidth: 100,
                baseHeight: 100,
                lgRatio: 1.5
            }
        },
        props: {
            path: {
                type: String
            },
            label : {
                type: String,
            },
            scale : {
                type: Number,
                default: 1
            }
        },
        computed: {
            css() {
                return {
                    '--width': (this.baseWidth * this.scale) + 'px',
                    '--height': (this.baseHeight * this.scale) + 'px',
                    '--lg-width': (this.baseWidth * this.lgRatio * this.scale) + 'px',
                    '--lg-height': (this.baseHeight * this.lgRatio * this.scale) + 'px'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

    .badge {
        width: var(--width);
        height: var(--height);
        @media (min-width: 640px) {
            width: var(--lg-width);
            height: var(--lg-height);
        }
    }


    body[data-theme="dark"] {
        .badge {
            color: black;
        }
        .badge:hover {
            color: white;
        }
    }

</style>