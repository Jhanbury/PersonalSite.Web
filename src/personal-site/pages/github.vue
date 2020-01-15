<template>
<v-container>
  <v-row class="d-flex justify-center mb-6">
    <div ><i style="font-size: 100px;" class="devicon-github-plain-wordmark"/></div>
  </v-row>
  <v-row>
    <github-repo-card-list :repos="repos"></github-repo-card-list>
  </v-row>
</v-container>

  
</template>

<script>
import GithubRepoCardList from '../components/github/GithubRepoCardList'
export default {
  components: {
    GithubRepoCardList
  },
  computed: {
    repos() {
      return this.$store.state.github.repos
    }
  },
  transition: 'fade',
  mounted: function() {
    this.refreshRepos()
  },
  methods: {
    refreshRepos() {
      try {
        this.$store.dispatch('github/getGithubRepos', 1)
      } catch (error) {}
    }
  }
}
</script>

<style>
</style>