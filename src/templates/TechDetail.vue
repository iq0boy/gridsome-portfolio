<template>
  <Layout :hideHeader="true" :disableScroll="true">

    <div class="container sm:pxi-0 mx-auto overflow-x-hidden pt-24">

     <!-- <div class="mx-4 sm:mx-0">
        <h1 class="pb-0 mb-0 text-5xl font-medium">{{ $page.tag.title }}</h1>
        <p class="text-gray-700 text-xl">
          A collection of
          <span
            class="self-center"
          >{{ $page.tag.belongsTo.totalCount }} {{ postLabel }}</span>
        </p>
      </div>

      <div class="pt-8 border-b"></div>

      <div class="flex flex-wrap pt-8 pb-8 mx-4 sm:-mx-4">
        <PostListItem
          v-for="edge in $page.tag.belongsTo.edges"
          :key="edge.node.id"
          :record="edge.node"
        />
      </div>

      <div class="pagination flex justify-center mb-8">
        <Pagination
          :baseUrl="$page.tag.path"
          :currentPage="$page.tag.belongsTo.pageInfo.currentPage"
          :totalPages="$page.tag.belongsTo.pageInfo.totalPages"
          :maxVisibleButtons="5"
          v-if="$page.tag.belongsTo.pageInfo.totalPages > 1"
        />
      </div>-->
      <p>{{ $page.tech }}</p>
      <p>{{ $page }}</p>

    </div>

  </Layout>
</template>

<page-query>

  query ProjectsByTechName ($techName: String!)
  {
      allProject (filter: {tools: { contains: [$techName] } } ) {
        edges {
          node {
            description
            shortDescription
            status
            createdAt
            tools
            categories
          }
        }
      }
  }
</page-query>

<script>
import ProjectListItem from "~/components/ProjectListItem.vue";
import Pagination from "~/components/Pagination.vue";

export default {
  components: {
    Pagination,
    ProjectListItem
  },
  computed: {
    // postLabel: function() {
    //   var pluralize = require("pluralize");
    //   return pluralize("post", this.$page.tag.belongsTo.totalCount);
    // }
  },
  metaInfo() {
    return {
      // title: this.$page.tech.name
      title: 'test'
    };
  }
};
</script>
