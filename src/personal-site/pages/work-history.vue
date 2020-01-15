<template>
<v-container>
  <v-row class="d-flex justify-center mb-6">
    <page-header title="Career Timeline"/>  
  </v-row>
  <v-row justify="center" class="d-flex mb-2">
    <v-col cols="10">
      <v-timeline>
        <Timeline-Card v-for="event in timeline" v-bind:key="event.title" :item="event"/>
      </v-timeline>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import TimelineCard from "../components/career/TimelineCard.vue";
import PageHeader from '../components/shared/PageHeader.vue'
export default {
  components: {
    TimelineCard,
    PageHeader
  },
  transition: 'fade',
  computed:{
    timeline(){
      return this.$store.state.career.timeline;
    }
  },
  mounted: function(){
    this.refreshTimeline()
},
  methods:{
    refreshTimeline(){
      this.$store.dispatch('career/getUserCareerTimeline', 1)
    }
  }

}
</script>

<style>
  
</style>