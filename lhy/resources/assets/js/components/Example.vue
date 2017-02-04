<template>
    <div class="container">
        <h1>{{message}}</h1>
    </div>
</template>

<script>
import vue-resource from 'vue-resource'
    export default {
        data(){
            return {
                message:'lllllllllll'
            }
        },
        created(){
            this.getData();
        }
        methods:{
            getData(){
                Vue.http.get().then(
                    function(){
                    },function(){
                    }
                )
            }
        }
    }
</script>
