<template>
  <v-layout column justify-center align-center>
    <v-flex v-if="isLoading" align-center xs12 sm8 md10>
      <v-progress-circular
        :size="50"
        class="align-middle"
        color="yellow"
        indeterminate
      />
    </v-flex>
    <v-flex v-else xs12 sm8 md10>
      <b-jumbotron
        class="py-8"
        lead=".NET Fullstack Developer"
        bg-variant="dark"
      >
        <template v-slot:header>
          {{ user.firstName }} {{ user.lastName }}
        </template>
        <hr class="my-4" />
        <p style="max-width: 53.5em" class="mr-12 pr-12 text-justify">
          {{ user.personalStatement }}
        </p>
        <div class="mt-10 text-center">
          <location-chip
            :location="user.currentLocation"
            color="red"
            background-color="#212221"
          />
        </div>
      </b-jumbotron>

      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
      <b-card-group class="mt-8" deck>
        <b-card
          v-for="tile in tiles"
          v-bind:key="tile.id"
          @click="navigate(tile.route)"
          :title="tile.title"
          exact
          bg-variant="dark"
          text-variant="white"
          class="tile text-center"
        >
          <lottie-player
            :src="tile.animation"
            class="pa-2"
            background="transparent"
            speed="1"
            loop
            autoplay
          />
        </b-card>
      </b-card-group>
      <div class="mt-8 text-center">
        <social-links />
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '../components/Logo.vue'
import VuetifyLogo from '../components/VuetifyLogo.vue'
import SocialLinks from '../components/social/SocialLinks.vue'
import LocationChip from '../components/shared/LocationChip.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
    SocialLinks,
    LocationChip
  },
  data() {
    return {
      description: 'This site is away for me to expand my brand :) ',
      tiles: [
        // {
        //   id: 1,
        //   title: 'Projects',
        //   animation: 'animations/projects.json',
        //   route: 'projects'
        // },
        {
          id: 2,
          title: 'Blog Posts',
          animation: 'animations/work-experience.json',
          route: 'blogs'
        },
        {
          id: 3,
          title: 'Github Repos',
          animation: 'animations/repos.json',
          route: 'github'
        },
        {
          id: 4,
          title: 'Videos',
          animation: 'animations/video.json',
          route: 'videoaccounts'
        }
      ]
    }
  },
  computed: {
    user() {
      return this.$store.state.user.userInfo
    },
    isLoading() {
      return this.$store.state.user.isLoading
    }
  },
  transition: 'fade',
  mounted() {
    this.refreshUserData()
  },
  methods: {
    navigate(route) {
      this.drawer = false
      this.$router.push(route)
    },
    refreshUserData() {
      try {
        this.$store.dispatch('user/getUserInfo', 1)
      } catch (error) {}
    }
  }
}
</script>
<style scoped>
.bg-dark {
  background-color: #424242 !important;
}
/* .tile{
    max-width: 200px;
  } */
.tile:hover {
  transform: scale(1.05);
}
</style>
