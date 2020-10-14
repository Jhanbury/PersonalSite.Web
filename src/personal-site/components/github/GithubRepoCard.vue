<template>
  <b-card
    @click="openRepo(repo.html_url)"
    bg-variant="secondary"
    class="repo-card"
  >
    <b-card-title>{{ repo.name }}</b-card-title>
    <b-card-text class="text-start">
      {{ repo.description }}
    </b-card-text>
    <i :class="repo.language | languageIcon" style="font-size: 30px;" />
    <v-container>
      <v-row>
        <GithubCardCounter
          :count="repo.stargazers_count"
          icon="mdi-star"
          cols="3"
          icon-color="white"
        />
        <GithubCardCounter
          :count="repo.forks"
          icon="mdi-source-branch"
          cols="3"
          icon-color="white"
        />
        <GithubCardCounter
          :count="repo.open_issues"
          icon="mdi-alert-circle-outline"
          cols="3"
          icon-color="white"
        />
        <GithubCardCounter
          :count="repo.watchers"
          icon="mdi-eye-outline"
          cols="3"
          icon-color="white"
        />
      </v-row>
    </v-container>
  </b-card>
</template>

<script>
import GithubCardCounter from './GithubCardCounter'
export default {
  components: {
    GithubCardCounter
  },
  filters: {
    languageIcon(value) {
      switch (value) {
        case 'C#':
          return 'devicon-csharp-plain'
        case 'Vue':
          return 'devicon-vuejs-plain colored'
        case 'Java':
          return 'devicon-java-plain colored'
        case 'JavaScript':
          return 'devicon-javascript-plain colored'
        default:
          break
      }
    }
  },
  props: {
    repo: Object
  },
  methods: {
    openRepo(url) {
      window.open(url)
    }
  }
}
</script>

<style scoped>
.card-body {
  background: #303030 !important;
}
.card-footer {
  background: #303030 !important;
}
.repo-card:hover {
  transform: scale(1.05);
}
</style>
