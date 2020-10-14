<template>
  <b-card
    @click="openVideo(video.url)"
    :title="video.title"
    :img-src="video.thumbnailUrl"
    bg-variant="light"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-sub-title>
      {{ video.videoDuration }}
    </b-card-sub-title>

    <template v-slot:footer>
      <view-counter :views="video.viewCount" :publishDate="video.publishDate" />
      <!-- <small class="text-light">Published - {{ $dateFns.format(video.publishDate, 'do MMMM yyyy')}}</small> -->
    </template>
  </b-card>
</template>

<script>
import ViewCounter from '../shared/ViewCounter.vue'
export default {
  components: {
    ViewCounter
  },
  props: {
    video: Object
  },
  methods: {
    openVideo(url) {
      window.open(url)
    }
  }
}
</script>

<style scoped>
.card-body {
  background: #303030 !important;
}
.card-footer {
  background: #303030 !important;
}
</style>
