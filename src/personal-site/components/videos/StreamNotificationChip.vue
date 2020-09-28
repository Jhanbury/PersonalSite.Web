<template>
  <v-chip color="white" @click="openStream(stream.url)" v-show="stream.isLive">
    <v-avatar left color="white">
      <v-icon small :color="stream.platform | iconColor">{{stream.platform | icon}}</v-icon>
    </v-avatar>
    <span class="black--text">{{stream.streamer}}</span>
    <v-avatar right>
      <v-icon small color="red">mdi-record</v-icon>      <!--  -->
    </v-avatar>
    
  </v-chip>
</template>

<script>
export default {
  computed: {
    stream() {
      return this.$store.state.videos.stream
    }
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
  },
  mounted() {
    this.getStreamInfo()
  },
  methods: {
    openStream(url) {
      window.open(url)
    },
    getStreamInfo() {
      try {
        this.$store.dispatch('videos/getStreamInfo', 1)
      } catch (error) {}
    }
  }
}
</script>

<style>
</style>