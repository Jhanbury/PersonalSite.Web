<template>
    <div>
        <v-icon class="social-icon m-2" size="xxx-large" v-for="link in socialLinks" v-bind:key="link.id" @click="openAccount(link.accountUrl)" :color="link.platform | socialIconColor" >{{link.platform | socialIcon}}</v-icon>
    </div>
</template>

<script>
export default {
    computed:{
        socialLinks(){
            return this.$store.state.user.socialLinks;
        }
    },
    methods: {
        refreshSocialLinks(){
            this.$store.dispatch('user/getSocialLinks',1)
        },
        openAccount(url){
            window.open(url)
        }
    },
    mounted: function(){
        this.refreshSocialLinks()
    },
    filters :{
        socialIcon : function(value) {
            switch (value) {
                case 'Github':
                    return 'mdi-github-circle'                    
                    break;
                case 'Twitter':
                    return 'mdi-twitter'                    
                    break;
                case 'Stack Overflow':
                    return 'mdi-stack-overflow'
                case 'Linkedin':
                    return 'mdi-linkedin-box' 
                case 'Dev Community':
                    return 'mdi-dev-to'                      
                default:
                    return 'mdi-work'
                    break;
            }
        },
            socialIconColor : function(value) {
                switch (value) {
                    case 'Github':
                        return 'white'                    
                        break;
                    case 'Twitter':
                        return 'blue'                    
                        break;
                    case 'Stack Overflow':
                        return 'orange'
                    case 'Linkedin':
                        return '#2867B2' 
                    case 'Dev Community':
                        return 'white'                      
                    default:
                        return 'mdi-work'
                        break;
                }
        }
        
    }

}
</script>

<style>
    .social-icon:hover {
            transform: scale(1.25);
        }
</style>