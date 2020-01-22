<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"      
      :clipped="clipped"
      :style="{background: $vuetify.theme.themes[theme].background}"
      fixed
      app
    >
      
      <v-list shaped>
        <v-subheader>JOHNHANBURY.DEV</v-subheader>
        <v-list-item
          
          v-for="(item, i) in items"
            :key="i"
            
            exact
            @click="navigate(item.to)"
        >
          <v-list-item-action>
            <v-icon :color="$vuetify.theme.themes[theme].accent">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title :style="{color: $vuetify.theme.themes[theme].accent}" v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-app-bar
      :style="{background: $vuetify.theme.themes[theme].background}"
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />      
      <v-toolbar-title v-text="title" :style="{color: $vuetify.theme.themes[theme].accent}" />
      <v-spacer /> 
      <v-btn class="ma-2" outlined :color="$vuetify.theme.themes[theme].accent">Get in Touch</v-btn>     
    </v-app-bar> -->
    <v-content>
      
        <v-row class="ma-5 mb-0">
          <v-icon size="xx-large" :color="$vuetify.theme.themes[theme].accent" @click="drawer = !drawer" >mdi-apps</v-icon>
          <v-spacer/>
          <!-- <v-chip label :text-color="$vuetify.theme.themes[theme].accent" class="text-center">JOHNHANBURY.DEV</v-chip> -->
          <!-- <social-links></social-links> -->
          <v-spacer/>
          <v-btn @click="navigate('contact')" outlined small :color="$vuetify.theme.themes[theme].accent">Get in Touch</v-btn>
        </v-row>
              
      <v-container>        
        <nuxt />
        
      </v-container>
      
    </v-content>
    
    <!-- <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer> -->
  </v-app>
</template>

<script>
import Logo  from "~/components/Logo.vue";
import SocialLinks from "~/components/social/SocialLinks.vue"
export default {
  components: {
    SocialLinks,
    Logo
  },
  computed:{
    theme(){
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-post',
          title: 'Blogs',
          to: '/blogs'
        },
        {
          icon: 'mdi-source-repository',
          title: 'Github',
          to: '/github'
        },
        {
          icon: 'mdi-lightbulb-on',
          title: 'Projects',
          to: '/projects'
        },
        {
          icon: 'mdi-briefcase',
          title: 'Work History',
          to: '/work-history'
        },
        {
          icon: 'mdi-video-account',
          title: 'Videos',
          to: '/videos'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'John Hanbury'
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
<style>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.7s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
