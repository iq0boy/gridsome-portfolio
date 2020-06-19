<template>
  <Layout :hideHeader="true" :disableScroll="true">

    <div class="container sm:pxi-0 mx-auto overflow-x-hidden pt-24 pb-24">

      <!-- Header -->
      <div class="lg:mx-32 md:mx-16 sm:mx-8 mx-4 pt-8 px-0 mb-4 border-b pb-8">

        <div class="flex justify-between items-center">
          <h1 class="pb-0 my-0 text-5xl font-medium" v-bind:style="{ color: $page.tech.color}" >{{ $page.tech.title }}</h1>
          <g-image class="tech-logo"  :src="$page.tech.logo" :alt="$page.tech.title" :title="$page.tech.title"/>
        </div>

        <div class="text-2xl pt-4 pb-10 text-gray-700 font-serif" v-html="$page.tech.shortDescription"></div>

        <a v-if="$page.tech.url" :href="$page.tech.url">Visit Official website</a>

      </div>

      <!-- Content -->
      <div class="lg:mx-32 md:mx-16 px-4 sm:px-0 mt-6">
        <section class="post-content container mx-auto relative font-serif text-gray-700">
          <div class="post-content-text text-xl" v-html="$page.tech.content"></div>
        </section>
      </div>

      <!-- Footer -->
      <div class="lg:mx-32 md:mx-16 px-4 sm:px-0 mt-10">

          <blockquote  v-if="$page.tech.relatedJobs.edges.length">
            <h6>Related jobs</h6>
            <ul>
              <li v-for="job in $page.tech.relatedJobs.edges" :key="job.node.id">
                <g-link :to="job.node.path">{{ job.node.title}}</g-link>
              </li>
            </ul>
          </blockquote>

          <blockquote v-if="$page.tech.relatedProjects.edges.length">
            <h6>Related projects</h6>
            <ul>
              <li v-for="project in $page.tech.relatedProjects.edges" :key="project.node.id">
                <g-link :to="project.node.path">{{ project.node.title}}</g-link>
              </li>
            </ul>
          </blockquote>

      </div>

    </div>

  </Layout>
</template>

<page-query>
query ($id: ID!) {
  tech (id: $id){
    id
    title
    shortDescription
    content
    url
    path
    color
    logo(width:64, height:64, fit:contain, background:"rgba(0,0,0,0)")
    relatedJobs: belongsTo(filter:{ typeName: {eq: Job}}){
      totalCount
      edges {
        node {
          ... on Job {
            id
            path
            title
          }
        }
      }
    },
     relatedProjects: belongsTo(filter:{ typeName: {eq: Project}}){
      totalCount
      edges {
        node {
          ... on Project {
            id
            path
            title
          }
        }
      }
    },
  }
}
</page-query>

<script>
import ProjectListItem from "~/components/ProjectListItem.vue";

export default {
  components: {
    ProjectListItem
  },
  computed: {
    projectLabel: function() {
      const pluralize = require("pluralize");
      return pluralize("project", this.$page.tech.relatedProjects.totalCount);
    },
    jobLabel: function() {
      const pluralize = require("pluralize");
      return pluralize("job", this.$page.tech.relatedJobs.totalCount);
    }
  },
  metaInfo() {
    return {
      title: this.$context.title
    };
  }
};
</script>

<style>
 .tech-logo{
   width: 75px;
 }

</style>
