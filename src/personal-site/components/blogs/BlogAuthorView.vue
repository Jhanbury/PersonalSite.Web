<template>
  <v-container class="pa-0">
    <v-row>
      <v-col cols="auto">
        <v-avatar>
          <v-img :src="avatar" />
        </v-avatar>
      </v-col>
      <v-col>
        <v-row>{{ author }}</v-row>
        <v-row class="body-2">
          {{ $dateFns.format(new Date(publishDate), 'dd MMMM') }}
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    author: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    publishDate: {
      type: Date,
      required: true
    }
  }
}
</script>

<style>
</style>
