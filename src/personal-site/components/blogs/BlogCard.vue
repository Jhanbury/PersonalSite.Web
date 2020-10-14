<template>
  <b-card
    :title="blog.title"
    :img-src="blog.imageUrl"
    @click="openBlog(blog.url)"
    bg-variant="dark"
    img-top
    tag="article"
    class="pa-0"
    style="max-width:30em"
  >
    <b-card-body class="pa-0">
      <v-container class="pa-0">
        <blog-author-view
          :author="blog.authorName"
          :avatar="blog.userAvatar"
          :publishDate="blog.publishDate"
        />
        <blog-metrics-panel :blog="blog" class="py-0" />
      </v-container>
    </b-card-body>

    <template v-slot:footer>
      <v-container class="py-0">
        <v-row>
          <tag-list :tags="blog.tags" />
          <v-spacer />
          <v-col class="pr-0" cols="auto">
            <small>{{ blog.readLength }} min read </small>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </b-card>
</template>

<script>
import BlogMetricsPanel from './BlogMetricsPanel.vue'
import BlogAuthorView from './BlogAuthorView.vue'
import TagList from './TagList.vue'
export default {
  components: {
    BlogMetricsPanel,
    BlogAuthorView,
    TagList
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
