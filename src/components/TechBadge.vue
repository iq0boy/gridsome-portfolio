<template>
  <Badge :path="path" :label="label" :scale="scale">
    <template>
      <g-image :src="logo" :alt="title" :title="title" immediate="true" />
    </template>
  </Badge>
</template>

<script>
import Badge from '~/components/Badge'

export default {
  components: {
    Badge,
  },
  props: {
    path: {
      type: String,
    },
    title: {
      type: String,
    },
    label: {
      type: String,
    },
    logo: {
      type: Object,
    },
    scale: {
      type: Number,
    },
  },
}
</script>

<style lang="scss" scoped>
body {
  [data-theme='light'] {
  }

  [data-theme='dark'] {
  }
}

img {
  max-width: 50%;
  max-height: 50%;
}
</style>
