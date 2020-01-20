<template>
<div>
    <div class="mb-10 mt-4 text-center">
      <page-header title="My Blogs"/>
    </div>
    <b-card-group v-for="blog in blogs" v-bind:key="blog.id">
      <blog-card :blog="blog" />
    </b-card-group>
  </div>
</template>

<script>
import BlogCard from '../components/blogs/BlogCard'
import PageHeader from '../components/shared/PageHeader'
export default {
  components: {
    BlogCard,
    PageHeader
  },
  computed: {
    blogs() {
      return this.$store.state.blogs.blogs
    }
  },
  methods: {
    LoadBlogs() {
      this.$store.dispatch('blogs/getUserBlogs', 1)
    }
  },
  mounted() {
    this.LoadBlogs()
  }
}
</script>

<style>
</style>