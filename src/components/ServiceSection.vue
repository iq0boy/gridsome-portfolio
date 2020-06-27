<template>
    <section :class="{
        'my-64': previousSectionId && nextSectionId,
        'mt-24': previousSectionId
    }" class="flex flex-col">

        <div class="relative ml-8 lg:ml-0">

            <!--Anchor-->
            <div :id="sectionId"></div>

            <h2 :class="{
                'flex-row-reverse mr-8 lg:mr-0' : !ltr
            }" class="flex items-baseline justify-start my-0">
                <!--Title-->
                <span>{{title}}</span>
                <!--Links-->
                <span v-if="previousSectionId" :class="{
                    'mr-4': !ltr,
                    'ml-4': ltr
                }">
                    <a :href="previousSectionId">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                    </a>
                </span>
                <span v-if="nextSectionId" :class="{
                    'mr-4': !ltr,
                    'ml-4': ltr
                }">
                    <a :href="nextSectionId">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </a>
                </span>
            </h2>

        </div>

        <!--Cards-->
        <ul class="list-none m-0 p-0 mt-10 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            <slot name="cards"></slot>
        </ul>

    </section>
</template>

<script>
    export default {
        name: "ServiceSection",
        props: {
            title: String, // the title of the section
            sectionId: String, // the id utilised fot the anchor
            previousSectionId: String, // the previous section (for navigation)
            nextSectionId: String, // the next section id (for navigation)
            ltr: Boolean // if its left to right or right to left
        }
    }
</script>

<style lang="scss" scoped>

    /* Anchors */
    #techs, #skills {
        display: block;
        position: relative;
        top: -250px;
        visibility: hidden;
    }

</style>