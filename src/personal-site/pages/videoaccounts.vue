<template>
  <v-container fluid>
    <v-row class="d-flex justify-center mb-6">
      <page-header title="Video Platforms" />
    </v-row>
    <v-row align="stretch">
      <v-col cols="12">
        <v-item-group multiple>
          <v-row align="stretch" justify="center">
            <v-col v-for="(platform, i) in platforms" :key="i" cols="12" md="6" lg="6" sm="12">
              <v-item>
                <Account :platform="platform" />
              </v-item>
            </v-col>
          </v-row>
        </v-item-group>
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
  transition: 'fade',
  computed: {
    platforms() {
      return this.$store.state.videos.platforms
    }
  },
  mounted: function() {
    this.refreshVideos()
  },
  methods: {
    refreshVideos() {
      try {
        this.$store.dispatch('videos/getPlatformVideos', 1)
      } catch (error) {}
    },
    navigate(route) {
      this.drawer = false
      this.$router.push(route)
    }
  }
}
</script>

<style>
</style>