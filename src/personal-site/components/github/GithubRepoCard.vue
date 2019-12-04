<template>
  <b-card bg-variant="dark" @click="openRepo(repo.html_url)" class="repo-card">
      <b-card-title>{{repo.name}}</b-card-title>
      <b-card-text>
        {{repo.description}}
      </b-card-text>
      <i style="font-size: 30px;" :class="repo.language | languageIcon"></i>
      <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
    </b-card>

</template>

<script>
export default {
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