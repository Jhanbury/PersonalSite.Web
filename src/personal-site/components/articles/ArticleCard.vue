<template>
  <b-card
    :title="article.title"
    :sub-title="article.siteName"
    :img-src="article.imageUrl"
    @click="openArticle(article.url)"
    bg-variant="dark"
    img-top
    tag="article"
    class="pa-0 mb-2"
    style="max-width:30em"
  >
    <template v-slot:footer>
      <v-container class="py-0">
        <v-row>
          <small>{{
            $dateFns.format(new Date(article.publishDate), 'd MMMM')
          }}</small>
          <v-spacer />
          <small> {{ article.readLength }} min read </small>
        </v-row>
      </v-container>
    </template>
  </b-card>
</template>

<script>
export default {
  props: {
    article: { type: Object, required: true }
  },
  methods: {
    openArticle(url) {
      window.open(url)
    }
  }
}
</script>

<style>
</style>
