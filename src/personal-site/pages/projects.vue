<template>
  <v-container>
    <v-row class="d-flex justify-center mb-6">
      <page-header title="My Projects" />
    </v-row>
    <v-row justify="center" class="d-flex mb-2">
      <b-card-group columns>
        <ProjectCarouselCard v-for="project in projects" :key="project.id" :project="project" />
      </b-card-group>
    </v-row>
  </v-container>
</template>

<script>
import ProjectCarouselCard from '../components/projects/ProjectCarouselCard.vue'
import PageHeader from '../components/shared/PageHeader.vue'

export default {
  components: {
    ProjectCarouselCard,
    PageHeader
  },
  transition: 'fade',
  computed: {
    projects() {
      return this.$store.state.projects.projects
    }
  },
  mounted() {
    this.refreshProjects()
  },
  methods: {
    refreshProjects() {
      this.$store.dispatch('projects/getProjects', 1)
    }
  }
}
</script>

<style>
</style>