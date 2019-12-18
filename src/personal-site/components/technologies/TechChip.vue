<template>
  <v-chip>
      <v-icon left :color="tech.name | techIconColor">{{tech.name | techIcon}}</v-icon>
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
            }
                
        }
    }
}
</script>

<style>

</style>