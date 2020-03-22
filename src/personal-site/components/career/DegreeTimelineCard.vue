<template>
  <v-card color="blue" dark :width="cardWidth">
    <v-card-title>
      <!-- <v-icon large left>mdi-twitter</v-icon> -->
      <span class="title font-weight-light">{{degree.title}}</span>
    </v-card-title>
    <v-card-subtitle>at {{degree.smallText}}</v-card-subtitle>
    <v-card-text>
      <v-icon>mdi-trophy-outline</v-icon>
      {{degree.subTitle}}
    </v-card-text>
    <v-card-actions>
      <span v-show="$vuetify.breakpoint.xsOnly">{{ degree.formattedDate }}</span>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    cardWidth: String,
    degree: Object
  }
}
</script>

<style>
</style>