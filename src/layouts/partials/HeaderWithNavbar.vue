<template>
  <header class="bg-black relative z-1000" id="header">
    <!-- NavBar -->
    <nav class="px-4 sm:px-12 h-20 sm:h-16 mx-auto py-4">
      <div
        class="flex flex-col sm:flex-row flex-grow space-between items-center w-auto"
      >
        <div class="hidden md:flex items-center flex-shrink-0 text-white mr-6">
          <faviconLogo width="25" height="25" />
        </div>

        <div class="text-sm flex-grow uppercase pb-2 sm:py-0">
          <ul
            class="list-none m-0 flex justify-center sm:justify-start text-gray-300 uppercase"
          >
            <li class="mr-4">
              <g-link
                :to="'/'"
                class="animated-link"
                :active-class="'home-active'"
                >Home</g-link
              >
            </li>
            <li
              :key="element.name"
              v-for="(element, index) in $static.metadata.navigation"
              v-bind:class="{
                'mr-4':
                  index !== Object.keys($static.metadata.navigation).length - 1,
              }"
            >
              <a
                :href="element.link"
                v-if="element.external"
                target="_blank"
                rel="noopener noreferrer"
                class="animated-link"
                >{{ element.name }}</a
              >
              <g-link v-else :to="element.link" class="animated-link">{{
                element.name
              }}</g-link>
            </li>
          </ul>
        </div>

        <!--icons navigations-->
        <div>
          <ul class="list-none m-0 flex justify-center md:justify-end">
            <!--theme switcher-->
            <li class="mr-3">
              <theme-switcher v-on="$listeners" :theme="theme" />
            </li>

            <!--github-->
            <li class="mr-6">
              <span class="text-sm">
                <a :href="githubLink" target="_blank" rel="noopener noreferrer">
                  <githubLogo></githubLogo>
                </a>
              </span>
            </li>

            <!--linkedin-->
            <li class="mr-6">
              <span class="text-sm">
                <a
                  :href="linkedInLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <linked-in-logo></linked-in-logo>
                </a>
              </span>
            </li>

            <!--contact-->
            <li>
              <g-link to="/contact">
                <mailLogo></mailLogo>
              </g-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="pt-8 md:pt-16 lg:pt-32 lg:pb-56 text-center">
      <div
        class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center text-white"
      >
        <!--Left Col-->
        <div
          class="flex flex-col w-full md:w-2/5 justify-center items-center md:items-start text-center md:text-left"
        >
          <p class="tracking-loose w-full">
            {{ $static.metadata.header.siteAuthorDescription }}
          </p>
          <h1 class="my-4 text-5xl font-bold leading-tight">
            I am {{ $static.metadata.header.siteAuthor }}
          </h1>
          <p class="leading-normal text-2xl mb-8">
            {{ $static.metadata.header.siteDescription }}
          </p>
          <g-link :to="'/resume'" :title="'take a look at my resume!'">
            <Button
              :label="'Get my Resume'"
              :classes="['bg-white', 'text-gray-800', 'my-6']"
            />
          </g-link>
        </div>
        <!--Right Col-->
        <div class="w-full md:w-3/5 md:py-6 text-center">
          <figure class="w-full">
            <HeroLogo id="hero-svg" />
          </figure>
        </div>
      </div>
    </div>
  </header>
</template>

<static-query>
query {
  metadata {
    navigation : headerNavigation {
      name
      link
      external
    }
    social {
      link
      title
    }
    header {
      siteAuthor
      siteAuthorDescription
      siteDescription
    }
  }
}
</static-query>

<script>
import ThemeSwitcher from '~/components/ThemeSwitcher'
import Button from '~/components/Button'
import githubLogo from '~/assets/icons/github.svg?inline'
import linkedInLogo from '~/assets/icons/linkedin.svg?inline'
import mailLogo from '~/assets/icons/mail.svg?inline'
import HeroLogo from '~/assets/svg/undraw_source_code_xx2e.svg?inline'
import faviconLogo from '~/faviconBW.svg'

export default {
  props: {
    theme: {
      type: String,
    },
  },
  computed: {
    githubLink: function () {
      return this.$static.metadata.social
        .filter((e) => e.title === 'github')
        .pop().link
    },
    linkedInLink: function () {
      return this.$static.metadata.social
        .filter((e) => e.title === 'linkedin')
        .pop().link
    },
  },
  components: {
    ThemeSwitcher,
    githubLogo,
    linkedInLogo,
    mailLogo,
    HeroLogo,
    faviconLogo,
    Button,
  },
}
</script>

<style lang="scss" scoped>
#hero-svg {
  width: 100%;
  height: auto;
}

body[data-theme='dark'] #header {
  background: linear-gradient(90deg, #1a202c 60%, #c53030 250%);
}

body[data-theme='light'] #header {
  background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
}

body[data-theme='light'] {
  header {
    color: white;
    .logo {
      filter: invert(100%);
    }
    a:hover {
      color: black;
      svg {
        fill: black;
      }
    }
    a svg {
      fill: white;
      width: 16px;
      height: 16px;
    }
  }
}

body[data-theme='dark'] {
  header {
    background-color: black;
    color: white;
    a:hover {
      color: #555555;
      svg {
        fill: #555555;
      }
    }
    a svg {
      fill: white;
      width: 16px;
      height: 16px;
    }
  }
}
</style>
