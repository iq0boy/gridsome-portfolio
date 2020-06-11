<template>
    <Layout :hideHeader="true" :disableScroll="true">
        <div class="container mx-auto pt-24 pb-16 px-4 sm:px-0">
            <div class="lg:mx-32 md:mx-16 sm:mx-8">

                <header class="mb-10">
                    <h1 class="pb-8 text-6xl font-medium">Services</h1>
                </header>

                <Accordion title="Techs">
                    <div class="flex flex-col justify-center">
                        <ul class="list-none m-0 p-0 mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
                            <li class="mb-4 p-2 cursor-pointer inline-flex flex-row justify-center " v-for="tech in $page.allTech.edges" :key="tech.node.id">
                                <g-link
                                        :to="tech.node.path"
                                >
                                    <div class="flex items-center py-4 px-4 mr-2 mt-2 border hover:border-blue-500 border-gray-600 rounded-full hover:bg-black bg-white">
                                        <g-image :src="tech.node.logo" :alt="tech.node.title" :title="tech.node.title"/>
                                    </div>
                                    <p class="text-center">
                                        {{tech.node.title}}
                                    </p>
                                </g-link>
                            </li>
                        </ul>
                    </div>
                </Accordion>

                <Accordion title="Skills">
                    <ul class="list-none m-0 p-0 mt-10">
                        <li class="mb-4 flex-post ml-12 p-2" v-for="skill in $page.allSkill.edges" :key="skill.node.id">
                            <g-link :to="skill.node.path">
                                <blockquote>
                                    <h6 class="mb-0">{{ skill.node.title}}</h6>
                                </blockquote>
                            </g-link>
                        </li>
                    </ul>
                </Accordion>

            </div>
        </div>
    </Layout>
</template>

<page-query>
query {
  allTech {
    totalCount
    edges {
      node {
        id
        title
        path
        logo(width:64, height:64, fit:contain, background:"rgba(0,0,0,0)", quality:10)
      }
    }
  }
  allSkill {
    totalCount
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</page-query>

<script>

import Accordion from "../components/Accordion";

export default {
    components: {
        Accordion
    },
    metaInfo: {
    title: "Services"
  }
};
</script>
