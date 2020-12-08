<template>
  <section
    :class="{
      'mt-24': previousTitle,
    }"
    class="flex flex-col shadow-lg service-card py-4 px-4 lg:px-12 rounded-lg lg:rounded-full relative mx-6"
  >
    <!--Anchor-->
    <div class="anchor" :id="getIdFromTitle(title)"></div>

    <!--Links-->
    <span v-if="previousTitle" class="mx-auto">
      <a :href="'#' + getIdFromTitle(previousTitle)">
        <chevronUpIcon />
      </a>
    </span>
    <!-- header -->
    <div>
      <!--Title and Links -->
      <h2
        :class="{
          'flex-row-reverse': !ltr,
          'lg:pl-32': ltr,
          'lg:pr-32': !ltr,
        }"
        class="flex items-baseline text-2xl md:text-3xl lg:text-4xl justify-start my-0"
      >
        <!--Title-->
        <span>{{ title }}</span>
      </h2>

      <!-- description -->
      <div
        :class="{
          'flex-row-reverse': !ltr,
          'lg:pl-16': ltr,
          'lg:pr-16': !ltr,
        }"
        class="flex items-baseline justify-start my-0 card-description"
      >
        {{ shortDescription }}
      </div>
    </div>

    <!--Cards-->
    <ul class="list-none m-0 p-0 mt-8 mb-2 flex flex-wrap justify-center">
      <slot></slot>
    </ul>

    <div class="flex justify-center pb-2">
      <g-link :to="path" :title="title">
        <Button label="More Info" :classes="['bg-rose']" />
      </g-link>
    </div>

    <span v-if="nextTitle" class="mx-auto">
      <a :href="'#' + getIdFromTitle(nextTitle)">
        <chevronDownIcon />
      </a>
    </span>
  </section>
</template>

<script>
import ChevronUpIcon from '~/assets/icons/chevron-up.svg?inline'
import ChevronDownIcon from '~/assets/icons/chevron-down.svg?inline'
import Button from '~/components/Button'

export default {
  name: 'ServiceCard',
  components: {
    Button,
    ChevronUpIcon,
    ChevronDownIcon,
  },
  props: {
    title: String, // the title of the section
    nextTitle: String, // the title of the next section  (for navigation)
    previousTitle: String || null, // the title of the previous section (for navigation)
    shortDescription: String, // short description
    path: String, // path to skill detail
    ltr: Boolean, // if its left to right or right to left
  },
  methods: {
    camelize(str) {
      // camel case the string
      return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word) {
          return word.toUpperCase()
        })
        .replace(/\s+/g, '')
    },
    getIdFromTitle(title) {
      return this.camelize(title)
    },
  },
}
</script>

<style lang="scss" scoped>
a > svg {
  width: 1.5rem;
  height: 1.5rem;
  color: #f56565;
}

a:hover > svg {
  opacity: 0.3;
}

.anchor {
  display: block;
  position: absolute;
  top: -7em;
  visibility: hidden;
}

body[data-theme='light'] .service-card {
  background-color: #f1f1f1;

  .card-description {
    color: #2f2e41;
  }
}

body[data-theme='dark'] .service-card {
  //background-color: #1a202c;
  background-color: #2f2e41;

  .card-description {
    //color: #7e7d99;
    color: #b4b4c8;
  }
}
</style>
