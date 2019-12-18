<template>
  <div>
  <v-chip-group column >
      <TechChip v-for="technology in technologies" v-bind:key="technology.id" :tech="technology"/>
  </v-chip-group>
</div>
</template>

<script>
import TechChip from './TechChip'
export default {
    components: {
        TechChip
    },
    props : {
        technologies: Array
    }

}
</script>

<style>

</style>