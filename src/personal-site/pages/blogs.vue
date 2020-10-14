<template>
  <div>
    <div class="mb-10 mt-4 text-center">
      <page-header title="Publications" />
    </div>
    <v-container>
      <v-row>
        <v-tabs
          v-model="tab"
          icons-and-text
          class="pb-6"
          background-color="#222222"
          align-with
          color="white"
          centered
          center-active
          fixed-tabs
        >
          <v-tab>
            Blogs
            <v-icon>mdi-post</v-icon>
          </v-tab>
          <v-tab>
            Articles
            <v-icon>mdi-newspaper</v-icon>
          </v-tab>
        </v-tabs>
      </v-row>
      <v-row v-show="tab == 0">
        <b-card-group columns>
          <blog-card v-for="blog in blogs" v-bind:key="blog.id" :blog="blog" />
        </b-card-group>
      </v-row>
      <v-row v-show="tab == 1" class="justify-center">
        <b-card-group deck>
          <article-card
            v-for="article in articles"
            v-bind:key="article.id"
            :article="article"
          />
        </b-card-group>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BlogCard from '../components/blogs/BlogCard'
import PageHeader from '../components/shared/PageHeader'
import ArticleCard from '../components/articles/ArticleCard'
export default {
  components: {
    BlogCard,
    PageHeader,
    ArticleCard
  },
  data() {
    return {
      tab: null
    }
  },
  computed: {
    blogs() {
      return this.$store.state.blogs.blogs
    },
    articles() {
      return this.$store.state.blogs.articles
    }
  },
  mounted() {
    this.LoadBlogs()
  },
  methods: {
    LoadBlogs() {
      this.$store.dispatch('blogs/getUserBlogs', 1)
      this.$store.dispatch('blogs/getUserArticles', 1)
    }
  }
}
</script>

<style>
</style>
