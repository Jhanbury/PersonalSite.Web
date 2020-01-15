<template>
  <v-chip>
      <v-icon small left color="white">{{skill.name | skillIcon}}</v-icon>
      {{skill.name}}
  </v-chip>
</template>

<script>
export default {
    props: {
        skill: Object
    },
    filters: {
        skillIcon: function(value){
            switch(value){
                case 'Web Development':
                    return 'mdi-web'
                    break;
                case 'Database Design':
                    return 'mdi-database'
                    break;
                case 'Cloud Development':
                    return 'mdi-cloud-braces'
                    break;
                case 'Backend Development':
                    return 'mdi-server'
                    break;
                case 'Frontend Development':
                    return 'mdi-file-code'
                    break;
            }
                
        }
    }

}
</script>

<style>

</style>