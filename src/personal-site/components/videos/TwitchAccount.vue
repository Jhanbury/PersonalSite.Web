<template>
<v-card class="mb-6 pa-3">
    <v-card-title class="d-flex justify-space-between align-stretch">
      <v-avatar color="indigo" size="100">
        <v-img :src="account.iconUrl" />
      </v-avatar>
      <v-chip class="ma-2" color="purple" text-color="white">
        <v-avatar left>
          <v-icon color="white">mdi-twitch</v-icon>
        </v-avatar>Twitch
      </v-chip>
    </v-card-title>
    <v-card-subtitle class="pl-10 pt-6">
      <v-row>
        <span class="display-1 font-weight-light">{{ account.title }}</span>
      </v-row>
      <v-row>
        <span class="subtitle font-weight-light">{{ account.followers }} followers</span>
      </v-row>
      <v-row>
        <span
          class="subtitle font-weight-light"
        >{{ account.videos.length }} {{ account.videos.length > 1 ? 'videos' : 'video' }}</span>
      </v-row>
    </v-card-subtitle>
    <v-card-actions>
      <v-spacer />
      <v-btn icon v-show="account.isLive">
        <v-icon color="red">mdi-access-point</v-icon>
      </v-btn>
      <v-btn icon @click="openAccount(`${account.link}/videos`)">
        <v-icon >mdi-video</v-icon>
      </v-btn>
      <v-btn icon @click="openAccount(account.link)">
        <v-icon>mdi-account-box</v-icon>
      </v-btn>
      <v-btn icon @click="share(account.link)">
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
  
</template>
<script>
export default {
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