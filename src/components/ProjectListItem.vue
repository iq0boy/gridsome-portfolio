<template>
    <div class="flex flex-post px-0 sm:px-4 pb-8 mb-8" v-bind:class="{'no-border': !border}">
        <!--    <g-link :to="record.path" class="post-card-image-link">
              <g-image :src="record.image" :alt="record.title" class="post-card-image"></g-image>
                lien
            </g-link>-->

        <ul class="flex mb-3">
            <li  class="uppercase font-medium text-xs text-blue-700 mt-3" v-for="(category, index) in record.categories">
                <span>{{ category }}</span><span class="ml-2 mr-2" v-if="index+1 < record.categories.length">-</span>
            </li>
        </ul>

        <div class="post-card-content">

            <g-link :to="record.path">

                <h2 class="post-card-title mt-0">
                    {{ record.name[0] }}
                </h2>
                <p class="post-card-excerpt">{{ record.shortDescription }}</p>
                <p class="pt-4">{{ record.monthYear }}</p>
            </g-link>

<!--
            <div class="w-full post-card-meta pt-4">
                <div class="avatars">
                    <div class="flex items-center">
                        <div class="flex justify-between items-center">
                            <ul class="list-none flex author-list">
                                <li v-for="author in record.author" :key="author.id" class="author-list-item">
                                    <g-link :to="author.path" v-tooltip="author.name">
                                        <g-image
                                                :src="author.image"
                                                :alt="author.name"
                                                class="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"
                                        />
                                    </g-link>
                                </li>
                            </ul>
                        </div>
                        <div class="ml-3 pl-3 border-l flex flex-col text-xs leading-none uppercase">
                            <p>
                                <time

                                        :datetime="record.datetime"
                                >{{ record.humanTime }}
                                </time>
                            </p>
                            <p>
                                {{ record.timeToRead }} min
                            </p>
                        </div>
                    </div>

                </div>
            </div>
-->

        </div>

        <ul class="flex mt-3">
            <li  class="uppercase font-medium text-xs text-blue-700 mt-3" v-for="(tool, index) in record.tools">
                <span><g-link :to="{ path: (generateTechPath(tool)) }">{{ tool }}</g-link></span><span class="ml-2 mr-2" v-if="index+1 < record.tools.length">-</span>
            </li>
        </ul>


    </div>
</template>

<static-query>
query {
  allTech{
    edges {
      node {
        id
        path
        name
        description
        logo
        url
        color
      }
    }
  }
}
</static-query>

<script>
    export default {
        props: {
            record: {},
            techs: [],
            border: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            // generateTechPath(tool) {
            //     return '/techs/' + tool
            // },
            generateTechPath(tool) {
                const correspondingTech =  this.$static.allTech.edges.filter( tech => tech.node.name[0] === tool );
                if (correspondingTech.length === 0) return  '/techs/' + tool; // javascript markdown is dead :c
                return this.$static.allTech.edges.filter( tech => tech.node.name[0] === tool )[0].node.path;
            }
        },
        computed: {
        }
    };
</script>

<style>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>