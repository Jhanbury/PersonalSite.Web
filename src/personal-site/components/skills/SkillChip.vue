<template>
  <v-chip>
      <v-icon left color="white">{{skill.name | skillIcon}}</v-icon>
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
            }
                
        }
    }

}
</script>

<style>

</style>