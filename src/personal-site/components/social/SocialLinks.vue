<template>
  <div>
    <v-icon
      class="social-icon m-2"
      size="xxx-large"
      v-for="link in socialLinks"
      v-bind:key="link.id"
      @click="openAccount(link.accountUrl)"
      :color="link.platform | socialIconColor"
    >{{link.platform | socialIcon}}</v-icon>
  </div>
</template>

<script>
export default {
  computed: {
    socialLinks() {
      return this.$store.state.user.socialLinks
    }
  },
  methods: {
    refreshSocialLinks() {
      this.$store.dispatch('user/getSocialLinks', 1)
    },
    openAccount(url) {
      window.open(url)
    }
  },
  mounted: function() {
    this.refreshSocialLinks()
  },
  filters: {
    socialIcon: function(value) {
      switch (value) {
        case 'Github':
          return 'mdi-github'
          break
        case 'Twitter':
          return 'mdi-twitter'
          break
        case 'Youtube':
          return 'mdi-youtube'
          break
        case 'Twitch':
          return 'mdi-twitch'
          break
        case 'Stack Overflow':
          return 'mdi-stack-overflow'
        case 'Linkedin':
          return 'mdi-linkedin'
        case 'Dev Community':
          return 'mdi-dev-to'
        default:
          return 'mdi-work'
          break
      }
    },
    socialIconColor: function(value) {
      switch (value) {
        case 'Github':
          return 'white'
          
        case 'Twitter':
          return 'blue'
          
        case 'Stack Overflow':
          return 'orange'
        case 'Youtube':
          return 'red'
        case 'Twitch':
          return 'purple'
        case 'Linkedin':
          return '#2867B2'
        case 'Dev Community':
          return 'white'
        default:
          return 'mdi-work'
          break
      }
    }
  }
}
</script>

<style>
.social-icon:hover {
  transform: scale(1.25);
}
</style>