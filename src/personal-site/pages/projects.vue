<template>
  <div>
    <div class="mb-10 mt-8 display-2 text-center">Projects</div>
    <v-carousel hide-delimiter-background="true" hide-delimiters="true" height="auto">
      <ProjectCarouselCard v-for="project in projects" :key="project.id" :project="project"/>
    </v-carousel>
  </div>
</template>

<script>
import ProjectCarouselCard from '../components/projects/ProjectCarouselCard'

export default {
  components: {
     ProjectCarouselCard
     
  },
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