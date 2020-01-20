<template>
<div class="d-flex justify-start">
    <v-icon small class="pr-1">mdi-eye-outline</v-icon><small> {{views | viewFilter}}</small><small class="pr-2 pl-2">  •  </small><small>{{ $dateFns.format(publishDate, 'MMM dd, yyyy')}}</small>
</div>
  
</template>

<script>
export default {
    props:{
        views: Number,
        publishDate: String
    },
    filters: {
        viewFilter: function(views){
            var unknown = 0;
            if(views === undefined)
                return unknown;
            if(views === null)
                return unknown;
            return views.toLocaleString()
        }
    }

}
</script>

<style>

</style>