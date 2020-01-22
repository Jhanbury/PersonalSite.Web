<template>
  <v-timeline-item :icon="item.timeLineType | typeIcon" >
        <template v-slot:opposite>
            <span>{{ $dateFns.format(item.date, 'do MMMM yyyy') }}</span>
        </template>
        <job-time-line-card :job="item" :cardWidth="cardWidth" v-show="item.timeLineType == 'Job'"/>
        <degree-timeline-card :degree="item" :cardWidth="cardWidth" v-show="item.timeLineType == 'Degree'"/>
        <certification-timeline-card :cert="item" :cardWidth="cardWidth" v-show="item.timeLineType == 'Certification'"/>

      
  </v-timeline-item>
</template>

<script>
import JobTimeLineCard from './JobTimelineCard.vue'
import DegreeTimelineCard from './DegreeTimelineCard.vue'
import CertificationTimelineCard from './CertificationTimelineCard.vue'
export default {
  props: {
      item: Object
  },
  components: {
    JobTimeLineCard,
    DegreeTimelineCard,
    CertificationTimelineCard
  },
  computed:{
    cardWidth(){
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'auto'
          case 'sm': return 'auto'
          case 'md': return '60em'
          case 'lg': return '60em'
          case 'xl': return '60em'
      }
    }
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