<template>
  <Badge :path="path" :label="label" :scale="scale">
    <template>
      <g-image
        :src="logo"
        :alt="title"
        :title="title"
        :immediate="true"
        :class="{ grayscale: grayScale }"
      />
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
    grayScale: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.grayscale {
  filter: grayscale(1);
}
.badge:hover {
  .grayscale {
    filter: grayscale(0);
  }
}
img {
  max-width: 50%;
  max-height: 50%;
}
</style>
