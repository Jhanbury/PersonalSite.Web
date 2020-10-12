<template>
  <v-chip-group>
    <icon-chip :text="blog.views + ' views'" icon="mdi-eye" />
    <icon-chip :text="blog.likes + ' likes'" icon="mdi-heart" />
    <icon-chip :text="blog.comments + ' comments'" icon="mdi-comment" />
  </v-chip-group>
</template>

<script>
import IconChip from '../shared/IconChip.vue'
export default {
  components: {
    IconChip
  },
  props: {
    blog: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
</style>
