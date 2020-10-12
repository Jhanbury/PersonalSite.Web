<template>
  <v-chip>
    <v-icon class="pr-1" size="medium">
      {{ icon }}
    </v-icon>
    {{ text }}
  </v-chip>
</template>

<script>
export default {
  props: {
    icon: { type: String, required: true },
    text: { type: String, required: true }
  }
}
</script>

<style>
</style>
