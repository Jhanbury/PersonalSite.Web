<template>
  <v-carousel-item class="ml-12 pl-6 pr-6 mr-12" fill-height>
      <b-card bg-variant="dark">
        <b-card-title>{{project.title}}</b-card-title>
        <b-card-text>
            {{project.description}}
        </b-card-text>
        <b-card-text>
            {{project.projectType}}
        </b-card-text>
        <div class="subtitle">Skills</div>
        <SkillsChipGroup :skills="project.skills" />
        <div class="subtitle">Technologies</div>
        <TechChipGroup :technologies="project.technologies" />
        <!-- <v-container>
            <v-row>
                <GithubCardCounter icon="mdi-star" cols="3" :count="repo.stargazers_count" iconColor="white"/>
                <GithubCardCounter icon="mdi-source-branch" cols="3" :count="repo.forks" iconColor="white"/>
                <GithubCardCounter icon="mdi-alert-circle-outline" cols="3" :count="repo.open_issues" iconColor="white"/>
                <GithubCardCounter icon="mdi-eye-outline" cols="3" :count="repo.watchers" iconColor="white"/>
            </v-row>
        </v-container> -->
      </b-card>
  </v-carousel-item>
</template>

<script>
import SkillsChipGroup from '../skills/SkillChipGroup'
import TechChipGroup from '../technologies/TechChipGroup'
export default {
    components: {
        SkillsChipGroup,
        TechChipGroup
    },
    props: {
        project: Object
    }

}
</script>

<style>

</style>