<template>
  <b-card
    :title="blog.title"
    :img-src="blog.imageUrl"
    @click="openBlog(blog.url)"
    bg-variant="dark"
    img-top
    tag="article"
    class="mb-2"
    style="max-width:30em"
  >
  
    <b-card-body>
      <v-chip label color="white" class="pa-0 float-top float-right">
        <v-icon
            :color="blog.source | socialIconColor"
          size="xxx-large"
        >{{ blog.source | socialIcon }}</v-icon>
      </v-chip>
    </b-card-body>
    <b-card-sub-title>{{ blog.authorName }}</b-card-sub-title>
    <b-card-text>{{ blog.teaser }}</b-card-text>
    <template v-slot:footer>
      <ViewCounter :views="views" :publishDate="publishDate" />
    </template>
  </b-card>
</template>

<script>
import ViewCounter from '../shared/ViewCounter.vue'
export default {
  components: {
    ViewCounter
  },
  filters: {
    socialIcon(value) {
      switch (value) {
        case 'Github':
          return 'mdi-github'
        case 'Twitter':
          return 'mdi-twitter'
        case 'Youtube':
          return 'mdi-youtube'
        case 'Twitch':
          return 'mdi-twitch'
        case 'Stack Overflow':
          return 'mdi-stack-overflow'
        case 'Linkedin':
          return 'mdi-linkedin'
        case 'Dev Community':
          return 'mdi-dev-to'
        case 'DevTo':
          return 'mdi-dev-to'
        default:
          return 'mdi-work'
      }
    },
    socialIconColor(value) {
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
        case 'DevTo':
          return 'black'
        default:
          return 'mdi-work'
      }
    }
  },
  props: {
    blog: { type: Object, required: true }
  },
  data() {
    return {
      views: 10000,
      publishDate: '2018-02-02T00:00:00'
    }
  },
  methods: {
    openBlog(url) {
      window.open(url)
    }
  }
}
</script>

<style>
</style>
