<template>
  <b-card bg-variant="dark" @click="openRepo(repo.html_url)" class="repo-card">
      <b-card-title>{{repo.name}}</b-card-title>
      <b-card-text>
        {{repo.description}}
      </b-card-text>
      <i style="font-size: 30px;" :class="repo.language | languageIcon"></i>
      <v-container>
          <v-row>
              <GithubCardCounter icon="mdi-star" cols="3" :count="repo.stargazers_count" iconColor="white"/>
              <GithubCardCounter icon="mdi-source-branch" cols="3" :count="repo.forks" iconColor="white"/>
              <GithubCardCounter icon="mdi-alert-circle-outline" cols="3" :count="repo.open_issues" iconColor="white"/>
              <GithubCardCounter icon="mdi-eye-outline" cols="3" :count="repo.watchers" iconColor="white"/>
          </v-row>
      </v-container>
    </b-card>
</template>

<script>
import GithubCardCounter from "./GithubCardCounter";
export default {
    components: {
        GithubCardCounter
    },
    props: {
        repo: Object
    },
    methods:{
        openRepo(url){
            window.open(url)
        }
    },
    filters: {
        languageIcon : function(value) {
            switch (value) {
                case 'C#':
                    return 'devicon-csharp-plain'                    
                    break;
                case 'Vue':
                    return 'devicon-vuejs-plain colored'                    
                    break;
                case 'Java':
                    return 'devicon-java-plain colored'                    
                    break;
                case 'JavaScript':
                    return 'devicon-javascript-plain colored'                    
                    break;
            
                default:
                    break;
            }
        }
    }

}
</script>

<style>
    .repo-card:hover {
        transform: scale(1.05);
    }
</style>