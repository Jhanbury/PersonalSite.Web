<template>
  <b-card
    bg-variant="default"
    @click="openVideo(video.url)"    
    :title="video.title"    
    :img-src="video.thumbnailUrl"
    img-alt="Image"    
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"  >
    <b-card-sub-title>
        <small class="text-muted">Views: {{video.viewCount}}</small>
    </b-card-sub-title>
    
    <template v-slot:footer>
        <small class="text-muted">{{video.publishDate}}</small>
    </template>
    
  </b-card>
</template>

<script>
export default {
    props: {
        video: Object
    },
    methods: {
        openVideo(url) {
        window.open(url);
        }
    },
}
</script>

<style>
    .card-body{
        background: #303030 !important;
    }
    .card-footer{
        background: #303030 !important;
    }
</style>