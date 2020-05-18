<template>

  <nav class="relative bg-black pt-4 pb-8 text-sm text-gray-500">

    <div class="container mx-auto flex justify-between h-12 items-center">

      <div class="w-full md:w-1/2 text-center md:text-left">
        Made with 🖤 <!-- <font-awesome :icon="['fas', 'heart']" class="mr-1 ml-1"></font-awesome> -->by {{ $static.metadata.siteAuthor }} | {{currentYear}}
      </div>

      <div class="w-full justify-end text-center hidden md:flex md:text-left ">

        <span>Powered by</span>

        <ul class="list-none ml-2 flex">
          <li
            :key="element.name"
            v-for="(element,index) in $static.metadata.navigation"
            v-bind:class="{'mr-2' : index != Object.keys($static.metadata.navigation).length - 1}"
          >
            <span class="mr-1" v-if="(0 !== index)">&</span>
            <a class="hover:text-white" :href="element.link" v-if="element.external" target="_blank" rel="noopener noreferrer">{{ element.name }}</a>
            <g-link v-else :to="element.link" >{{element.name}}</g-link>
          </li>
        </ul>

      </div>

    </div>

  </nav>

</template>

<static-query>
query {
  metadata {
    siteAuthor
    navigation : footerNavigation {
      name
      link
      external
    }
  }
}
</static-query>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>