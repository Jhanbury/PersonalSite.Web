<template>
  <div>
    <div class="mb-10 mt-4 text-center">
      <page-header title="My Projects"/>
    </div>
    <v-carousel hide-delimiter-background="true" hide-delimiters="true" height="auto">
      <ProjectCarouselCard v-for="project in projects" :key="project.id" :project="project"/>
    </v-carousel>
  </div>
</template>

<script>
import ProjectCarouselCard from '../components/projects/ProjectCarouselCard'
import PageHeader from '../components/shared/PageHeader.vue'

export default {
  components: {
     ProjectCarouselCard,
     PageHeader     
     
  },
  transition: 'fade',
  computed: {
    projects(){
      return this.$store.state.projects.projects;
    }
  },
  mounted(){
    this.refreshProjects();
  },
  methods: {
    refreshProjects(){
      this.$store.dispatch('projects/getProjects', 1);
    }
  }

}
</script>

<style>

</style>