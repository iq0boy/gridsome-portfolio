<template>
    <Layout :hideHeader="true" :disableScroll="true">
        <div class="pt-24 pb-16 relative container mx-auto overflow-x-hidden relative">

            <PageTitle :title="'Projects'">
                <ProjectsLogo></ProjectsLogo>
            </PageTitle>

<!--            <figure id="blob" class="absolute">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FF0066" d="M29.9,18.7C16,41.4,-33.8,44.9,-44.8,23.8C-55.7,2.8,-27.9,-42.8,-3,-44.5C21.9,-46.2,43.9,-4.1,29.9,18.7Z" transform="translate(100 100)" />
                </svg>
            </figure>

            <figure id="waves" class="absolute">
                <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#9A67eA" fill-opacity="0.2" d="M10000,128L26.7,160C53.3,192,107,256,160,245.3C213.3,235,267,149,320,112C373.3,75,427,85,480,96C533.3,107,587,117,640,138.7C693.3,160,747,192,800,170.7C853.3,149,907,75,960,53.3C1013.3,32,1067,64,1120,85.3C1173.3,107,1227,117,1280,101.3C1333.3,85,1387,43,1413,21.3L1440,0L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
                    <path fill="#ffb962" fill-opacity="1" d="M0,32L24,37.3C48,43,96,53,144,74.7C192,96,240,128,288,138.7C336,149,384,139,432,133.3C480,128,528,128,576,154.7C624,181,672,235,720,240C768,245,816,203,864,176C912,149,960,139,1008,154.7C1056,171,1104,213,1152,208C1200,203,1248,149,1296,138.7C1344,128,1392,160,1416,176L1440,192L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
                </svg>
            </figure>-->

            <div id="projects-container" class="pt-32 sm:px-0 flex flex-col">
                <ProjectCard v-for="edge in $page.entries.edges" :key="edge.node.id" :project="edge.node" />
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
        title
        content
        shortDescription
        status
        createdAt
        monthYear: createdAt(format:"MMM YYYY")
        path
        techs {
          title
          path
          color
          logo (width: 50, height: 50, quality: 90)
        }
        skills {
          title
          shortName
          path
        }
      }
    }
  }


}

</page-query>

<script>

    import ProjectsLogo from '~/assets/svg/undraw_forming_ideas_0pav.svg?inline'
    import ProjectCard from "../components/ProjectCard";
    import PageTitle from "../components/PageTitle";

    export default {
        metaInfo: {
            title: "Projects"
        },
        components: {
            ProjectCard,
            ProjectsLogo,
            PageTitle
        }
    };

</script>


<style lang="scss" scoped>
    figure#waves {
        z-index: -2;
        top: 0;
        width: 100vw;
        height: 100vh;
        overflow-y: hidden;
    }

    figure#blob {
        z-index: -3;
        top: 40rem;
        left: 5rem;
        transform: scale(5,5);
        width: 10rem;
        overflow-y: hidden;
        opacity: 0.5;
    }

    #projects-container {
        @media (min-width: 1024px) {
            a:nth-child(odd) {
                align-self: flex-start;
            }
            a:nth-child(even) {
                align-self: flex-end;
            }
        }
    }



</style>