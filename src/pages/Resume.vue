<template>
    <Layout :hideHeader="true" :disableScroll="true">
        <div id="cv-container" class="pt-24 pb-16 container mx-auto">

            <div id="cv-actions" class="mx-auto mb-8 flex justify-center">
                <span class="btn cursor-pointer hover:underline text-white font-bold rounded-full my-0 mx-4 py-4 px-8 shadow-lg flex w-32 justify-center content-center" @click="print">
                    Print
                </span>
                <span class="btn cursor-pointer hover:underline text-white font-bold rounded-full my-0 mx-4 py-4 px-8 shadow-lg flex w-32 justify-center content-center">
                    Get Pdf
                </span>
            </div>

            <div id="cv" class="mx-auto border p-4 flex flex-col shadow-2xl">

                <header class="">
                    <div class="flex justify-between bg-gray-700 text-white p-2">
                        <div>
                            <h1 class="m-0 text-2xl text-red-400">Joseph <span class="uppercase">Pire</span></h1>
                            <p class="text-sm uppercase">junior IT developer</p>
                        </div>
                        <div>
                            <p><span class="opacity-50"><PhoneIcon /></span>+32 (0) 473 57 34 07</p>
                            <p><span class="opacity-50"><MailIcon /></span>josephpire.dev@gmail.com</p>
                            <p><span class="opacity-50"><globeIcon /></span>Louvain-la-Neuve, Belgique</p>
                        </div>
                    </div>
                    <div class="profile bg-gray-800 text-white p-2">
                        <h2 class="m-0 flex justify-center items-center text-base text-red-400 mb-2">
                            <VCardIcon></VCardIcon><span class="capitalize">Profile</span>
                        </h2>
                        <p class="text-center">
                            Freshly graduated, autonomous curious and hard worker. Professional experience as full stack developer. If i like to work with a team, i can go well by myself. Always looking for new challenges, I hope i can find a job where i can be useful, applying what i learned to help others, build bridge across peoples, and share with my siblings.
                        </p>
                    </div>

                </header>

                <div class="flex flex-grow mt-2 ">

                    <aside class="w-1/4 flex flex-col h-full p-4 bg-gray-700 text-white">

                        <section class="mb-2 row-1">
                            <h2 class="m-0 flex justify-start items-center text-base text-red-400 mb-2">
                                <GraduationIcon />Education
                            </h2>
                            <ul>
                                <li v-for="diploma in $page.allDiploma.edges" :key="diploma.node.id" class="mb-2 leading-tight">
                                    <p><span class="text-red-400 font-bold">{{diploma.node.acquiredAt}}</span> {{diploma.node.shortDescription}} in {{ diploma.node.title}}</p>
                                    <p class="opacity-50 mt-1">{{ diploma.node.provider}}</p>
                                </li>
                            </ul>
                        </section>

                        <section class="mb-2 row-2">
                            <h2 class="m-0 flex justify-start items-center text-base text-red-400 mb-2">
                                <PriceIcon />Formation
                            </h2>
                            <ul>
                                <li v-for="certification in $page.allCertification.edges" :key="certification.node.id" class="mb-2 leading-tight">
                                    <p><span class="text-red-400 font-bold">{{certification.node.acquiredAt}}</span> {{certification.node.shortDescription}}</p>
                                    <p class="opacity-50 mt-1">{{ certification.node.provider}}</p>
                                </li>
                            </ul>
                        </section>

                        <section class="row-3">
                            <h2 class="m-0 flex justify-start items-center text-base text-red-400 mb-2">
                                <LanguageIcon />Languages
                            </h2>
                            <ul>
                                <li v-for="language in $page.allLanguage.edges" :key="language.node.id" class="mb-2 leading-tight">
                                    <p><span class="font-bold">{{language.node.title}}</span> {{language.node.level}}</p>
                                </li>
                            </ul>
                            <h2 class="m-0 flex justify-start items-center text-base text-red-400 mb-2">
                                <HeartIcon />Interests
                            </h2>
                            <p>
                                <span v-for="interest in $page.allInterest.edges" :key="interest.node.id" class="interest-tag inline-flex rounded rounded-full bg-gray-800">
                                    {{interest.node.title}}
                                </span>
                            </p>
                        </section>
                    </aside>

                    <div class="w-3/4 p-4">

                        <section class="mb-2 row-1">
                            <h2 class="m-0 flex justify-start items-center text-base text-red-400 mb-2">
                                <BriefCaseIcon />Working Experience
                            </h2>
                            <ul>
                                <li v-for="job in $page.allJob.edges" :key="job.node.id" class="mb-2 leading-tight">
                                    <p class="font-bold"><span class="text-red-400 mr-2 inline-block">{{job.node.startedAt}} - {{job.node.endedAt}}</span>{{ job.node.title}}</p>
                                    <p class="mt-1">{{ job.node.shortDescription}}</p>
                                    <p class="opacity-50 mt-1">{{job.node.employer}}</p>
                                </li>
                            </ul>
                        </section>

                        <section class="mb-2 row-2">
                            <h2 class="m-0 flex justify-start items-center text-base text-red-400 mb-2">
                                <BoxIcon />Projects
                            </h2>
                            <ul>
                                <li v-for="project in $page.allProject.edges" :key="project.node.id" class="mb-2 leading-tight">
                                    <p class="font-bold"><span class="text-red-400 mr-2 inline-block">{{project.node.createdAt}}</span>{{ project.node.title}}</p>
                                    <p class="mt-1">{{ project.node.shortDescription}}</p>
                                </li>
                            </ul>
                        </section>

                        <section clas="row-3">
                            <h2 class="m-0 flex justify-start items-center text-base text-red-400 mb-2">
                                <ToolsIcon />Skills
                            </h2>
                            <ul>
                                <li v-for="skill in $page.allSkill.edges" :key="skill.node.id" class="mb-2 leading-tight">
                                    <p><span class="font-bold">{{ skill.node.title}}</span> - {{ skill.node.shortDescription}}</p>
                                </li>
                            </ul>
                        </section>

                    </div>
                </div>

            </div>

        </div>
    </Layout>
</template>

<page-query>
query {
  allDiploma(sortBy:"acquiredAt", order: DESC) {
    edges {
      node {
        id
        title
        shortDescription
        provider
        acquiredAt(format:"YYYY")
      }
    }
  }
  allCertification {
    edges {
      node {
        id
        title
        shortDescription
        provider
        acquiredAt(format:"YYYY")
    }
    }
  }
  allLanguage {
    edges {
      node {
        id
        title
        level
      }
    }
  }
  allInterest {
    edges {
      node {
        id
        title
      }
    }
  }
  allProject(sortBy: "createdAt", order: DESC) {
    edges {
      node {
        id
        title
        createdAt(format:"MMM YY")
        shortDescription
        techs {
            title
        }
      }
    }
  }
  allJob(sortBy:"endedAt", order: DESC) {
    edges {
      node {
        id
        title
        shortDescription
        employer
        startedAt(format:"MMM YY")
        endedAt(format:"MMM YY")
      }
    }
  }
  allSkill(filter: {onResume: {eq: true}}) {
    edges {
      node {
        id
        title
        shortDescription
        techs {
          title
        }
      }
    }
  }
}
</page-query>

<script>
    import BoxIcon from '~/assets/icons/box.svg?inline'
    import BriefCaseIcon from '~/assets/icons/briefcase.svg?inline'
    import GlobeIcon from '~/assets/icons/globe.svg?inline'
    import GraduationIcon from '~/assets/icons/graduation-cap.svg?inline'
    import HeartIcon from '~/assets/icons/heart.svg?inline'
    import LanguageIcon from '~/assets/icons/language.svg?inline'
    import MailIcon from '~/assets/icons/mail.svg?inline'
    import PhoneIcon from '~/assets/icons/phone.svg?inline'
    import PriceIcon from '~/assets/icons/price-ribbon.svg?inline'
    import ToolsIcon from '~/assets/icons/tools.svg?inline'
    import VCardIcon from '~/assets/icons/v-card.svg?inline'

    export default {
        name: "Resume",
        components: {
            BoxIcon,
            BriefCaseIcon,
            GlobeIcon,
            GraduationIcon,
            HeartIcon,
            LanguageIcon,
            MailIcon,
            PhoneIcon,
            PriceIcon,
            ToolsIcon,
            VCardIcon
        },
        methods: {
            print: function() {
                window.print();return false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    #cv-container {
        @media print {
            padding: 0;
        }
    }
    #cv-actions {
        @media print {
            display: none;
        }
    }

    body[data-theme="dark"] {
        #cv {
            @apply bg-gray-900;
        }
    }

    #cv {
        font-size: 0.65rem;
        width: 210mm;
        height: 297mm;
        @media print {
            width: 100vw;
            height: 100vh;
        }
    }

    .btn {
        background-color: #f50057;
    }

    svg {
        stroke: currentColor;
        fill: none;
        margin-right: 0.2rem;
        display: inline-flex;
        width: 0.8rem;
        height: 0.8rem;
    }
    header svg {
        width: 0.5rem;
        height: 0.5rem;
    }
    .profile svg {
        width: 1rem;
        height: 1rem;
    }

    .row-1 {
        height: 25%;
    }
    .row-2 {
        height: 40%;
    }
    .row-3 {
        height: 30%;
    }
    .interest-tag {
        font-size: 0.6rem;
        padding: 0.2rem 0.5rem;
        margin: 0.2em;
    }
/*    div section, aside section {
        height: 32%;
    }*/
</style>