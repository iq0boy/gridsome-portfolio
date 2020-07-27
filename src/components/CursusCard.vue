<template>
  <div
    v-bind:class="{
      'self-end flex-row-reverse': ltr,
      'self-start': !ltr,
    }"
    class="max-w-4xl flex flex-row items-center w-full my-16 lg:my-8"
  >
    <!--  Side Image -->
    <div class="hidden lg:block lg:w-2/5">
      <figure
        v-bind:class="{
          'items-end lg:rounded-lg lg:rounded-r-none': !ltr,
          'items-start lg:rounded-r-lg lg:rounded-l-none': ltr,
        }"
        class="justify-center rounded-none shadow-2xl hidden lg:flex lg:flex-col h-40 bg-white"
      >
        <g-image :src="bigImgSrc"></g-image>
      </figure>
    </div>

    <!-- Card Content -->
    <div
      v-bind:class="{
        'lg:text-left': ltr,
        'lg:text-right': !ltr,
      }"
      class="card-content w-full p-4 lg:w-3/5 rounded-lg shadow-2xl mx-6 lg:mx-0 text-center lg:h-56 relative"
    >
      <!-- Image for small screen (centered)-->
      <figure
        class="block w-32 h-32 shadow-xl mx-auto -mt-16 bg-white lg:hidden rounded-full"
      >
        <div class="h-full flex flex-col justify-center items-center">
          <g-image :src="smallImgSrc"></g-image>
        </div>
      </figure>

      <!-- Title and description -->
      <div>
        <h3 class="text-2xl font-bold">{{ title }}</h3>
        <p class="text-base">{{ content }}</p>
      </div>

      <!-- Link button -->
      <div
        v-bind:class="{
          'lg:right-0': ltr,
          'lg:left-0': !ltr,
        }"
        class="flex justify-center pt-8 mb-4 lg:mb-0 lg:absolute lg:bottom-0 lg:p-4"
      >
        <g-link v-if="!!path" :to="path">
          <Button :label="'More info'" :classes="['bg-rose']" />
        </g-link>
      </div>

      <!-- Date -->
      <div
        v-bind:class="{
          'lg:left-0 lg:ml-4': ltr,
          'lg:right-0 lg:mr-4': !ltr,
        }"
        class="flex justify-center lg:absolute lg:bottom-0 lg:mb-4 mt-4 lg:mt-0 font-bold card-date"
      >
        <span>{{ from }}</span
        ><span class="ml-1" v-if="!!to">- {{ to }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/Button'

export default {
  name: 'CursusCard',
  components: {
    Button,
  },
  props: {
    title: String, //the title of the card,
    content: String, //the content of the card
    from: String, // the starting or the only date
    to: String, // the end date (not required)
    path: String, // the link to access details
    bigImgSrc: Object, // the src of the big image
    smallImgSrc: Object, // the src of the small image
    ltr: Boolean, // specify if the card is going lef to right or not
  },
}
</script>

<style lang="scss" scoped>
.card-date {
  color: #3f3d56;
}

.card-content {
  background-color: #f1f1f1;
  h3,
  p {
    color: #2f2e41;
  }
}

body[data-theme='dark'] {
  .card-content {
    background-color: #2f2e41;
    h3 {
      color: white;
    }
    p {
      color: #7e7d99;
    }
  }
  .card-date {
    color: #d0cde1;
  }
}

img {
  filter: grayscale(0.9) opacity(0.5);
}
li:hover img {
  filter: grayscale(0.8) opacity(1);
}
</style>
