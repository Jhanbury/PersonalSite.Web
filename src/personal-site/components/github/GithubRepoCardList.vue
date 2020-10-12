<template>
  <b-card-group columns>
    <github-repo-card v-for="repo in repos" v-bind:key="repo.id" :repo="repo" />
  </b-card-group>
</template>

<script>
import GithubRepoCard from './GithubRepoCard'
export default {
  components: {
    GithubRepoCard
  },
  props: {
    repos: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
</style>
