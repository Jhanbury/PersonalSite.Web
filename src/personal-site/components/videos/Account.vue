<template>
  <v-sheet class="pad-5">
    <v-container>
      <v-row class="d-flex flex-row justify-left">
        <v-col md="1">
          <account-icon :platform="platform" />
        </v-col>
        <v-col md="6" class="d-flex flex-row align-center headline">
          <div class="d-flex flex-row align-center">
            <div>{{ platform.title }}</div>
            <live-stream-indicator v-show="platform.isLive" class="ml-4" :url="platform.link" />
            <v-spacer></v-spacer>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="6" class="d-flex flex-row align-center headline">
          <div class="title">Latest Videos</div>
          <v-btn
          v-show="platform.videos.length > 0"
            text
            color="blue"
            @click="openAccountVideos(platform.link)"
            class="ml-8 view-all"
          >View All</v-btn>
        </v-col>      
      </v-row>
    </v-container>
    <p v-show="platform.videos.length == 0" class="ml-5">No Videos Available!</p>
    <b-card-group deck v-show="platform.videos.length > 0">
      <video-card v-for="video in platform.videos" v-bind:key="video.id" :video="video"></video-card>
    </b-card-group>
    <v-divider />
  </v-sheet>
</template>

<script>
import VideoCard from './VideoCard.vue'
import LiveStreamIndicator from './LiveStreamIndicator.vue'
import AccountIcon from './AccountIcon.vue'
export default {
  components: {
    VideoCard,
    LiveStreamIndicator,
    AccountIcon
  },
  props: {
    platform: Object
  },
  methods: {
    openAccountVideos(url) {
      window.open(url + '/videos')
    }
  }
}
</script>

<style scoped>
.view-all {
  text-decoration: underline;
}
.pad-5 {
  padding-left: 15px;
}
</style>
