<template>
  <div class="d-flex justify-center">
    <v-icon x-large :color="link.color" v-for="link in links" v-bind:key="link.id">{{link.icon}}</v-icon>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          icon: 'mdi-linkedin-box',
          color: '#2867B2'
        },
        {
          icon: 'mdi-gmail',
          color: 'white',
          background: 'red'
        }
      ]
    }
  }
}
</script>

<style>
</style>