<template>
    <section :class="{
        'my-8': previousSectionId && nextSectionId
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
                        <chevronUpIcon />
                    </a>
                </span>
                <span v-if="nextSectionId" :class="{
                    'mr-4': !ltr,
                    'ml-4': ltr
                }">
                    <a :href="nextSectionId">
                        <chevronDownIcon />
                    </a>
                </span>
            </h2>

        </div>

        <!--Cards-->
        <ul class="list-none m-0 p-0 lg:mt-10 flex flex-col">
            <slot name="cards"></slot>
        </ul>

    </section>
</template>

<script>
    import ChevronUpIcon from '~/assets/icons/chevron-up.svg?inline'
    import ChevronDownIcon from '~/assets/icons/chevron-down.svg?inline'

    export default {
        name: "CursusSection",
        components: {
            ChevronUpIcon,
            ChevronDownIcon
        },
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
    a > svg {
        width: 1.5rem;
        height: 1.5rem;
        color: #f56565;
    }
    a:hover > svg {
        opacity: 0.3;
    }

    /* Anchors */
    #job, #education, #certification {
        display: block;
        position: relative;
        top: -250px;
        visibility: hidden;
    }
</style>