<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex xs12 sm8 md6>
      </br>
      <div class="text-center">
        <logo />              
      </div>
      </br>
      </br>
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      <b-card-group deck>        
        <b-card exact v-for="tile in tiles" v-bind:key="tile.id" @click="navigate(tile.route)" :title="tile.title" bg-variant="dark" text-variant="white" class="tile text-center" >          
            <lottie-player 
              :src="tile.animation"  background="transparent"  speed="1"    loop  autoplay >
            </lottie-player>
        </b-card>
      </b-card-group>
      </br>
      </br>
      <div class="text-center">        
        <social-links></social-links>          
      </div>      
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import SocialLinks from '~/components/social/SocialLinks.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
    SocialLinks
  },
  data(){
    return {
      description: 'This site is away for me to expand my brand :) ',
      tiles: [
        {
          id: 1,
          title: 'Projects',
          animation: 'animations/projects.json',
          route: 'projects'
        },
        {
          id: 2,
          title: 'Work History',
          animation: 'animations/work-experience.json',
          route: 'work-history'
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
          route: 'videos'
        }
      ]
    }
  },
  methods: {
    navigate(route) {
      this.drawer = false
      this.$router.push(route)
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
