<template>
  <v-sheet class="pad-5">
    <v-container>
      <v-row class="d-flex flex-row justify-left">
        <v-col md="1">
          <v-avatar>
            <img :src="platform.iconUrl" alt="John" />
          </v-avatar>
        </v-col>
        <v-col md="2" class="headline">{{ platform.title }}</v-col>
        <v-col md="1"
          ><v-icon :color="platform.platform | iconColor" dark large>{{
            platform.platform | icon
          }}</v-icon></v-col
        >
        <v-col v-show="!platform.isLive" md="1">
          <v-icon x-small="" color="red">mdi-circle</v-icon><span> Live</span>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
      <v-row>
        <v-col class="title" md="2">Latest Videos</v-col>
        <v-spacer></v-spacer>
        <v-col md="2">
          <v-btn text color="blue" class="view-all">View All</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <p v-show="platform.videos.length == 0"> No Videos Available!</p>
    <b-card-group deck v-show="platform.videos.length > 0">
      <video-card
        v-for="video in platform.videos"
        v-bind:key="video.id"
        :video="video"
      ></video-card>
    </b-card-group>
    <v-divider />
  </v-sheet>
</template>

<script>
import VideoCard from './VideoCard.vue'
export default {
  components: {
    VideoCard
  },
  props: {
    platform: Object
  },
  filters: {
    icon: function(value) {
      switch (value) {
        case 'Twitch': {
          return 'mdi-twitch'
        }
        case 'YouTube': {
          return 'mdi-youtube'
        }
      }
    },
    iconColor: function(value) {
      switch (value) {
        case 'Twitch': {
          return 'purple'
        }
        case 'YouTube': {
          return 'red'
        }
      }
    }
  }
}
</script>

<style>
.view-all {
  text-decoration: underline;
}
.pad-5{
    padding-left: 15px;
}
</style>
