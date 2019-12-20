<template>
  <v-badge top right color="transparent">
    <template v-slot:badge>
      <v-icon :color="platform.platform | iconColor" size="28">{{platform.platform | icon}}</v-icon>
    </template>
    <v-avatar>
      <img :src="platform.iconUrl" alt="John" />
    </v-avatar>
  </v-badge>
</template>

<script>
export default {
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
</style>