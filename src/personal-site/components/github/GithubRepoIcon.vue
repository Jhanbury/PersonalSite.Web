<template>
    <div  @click="openRepoLink(repoLink)"><i style="font-size: 40px;" class="devicon-github-plain"/></div>
  <!-- <v-icon>mdi-github</v-icon> -->
</template>

<script>
export default {
    props:{
        repoLink: String
    },
    methods:{
        openRepoLink(link){
            window.open(link)
        }
    }

}
</script>

<style>

</style>