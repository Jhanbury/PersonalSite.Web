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
        <v-row>
          <small>{{
            $dateFns.format(new Date(publishDate), 'd MMMM yyyy')
          }}</small>
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
      type: String,
      required: true
    }
  }
}
</script>

<style>
</style>
