<template>
  <v-card color="green" dark :width="cardWidth">
    <v-card-title>
      <!-- <v-icon large left>mdi-twitter</v-icon> -->
      <span class="title font-weight-light">{{job.title}}</span>
      
    </v-card-title>
    <v-card-subtitle>at {{job.subTitle}}</v-card-subtitle>
    <v-card-text>
        <v-icon class="pb-1" color="red">mdi-map-marker</v-icon>
      {{job.smallText}}
      
    </v-card-text>
    <v-card-actions>
      <span v-show="$vuetify.breakpoint.xsOnly">{{ $dateFns.format(job.date, 'do MMMM yyyy') }}</span>
    </v-card-actions>
  </v-card>
  <!-- <v-card class="mx-auto"  :width="cardWidth">
    <v-card-title :class="$vuetify.breakpoint.xsOnly ? 'subtitle-2' : 'headline'">{{job.title}}</v-card-title>
    <v-card-subtitle class="pb-0">{{job.subTitle}}</v-card-subtitle>
    <v-card-subtitle></v-card-subtitle>
    <v-card-text>{{job.smallText}}</v-card-text>
  </v-card>-->
</template>

<script>
import LocationChip from '../shared/LocationChip.vue'
export default {
  props: {
    job: Object,
    cardWidth: String
  },
  components: {
    LocationChip
  }
}
</script>

<style>
</style>