<template>
  <v-chip @click="openUrl(url)" class="pl-3 pr-3">
      <v-icon left color="red">mdi-record</v-icon>
      <span class="font-weight-medium subtitle-1" >Live</span>
  </v-chip>
</template>

<script>
export default {
    props: {
        url: String
    },
    methods:{
        openUrl(url){
            window.open(url)
        }
    }
    

}
</script>

<style>

</style>