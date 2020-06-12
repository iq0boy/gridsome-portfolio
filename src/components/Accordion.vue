<template>
    <div>
        <div class="tab__header">
            <a href="#" class="tab__link p-4 block border-b-2 border-gray-600 flex justify-between" @click.prevent="active = !active">
                <div>
                    <strong>{{title}}</strong>
                </div>

                <div class="flex content-center">
                    <span class="down-Arrow flex items-center" v-show="!active">&#9660;</span>
                    <span class="up-Arrow flex items-center" v-show="active">&#9650;</span>
                </div>
            </a>
        </div>
        <div class="tab__content p-2" v-show="active"><slot /></div>
    </div>
</template>

<script>
    export default {
        name: "Accordion",
        props: [
            'title',
        ],
        data() {
            return {
                active: true
            }
        }
    }
</script>

<style scoped>

</style>