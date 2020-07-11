<template>
    <Layout :hideHeader="true" :disableScroll="true">

        <div class="container sm:pxi-0 mx-auto overflow-x-hidden pt-24 pb-12">

            <div class="lg:mx-32 md:mx-16 sm:mx-8 mx-4 px-4 pt-8">
                <section class="post-header container mx-auto px-0 mb-4 border-b">
                    <h1 class="font-medium leading-none mt-0 mb-8 flex flex-col md:flex-row items-baseline">
                        <span class="text-sm">
                            <g-link class="nav-link uppercase" :to="'/cursus'">
                                cursus
                            </g-link>
                            <ChevronRightIcon class="inline-block" />
                            <g-link  class="nav-link uppercase" :to="'/cursus#jobs'">
                                jobs
                            </g-link>
                            <ChevronRightIcon class="inline-block" />
                        </span>
                        <span>
                            {{ $page.job.title}}
                        </span>
                    </h1>
                    <ul class="flex flex-wrap mb-5">
                        <li class=" uppercase font-medium text-xs text-red-500 mt-3" v-for="(skill, index) in $page.job.skills">
                            <g-link :to="skill.path">
                                <span class="skill-label">{{ skill.title }}</span><span class="ml-2 mr-2" v-if="index+1 < $page.job.skills.length">-</span>
                            </g-link>
                        </li>
                    </ul>
                    <div class="text-2xl pt-4 pb-10 text-gray-700" v-html="$page.job.shortDescription"></div>
                </section>
            </div>

            <div class="lg:mx-32 md:mx-16 sm:mx-8 mx-4 px-4">
                <section class="container mx-auto relative text-gray-700">
                    <div class="content-detail text-xl" v-html="$page.job.content"></div>
                </section>
            </div>

            <div class="lg:mx-32 md:mx-16 sm:mx-8 mx-4 px-4 mt-10">
                <blockquote>
                    <p>Started : {{ $page.job.startedAt}}</p>
                    <p>Ended : {{ $page.job.endedAt}}</p>
                </blockquote>
            </div>

            <div class="lg:mx-32 md:mx-16 sm:mx-8 mx-4 px-4">
                <section class="flex flex-wrap container mx-auto relative">
                    <ul class="list-none m-0 p-0 flex flex-wrap container mx-auto relative">
                        <li v-for="tech in $page.job.techs" :key="tech.id">
                            <TechBadge
                                :title="tech.title"
                                :logo="tech.logo"
                                :path="tech.path"
                                :scale=0.6
                            />
                        </li>
                    </ul>
                </section>
            </div>

            <div class="lg:mx-32 md:mx-16 sm:mx-8 mx-4 px-4 mt-4 mb-2 relative text-xl h-12">
                <div  v-if="$page.next" class="absolute left-0 ml-2">
                    <g-link :to="$page.next.path" class="flex justify-between items-center cursor-pointer nav-arrow">
                        <chevron-left-icon  /> Previous
                    </g-link>
                </div>
                <div v-if="$page.previous"  class="absolute right-0 mr-2">
                    <g-link :to="$page.previous.path" class="flex justify-between items-center cursor-pointer nav-arrow">
                        Next <chevron-right-icon/>
                    </g-link>
                </div>
            </div>

            <div class="lg:mx-32 md:mx-16 sm:mx-8 mx-4 mb-12 relative text-xl h-12">
                <div class="absolute left-0 ml-4">
                    <g-link :to="'/cursus#jobs'" class="cursor-pointer nav-link">
                        <LevelUpIcon class="inline-block mr-2 icon-back"/><span>Jobs</span>
                    </g-link>
                </div>
            </div>

        </div>

    </Layout>
</template>

<page-query>
 query($id: ID!, $previousElement: ID!, $nextElement: ID!) {
    job(id: $id) {
      title
      content
      shortDescription
      startedAt(format:"MMM YYYY")
      endedAt(format:"MMM YYYY")
      employer
      path
      techs {
        title
        path
        logo(width:42, height:42, fit:contain, background:"rgba(0,0,0,0)")

    }
      skills {
        title
        shortName
        path
      }
    }

    previous: job(id: $previousElement) {
       id
       title
       employer
       path
    }

    next: job(id: $nextElement) {
      id
      title
      employer
      path
    }

  }
</page-query>

<script>

import ChevronLeftIcon from '~/assets/icons/chevron-left.svg?inline'
import ChevronRightIcon from '~/assets/icons/chevron-right.svg?inline'
import LevelUpIcon from '~/assets/icons/level-up.svg?inline';
import TechBadge from "~/components/TechBadge";

export default {
    components: {
        ChevronLeftIcon,
        ChevronRightIcon,
        LevelUpIcon,
        TechBadge
    },
    metaInfo() {
        return {
            title: this.$context.title
        };
    }

};
</script>

<style lang="scss" scoped>
    svg{
        width: 2em;
        height: 2em;
        color: #f56565;
    }
    svg.icon-back {
        width: 1.2em;
        height: 1.2em;
    }
</style>