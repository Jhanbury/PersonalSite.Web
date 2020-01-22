<template>
  <v-chip :color="backgroundColor">
    <v-icon left :color="color">mdi-map-marker</v-icon>
    {{location }}
  </v-chip>
</template>

<script>
export default {
  props: {
    color: String,
    backgroundColor: String,
    location: String
  }
}
</script>

<style>
</style>