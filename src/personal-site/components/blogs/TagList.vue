<template>
  <v-chip-group>
    <v-chip
      v-for="tag in tags"
      v-bind:key="tag.id"
      class="pa-1"
      color="#343a40"
      label
    >
      #{{ tag }}
    </v-chip>
  </v-chip-group>
</template>

<script>
export default {
  props: {
    tags: {
      required: true,
      type: Array
    }
  }
}
</script>

<style>
</style>
