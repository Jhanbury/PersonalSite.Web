<template>
<div>
  <Account v-for="platform in platforms" v-bind:key="platform.id" :platform="platform" />
</div>
</template>

<script>
import Account from '~/components/videos/Account.Vue'
export default {
    components: {
        Account
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