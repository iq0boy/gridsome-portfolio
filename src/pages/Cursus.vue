<template>
    <Layout :hideHeader="true" :disableScroll="true">
        <div class="pt-24 pb-16 relative overflow-x-hidden">

            <div class="container mx-auto pb-16 px-4 sm:px-0">
                <div class="lg:mx-32 md:mx-16 sm:mx-8 mb-4 md:mb-8 lg:mb-40 ">
                    <h1 class="text-6xl font-medium">Cursus</h1>
                </div>
            </div>
            <figure id="waves" class="absolute">
                <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#9A67eA" fill-opacity="0.2" d="M10000,128L26.7,160C53.3,192,107,256,160,245.3C213.3,235,267,149,320,112C373.3,75,427,85,480,96C533.3,107,587,117,640,138.7C693.3,160,747,192,800,170.7C853.3,149,907,75,960,53.3C1013.3,32,1067,64,1120,85.3C1173.3,107,1227,117,1280,101.3C1333.3,85,1387,43,1413,21.3L1440,0L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
                    <path fill="#ffb962" fill-opacity="1" d="M0,32L24,37.3C48,43,96,53,144,74.7C192,96,240,128,288,138.7C336,149,384,139,432,133.3C480,128,528,128,576,154.7C624,181,672,235,720,240C768,245,816,203,864,176C912,149,960,139,1008,154.7C1056,171,1104,213,1152,208C1200,203,1248,149,1296,138.7C1344,128,1392,160,1416,176L1440,192L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
                </svg>
            </figure>


            <!-- Jobs -->
            <section class="lg:ml-16 flex flex-col">

                <div class="relative ml-8 lg:ml-0">
                    <div id="job"></div>
                    <h2 class="flex items-baseline">
                        <span>Jobs</span>
                        <span class="ml-4"><a href="#education"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></a></span>
                    </h2>
                    <figure class="absolute w-1/2 h-auto right-0 section-logo">
                        <JobsLogo></JobsLogo>
                    </figure>
                </div>

                <ul class="list-none m-0 p-0 lg:mt-10 flex flex-col">
                    <li class="max-w-4xl flex items-center flex-wrap my-16"  v-for="job in $page.allJob.edges" :key="job.node.id">

                        <div class="card-content w-full p-4 lg:w-3/5 rounded-lg shadow-2xl mx-6 lg:mx-0 text-center lg:text-left lg:h-56 relative">

                                <figure class="block w-32 h-32 shadow-xl mx-auto -mt-16 bg-white lg:hidden rounded-full">
                                    <div class="h-full flex flex-col justify-center items-center">
                                        <g-image :src="job.node.shortEmployerLogo"></g-image>
                                    </div>
                                </figure>

                                <div>
                                    <h3 class="text-2xl font-bold">{{ job.node.title}}</h3>
                                    <p class="text-base">{{job.node.shortDescription}}</p>
                                </div>

                                <div class="pt-8 flex justify-center absolute bottom-0 left-0 lg:p-4">
                                    {{job.node.startedAt}} - {{job.node.endedAt}}
                                </div>


                                <div class="pt-8 flex justify-center lg:absolute lg:bottom-0 lg:right-0 lg:p-4">
                                    <g-link :to="job.node.path">
                                        <div class="mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-0 py-4 px-8 shadow-lg">
                                            More info
                                        </div>
                                    </g-link>
                                </div>

                        </div>

                        <div class="w-full lg:w-2/5">
                            <figure class="items-start justify-center rounded-none  lg:rounded-r-lg lg:rounded-l-none shadow-2xl hidden lg:flex flex-col h-40 bg-white">
                                <g-image :src="job.node.bigEmployerLogo"></g-image>
                            </figure>
                        </div>

                    </li>
                </ul>

            </section>

            <!-- Education -->
            <section class="lg:mr-16 my-64 flex flex-col">

                <div class="relative mr-8 lg:m-0">
                    <div id="education"></div>
                    <h2 class="flex justify-end items-baseline">
                        <span class="mr-4"><a href="#job"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg></a></span>
                        <span class="mr-4"><a href="#certification"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></a></span>
                        <span>Education</span>
                    </h2>
                    <figure class="absolute w-1/2 h-auto left-0 section-logo">
                        <EducationLogo></EducationLogo>
                    </figure>
                </div>

                <ul class="list-none m-0 p-0 lg:mt-10 flex flex-col">
                    <li class="max-w-4xl flex items-center flex-wrap  my-16 self-end w-full"  v-for="diploma in $page.allDiploma.edges" :key="diploma.node.id">

                        <div class="w-full lg:w-2/5">
                            <figure class="items-end justify-center rounded-none  lg:rounded-l-lg lg:rounded-r-none shadow-2xl hidden lg:flex flex-col h-40 bg-white">
                                <g-image :src="diploma.node.bigProviderLogo"></g-image>
                            </figure>
                        </div>

                        <div class="card-content w-full p-4 lg:w-3/5 rounded-lg shadow-2xl mx-6 lg:mx-0 text-center lg:text-right lg:h-56 relative">


                            <figure class="block w-32 h-32 shadow-xl mx-auto -mt-16 bg-white lg:hidden rounded-full">
                                <div class="h-full flex flex-col justify-center items-center">
                                    <g-image :src="diploma.node.shortProviderLogo"></g-image>
                                </div>
                            </figure>

                            <div>
                                <h3 class="text-2xl font-bold">{{ diploma.node.title}}</h3>
                                <p class="pt-8 text-base">{{diploma.node.shortDescription}}</p>
                            </div>

                            <div class="pt-8 flex justify-center absolute bottom-0 right-0 lg:p-4">
                                {{diploma.node.acquiredAt}}
                            </div>

                        </div>

                    </li>
                </ul>

            </section>

            <!-- Certifications -->
            <section class="lg:ml-16 flex flex-col">

                <div class="relative ml-8 lg:m-0">
                    <div id="certification"></div>
                    <h2 class="flex items-baseline">
                        <span>Certifications</span>
                        <span class="ml-4"><a href="#education"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg></a></span>
                    </h2>
                    <figure class="absolute w-1/2 h-auto right-0 section-logo">
                        <CertificationLogo></CertificationLogo>
                    </figure>
                </div>

                <ul class="list-none m-0 p-0 lg:mt-10 flex flex-col">
                    <li class="max-w-4xl flex items-center flex-wrap my-16"  v-for="certification in $page.allCertification.edges" :key="certification.node.id">

                        <div class="card-content w-full p-4 lg:w-3/5 rounded-lg shadow-2xl mx-6 lg:mx-0 text-center lg:text-left lg:h-56 relative">

                            <figure class="block w-32 h-32 shadow-xl mx-auto -mt-16 bg-white lg:hidden rounded-full">
                                <div class="h-full flex flex-col justify-center items-center">
                                    <g-image :src="certification.node.shortProviderLogo"></g-image>
                                </div>
                            </figure>

                            <div>
                                <h3 class="text-2xl font-bold">{{ certification.node.title}}</h3>
                                <p class="pt-8 text-base">{{certification.node.shortDescription}}</p>
                            </div>

                            <div class="pt-8 flex justify-center absolute bottom-0 left-0 lg:p-4">
                                {{certification.node.acquiredAt}}
                            </div>

                        </div>

                        <div class="w-full lg:w-2/5">
                            <figure class="items-start justify-center rounded-none  lg:rounded-r-lg lg:rounded-l-none shadow-2xl hidden lg:flex flex-col h-40 bg-white">
                                <g-image :src="certification.node.bigProviderLogo"></g-image>
                            </figure>
                        </div>

                    </li>
                </ul>

            </section>


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

import JobsLogo from '~/assets/svg/undraw_updated_resume_u4fy.svg?inline'
import EducationLogo from '~/assets/svg/undraw_exams_g4ow.svg?inline'
import CertificationLogo from '~/assets/svg/undraw_analysis_4jis.svg?inline'

export default {
    components: {
        JobsLogo,
        EducationLogo,
        CertificationLogo
    },
    metaInfo: {
    title: "Cursus"
  }
};
</script>

<style lang="scss" scoped>
    a > svg {
        width: 24px;
        height: 24px;
    }
    svg {
        width: 100%;
        height: auto;
    }

    .section-logo {
        @media (min-width: 768px) {
            top: -10rem;
        }
        z-index: -1;
        top: -5rem;
        opacity: 1;
    }

    .card-content {
        background-color: #e6e6e6;
        h3,p {
            color: #2f2e41;
        }
        a div {
            background-color: #f50057;
        }

    }

    body[data-theme="dark"] {
        .card-content {
            background-color: #2f2e41;
            h3 {
                color: white;
            }
            p {
                color: #7e7d99;
            }
        }
        .section-logo {
            opacity: 1;
        }

    }


    /* Anchors */
    #job, #education, #certification {
        display: block;
        position: relative;
        top: -250px;
        visibility: hidden;
    }

    figure#waves {
        z-index: -2;
        top: 1.5rem;
        transform: rotate(20deg) translate(-200px);
        width: 3000px;
        overflow-y: hidden;
    }

</style>
