<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
    <!-- <logo/> -->
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
            :key="i"
            exact
            @click="navigate(item.to)"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />      
      <v-toolbar-title v-text="title" />
      <v-spacer />      
    </v-app-bar>
    <v-content>
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
export default {
  components: {
    Logo
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
