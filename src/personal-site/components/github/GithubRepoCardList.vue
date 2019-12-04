<template>
  <b-card-group columns>
      <github-repo-card v-for="repo in repos"
        v-bind:key="repo.id"
        :repo="repo"></github-repo-card>
  </b-card-group>
</template>

<script>
import GithubRepoCard from './GithubRepoCard'
export default {
  components: {
    GithubRepoCard
  },
  props: {
      repos: Array
  }
}
</script>

<style>
</style>