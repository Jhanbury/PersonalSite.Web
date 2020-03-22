<template>
  <v-card color="purple" dark :width="cardWidth">
    <v-card-title>
      <!-- <v-icon large left>mdi-twitter</v-icon> -->
      <span class="title font-weight-light">{{cert.title}}</span>
    </v-card-title>
    <v-card-subtitle>{{cert.subTitle}}</v-card-subtitle>
    <v-card-text>{{cert.smallText}}</v-card-text>
    <v-card-actions>
      <span
        v-show="$vuetify.breakpoint.xsOnly"
      >{{ cert.formattedDate }}</span>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    cert: Object,
    cardWidth: String
  }
}
</script>

<style>
</style>