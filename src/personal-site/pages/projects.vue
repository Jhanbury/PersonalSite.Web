<template>
  <v-container>
    <v-row class="d-flex justify-center mb-6">
      <page-header title="My Projects" />
    </v-row>
    <v-row justify="center" class="d-flex mb-2">
      <v-item-group
        v-model="selected"
        multiple
      >
        <v-row>
          <v-col
            v-for="(project, i) in projects"
            :key="i"
            cols="12"
            md="6"
            sm="12"
          >
            <v-item>
              <ProjectCarouselCard :project="project" />
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
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