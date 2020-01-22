<template>
  <b-card
    bg-variant="dark"
    img-top
    tag="article"
    :title="blog.title"
    :img-src="blog.imageUrl"
    class="mb-2"
    style="max-width:30em"
    @click="openBlog(blog.url)"
  >
    <b-card-sub-title>{{blog.user.firstName}} {{blog.user.lastName}}</b-card-sub-title>
    <b-card-text>This is a test description</b-card-text>
    <template v-slot:footer>
      <ViewCounter :views="views" :publishDate="publishDate" />
    </template>
    
  </b-card>
</template>

<script>
import ViewCounter from '../shared/ViewCounter.vue'
export default {
  data: function() {
    return {
      views: 10000,
      publishDate: '2018-02-02T00:00:00'
    }
  },
  components: {
    ViewCounter
  },
  props: {
    blog: Object
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