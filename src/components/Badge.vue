<template>
    <div class="mb-4 p-2 cursor-pointer inline-flex flex-row relative hover:z-10 justify-center transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110" :style="css">
        <g-link :to="path">
            <div class="badge flex items-center justify-center border hover:border-red-400 border-gray-600 rounded-full bg-white shadow-lg">
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
                baseDiameter: 100,
                mdRatio: 1.2,
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
                    '--width': (this.baseDiameter * this.scale) + 'px',
                    '--height': (this.baseDiameter * this.scale) + 'px',
                    '--md-width': (this.baseDiameter * this.mdRatio * this.scale) + 'px',
                    '--md-height': (this.baseDiameter * this.mdRatio * this.scale) + 'px',
                    '--lg-width': (this.baseDiameter * this.lgRatio * this.scale) + 'px',
                    '--lg-height': (this.baseDiameter * this.lgRatio * this.scale) + 'px'
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
            width: var(--md-width);
            height: var(--md-height);
        }
        @media (min-width: 768px) {
            width: var(--lg-width);
            height: var(--lg-height);
        }
    }

</style>