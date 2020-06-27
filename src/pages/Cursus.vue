<template>
    <Layout :hideHeader="true" :disableScroll="true">
        <div id="cursus-content" class="pt-24 pb-16 container mx-auto relative overflow-x-hidden">

            <PageTitle :title="'Cursus'">
                <CursusLogo></CursusLogo>
            </PageTitle>

<!--
            <figure id="blob" class="absolute">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FF0066" d="M29.9,18.7C16,41.4,-33.8,44.9,-44.8,23.8C-55.7,2.8,-27.9,-42.8,-3,-44.5C21.9,-46.2,43.9,-4.1,29.9,18.7Z" transform="translate(100 100)" />
                </svg>
            </figure>

            <figure id="waves" class="absolute">
                <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#9A67eA" fill-opacity="0.2" d="M10000,128L26.7,160C53.3,192,107,256,160,245.3C213.3,235,267,149,320,112C373.3,75,427,85,480,96C533.3,107,587,117,640,138.7C693.3,160,747,192,800,170.7C853.3,149,907,75,960,53.3C1013.3,32,1067,64,1120,85.3C1173.3,107,1227,117,1280,101.3C1333.3,85,1387,43,1413,21.3L1440,0L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
                    <path fill="#ffb962" fill-opacity="1" d="M0,32L24,37.3C48,43,96,53,144,74.7C192,96,240,128,288,138.7C336,149,384,139,432,133.3C480,128,528,128,576,154.7C624,181,672,235,720,240C768,245,816,203,864,176C912,149,960,139,1008,154.7C1056,171,1104,213,1152,208C1200,203,1248,149,1296,138.7C1344,128,1392,160,1416,176L1440,192L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
                </svg>
            </figure>
-->

            <!--Jobs-->
            <CursusSection
                :title="'Jobs'"
                :section-id="'jobs'"
                :next-section-id="'#education'"
                :ltr="true"
            >
                <template v-slot:logo>
                </template>
                <template v-slot:cards>
                    <li class="flex items-center justify-start" v-for="job in $page.allJob.edges" :key="job.node.id" >
                        <CursusCard
                            :title=job.node.title
                            :content=job.node.shortDescription
                            :from=job.node.startedAt
                            :to=job.node.endedAt
                            :path=job.node.path
                            :bigImgSrc=job.node.bigEmployerLogo
                            :smallImgSrc=job.node.shortEmployerLogo
                            :ltr="true"
                        ></CursusCard>
                    </li>
                </template>
            </CursusSection>

            <!--Education-->
            <CursusSection
                    :title="'Education'"
                    :section-id="'education'"
                    :previous-section-id="'#jobs'"
                    :next-section-id="'#certification'"
                    :ltr="false"
            >
                <template v-slot:logo>
                </template>
                <template v-slot:cards>
                    <li class="flex items-center justify-end"  v-for="diploma in $page.allDiploma.edges" :key="diploma.node.id">
                        <CursusCard
                                :title=diploma.node.title
                                :content=diploma.node.shortDescription
                                :from=diploma.node.acquiredAt
                                :bigImgSrc=diploma.node.bigProviderLogo
                                :smallImgSrc=diploma.node.shortProviderLogo
                                :ltr=false
                        ></CursusCard>
                    </li>
                </template>
            </CursusSection>

            <!--Certifications-->
            <CursusSection
                    :title="'Certifications'"
                    :section-id="'certification'"
                    :previous-section-id="'#education'"
                    :ltr="true"
            >
                <template v-slot:logo>
                </template>
                <template v-slot:cards>
                    <li class="flex items-center justify-start"  v-for="certification in $page.allCertification.edges" :key="certification.node.id">
                        <CursusCard
                                :title=certification.node.title
                                :content=certification.node.shortDescription
                                :from=certification.node.acquiredAt
                                :bigImgSrc=certification.node.bigProviderLogo
                                :smallImgSrc=certification.node.shortProviderLogo
                                :ltr=true
                        ></CursusCard>
                    </li>
                </template>
            </CursusSection>



        </div>
    </Layout>
</template>

<page-query>
query {
  allJob(sortBy:"endedAt", order: DESC) {
    edges {
      node {
        id
        title
        shortDescription
        employer
        startedAt(format:"MMM YY")
        endedAt(format:"MMM YY")
        bigEmployerLogo : employerLogo(width: 250, fit:inside, background:"rgba(0,0,0,0)")
        shortEmployerLogo: employerLogo(width: 100, fit:inside, background:"rgba(0,0,0,0)")
        path
      }
    }
  }
  allDiploma(sortBy:"acquiredAt", order:DESC) {
    edges {
      node {
        title
        provider
        shortDescription
        bigProviderLogo : providerLogo(width: 250, fit:inside, background:"rgba(0,0,0,0)")
        shortProviderLogo: providerLogo(width: 100, fit:inside, background:"rgba(0,0,0,0)")
        acquiredAt(format:"MMM YY")
      }
    }
  },
  allCertification(sortBy:"acquiredAt", order:DESC) {
    edges {
      node {
        title
        provider
        shortDescription
        bigProviderLogo : providerLogo(width: 250, fit:inside, background:"rgba(0,0,0,0)")
        shortProviderLogo: providerLogo(width: 100, fit:inside, background:"rgba(0,0,0,0)")
        acquiredAt(format:"MMM YY")
      }
    }
  }
}
</page-query>

<script>

import PageTitle from "~/components/PageTitle";
import CursusLogo from '~/assets/svg/undraw_certificate_343v.svg?inline'
import CursusSection from "../components/CursusSection";
import CursusCard from "~/components/CursusCard";


export default {
    components: {
        CursusCard,
        PageTitle,
        CursusLogo,
        CursusSection
    },
    metaInfo: {
    title: "Cursus"
  }
};
</script>

<style lang="scss" scoped>

    figure#waves {
        z-index: -2;
        top: 15rem;
        transform: rotate(-20deg) translate(-10rem, 10rem) scale(10);
        width: 30rem;
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
</style>
