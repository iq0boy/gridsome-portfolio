<template>
    <div class="flex flex-post px-0 sm:px-4 pb-8 mb-8" v-bind:class="{'no-border': !border}">
        <!--    <g-link :to="record.path" class="post-card-image-link">
              <g-image :src="record.image" :alt="record.title" class="post-card-image"></g-image>
                lien
            </g-link>-->

        <ul class="flex flex-wrap mb-5">
            <li  class=" uppercase font-medium text-xs text-blue-700 mt-3" v-for="(skill, index) in record.skills">
                <g-link :to="skill.path">
                    <span >{{ skill.shortName }}</span><span class="ml-2 mr-2" v-if="index+1 < record.skills.length">-</span>
                </g-link>
            </li>
        </ul>

        <div class="post-card-content">

            <g-link :to="record.path">

                <h2 class="post-card-title mt-0">
                    {{ record.title }}
                </h2>
                <p class="post-card-excerpt">{{ record.shortDescription }}</p>

       <!--         <div class="lg:mx-32 md:mx-16 px-4 sm:px-0 mt-10">
                    <div class="border-l-4 p-4">
                        <p class="font-bold">Status : {{record.status.charAt(0).toUpperCase() + record.status.slice(1)}}</p>
                        <p>Started : {{ record.monthYear}}</p>
                    </div>
                </div>-->

                <blockquote>
                    <p class="font-bold">Status : {{record.status.charAt(0).toUpperCase() + record.status.slice(1)}}</p>
                    <p>Started : {{ record.monthYear}}</p>
                </blockquote>

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

        <ul class="hidden sm:flex flex-wrap items-center">
            <li class="mt-5" v-for="(tech, index) in record.techs">
                <g-link :to="{ path: tech.path }"><span class="tech-title text-xs bg-transparent hover:text-blue-700 py-2 px-4 mr-2 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full">{{ tech.title }}</span></g-link>
            </li>
        </ul>


    </div>
</template>

<script>
    export default {
        props: {
            record: {},
            border: {
                type: Boolean,
                default: true
            }
        },
    };
</script>

<style>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>