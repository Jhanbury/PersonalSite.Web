<template>
  <v-list-item >
    <v-list-item-avatar>
      <img :src="account.iconUrl" alt="John" />
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title class="headline">{{account.title}}</v-list-item-title>
      <v-list-item-subtitle>{{account.followers}} followers</v-list-item-subtitle>      
    </v-list-item-content>
    <v-list-item-icon>
      <v-btn fab color="white">
        <v-icon x-large color="purple">mdi-twitch</v-icon>
      </v-btn>
    </v-list-item-icon>
  </v-list-item>
</template>
<script>
export default {
  props: {
    account: Object
  }
}
</script>

<style>
</style>