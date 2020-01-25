<template>
  <div class="d-flex justify-center"  @click="openAccount(platform.link)">
    <youtube-account v-if="platform.platform == 'YouTube'" :account="platform" />
    <twitch-account v-if="platform.platform == 'Twitch'" :account="platform"/>
  </div>
    
</template>

<script>
import VideoCard from './VideoCard.vue'
import YoutubeAccount from './YoutubeAccount.vue'
import TwitchAccount from './TwitchAccount.vue'
import LiveStreamIndicator from './LiveStreamIndicator.vue'
import AccountIcon from './AccountIcon.vue'
export default {
  components: {
    VideoCard,
    LiveStreamIndicator,
    AccountIcon,
    YoutubeAccount,
    TwitchAccount
  },
  props: {
    platform: Object
  },
  methods: {
    openAccount(url) {
      window.open(url)
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
