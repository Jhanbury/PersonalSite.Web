<template>
<div>
  <v-chip-group column >
      <SkillChip v-for="skill in skills" v-bind:key="skill.id" :skill="skill"/>
  </v-chip-group>
</div>
</template>

<script>
import SkillChip from './SkillChip'
export default {
    components: {
        SkillChip
    },
    props : {
        skills: Array
    }

}
</script>

<style>

</style>