<template>
  <v-list-item>
    <v-list-item-avatar>
      <img :src="account.iconUrl" alt="John" />
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title class="headline">{{account.title}}</v-list-item-title>
      <v-list-item-subtitle>{{account.followers}} subscribers</v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-icon>
      <v-btn fab color="white">
        <v-icon x-large color="red">mdi-youtube</v-icon>
      </v-btn>
    </v-list-item-icon>
  </v-list-item>
</template>

<script>
import AccountIcon from './AccountIcon.vue'
export default {
  props: {
    account: Object
  },
  components: {
    AccountIcon
  }
}
</script>

<style>
</style>