<template>
  <v-chip >
      <i v-if="tech.name == 'VueJs'" style="font-size: 20px;" class="devicon-vuejs-plain colored mr-2"/> 
      <i v-if="tech.name == 'Git'" style="font-size: 20px;" class="devicon-git-plain colored mr-2"/> 
      <v-icon v-else  left :color="tech.name | techIconColor">{{tech.name | techIcon}}</v-icon>
      
         {{tech.name}}
  </v-chip>
</template>

<script>
export default {
    props: {
        tech: Object
    },
    filters: {
        techIcon: function(value){
            switch(value){
                case 'ASP.NET Core':
                    return 'mdi-dot-net'
                    break;
                case 'Angular':
                    return 'mdi-angular'
                    break;
                case 'Azure':
                    return 'mdi-azure'
                    break;
            }
                
        },
        techIconColor: function(value){
            switch(value){
                case 'ASP.NET Core':
                    return 'white'
                    break;
                case 'Angular':
                    return 'red'
                    break;
                case 'Azure':
                    return 'blue'
                    break;
            }
                
        }
    }
}
</script>

<style>

</style>