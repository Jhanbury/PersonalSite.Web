<template>
  <v-timeline-item :icon="item.timeLineType | typeIcon">
        <template v-slot:opposite>
            <span>{{ $dateFns.format(item.date, 'do MMMM yyyy') }}</span>
          </template>
      <v-card class="elevation-2" >          
          <v-card-title class="headline">{{item.title}}</v-card-title>
          <v-card-text>
            {{item.subTitle}}
          </v-card-text>
        </v-card>
  </v-timeline-item>
</template>

<script>
export default {
  props: {
      item: Object
  },
  filters: {
    typeIcon : function(value) {
            switch (value) {
                case 'Degree':
                    return 'mdi-school'                    
                    break;
                case 'Certification':
                    return 'mdi-certificate'                    
                    break;
                case 'Job':
                    return 'mdi-briefcase-account'                    
                default:
                    return 'mdi-work'
                    break;
            }
        }
  }

}
</script>

<style>

</style>