<template>
<v-container>
  <v-row class="d-flex justify-center mb-6">
    <page-header title="Video Platforms"/>  
  </v-row>
  <v-row justify="center" class="d-flex mb-2">
    <v-col cols="10">
      <div>
        <Account v-for="platform in platforms" v-bind:key="platform.id" :platform="platform" />
        </div>

    </v-col>
  </v-row>
</v-container>

</template>

<script>
import Account from '~/components/videos/Account.Vue'
import PageHeader from '../components/shared/PageHeader.vue'
export default {
    components: {
        Account,
        PageHeader
    },
    computed: {
        platforms(){
            return this.$store.state.videos.platforms
        }
    },
    mounted: function(){
        this.refreshVideos()
    },
    methods: {
      refreshVideos(){
          try {
              this.$store.dispatch('videos/getPlatformVideos', 1)
          } catch (error) {
              
          }
      }
  }
}
</script>

<style>

</style>