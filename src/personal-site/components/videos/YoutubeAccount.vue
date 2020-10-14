<template>
  <v-card class="mb-6 pa-3">
    <v-card-title>
      <v-row no-gutters align="stretch" class="d-flex justify-space-between">
        <v-avatar color="indigo" size="100">
          <v-img :src="account.iconUrl" />
        </v-avatar>

        <v-chip class="ma-2" color="red" text-color="white">
          <v-avatar left>
            <v-icon color="white">
              mdi-youtube
            </v-icon> </v-avatar
          >Youtube
        </v-chip>
      </v-row>
    </v-card-title>
    <v-card-subtitle class="pl-10 pt-6">
      <v-row>
        <span class="display-1 font-weight-light">{{ account.title }}</span>
      </v-row>
      <v-row>
        <span class="subtitle font-weight-light"
          >{{ account.followers }} subscribers</span
        >
      </v-row>
      <v-row>
        <span class="subtitle font-weight-light"
          >{{ account.videos.length }}
          {{ account.videos.length > 1 ? 'videos' : 'video' }}</span
        >
      </v-row>
    </v-card-subtitle>
    <v-card-actions>
      <v-spacer />
      <v-btn v-show="account.isLive" icon>
        <v-icon large color="red">
          mdi-access-point
        </v-icon>
      </v-btn>
      <v-btn @click="openAccount(`${account.link}/videos`)" icon>
        <v-icon>mdi-video</v-icon>
      </v-btn>
      <v-btn @click="openAccount(account.link)" icon>
        <v-icon medium>
          mdi-account-box
        </v-icon>
      </v-btn>
      <v-btn @click="share(account.link)" icon>
        <v-icon medium>
          mdi-share-variant
        </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import AccountIcon from './AccountIcon.vue'
export default {
  components: {
    AccountIcon
  },
  props: {
    account: Object
  },
  methods: {
    openAccount(url) {
      window.open(url)
    },
    share(url) {
      if (navigator.canShare) {
        navigator.share({
          title: 'John Hanbury',
          text: `Check out ${this.$props.account.title}`,
          url
        })
      } else {
        console.log('no share')
      }
    }
  }
}
</script>

<style>
</style>
