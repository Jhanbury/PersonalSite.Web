<template>
  <v-carousel-item class="ml-12 pl-6 pr-6 mr-12" fill-height>
    <b-card bg-variant="dark">
      <b-card-title>{{project.title}}</b-card-title>
      <b-card-sub-title>{{project.projectType}}</b-card-sub-title>
      <b-card-text>{{project.description}}</b-card-text>
      
      <div class="subtitle">Skills</div>
      <SkillsChipGroup class="pr-12" :skills="project.skills" />
      <div class="subtitle">Technologies</div>
      <TechChipGroup :technologies="project.technologies" />
      <!-- <GithubRepoIcon :repoLink="project.projectUrl" /> -->
      <div class="mt-6 text-center">
        <v-btn @click="openLink(project.projectUrl)" outlined small color="white">View Project</v-btn>
        <v-btn outlined small color="white">View Source</v-btn>
      </div>
    </b-card>
  </v-carousel-item>
</template>

<script>
import SkillsChipGroup from '../skills/SkillChipGroup'
import TechChipGroup from '../technologies/TechChipGroup'
import GithubRepoIcon from '../github/GithubRepoIcon'
export default {
  components: {
    SkillsChipGroup,
    TechChipGroup,
    GithubRepoIcon
  },
  props: {
    project: Object
  },
  methods:{
      openLink(link){
          window.open(link)
      }
  }
}
</script>

<style>
</style>