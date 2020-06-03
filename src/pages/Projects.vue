<template>
    <Layout :hideHeader="true" :disableScroll="true">
        <div class="container mx-auto pt-24 pb-16 px-4 sm:px-0">
            <div class="lg:mx-32 md:mx-16 sm:mx-8">
                <h1 class="pb-8 text-6xl font-medium">Projects</h1>
                <ProjectListItem v-for="edge in $page.entries.edges" :key="edge.node.id" :record="edge.node" />
            </div>
        </div>
    </layout>
</template>

<page-query>

query($page:Int) {

  entries: allProject(sortBy: "createdAt", order: DESC, perPage: 9, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
       id
        name
        description
        shortDescription
        status
        createdAt
        monthYear: createdAt(format:"MMM YYYY")
        tools
        path
        categories
      }
    }
  }


}

</page-query>

<script>

    import ProjectListItem from "../components/ProjectListItem";

    export default {
        metaInfo: {
            title: "Projects"
        },
        components: {
            ProjectListItem
        }
    };

</script>