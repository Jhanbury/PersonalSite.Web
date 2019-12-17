<template>
  <v-col :cols="cols">
    <div>{{count}} <v-icon class="pl-1" :color="iconColor">{{icon}}</v-icon></div>                  
  </v-col>
</template>

<script>
export default {
    props: {
        count : Number,
        icon : String,
        cols: Number,
        iconColor : String
    }
}
</script>

<style>

</style>