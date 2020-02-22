<template>
  <div>
    <Horselamp></Horselamp>
    <Banner />
    <Kind />
    <Goods></Goods>

    <!-- <router-view/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Horselamp from '@/components/Horselamp.vue'
import Banner from '@/components/Banner.vue'
import Kind from '@/components/Kind.vue'
import Goods from '@/components/Goods.vue'
import API from '@/request/api'

export default {
  name: 'home',
  components: {
    Banner,
    Kind,
    Goods,
    Horselamp
  },
  data(){
    return{
      goodList:[],
      banners:[]
    }
  },
  mounted(){
    // this.$loading.show(true)
  },
  methods:{
    // search:function(){
    //   API.index({showBg:true}).then(res =>{
    //     console.log(res)
    //     this.goodList = res.data.numbers
    //     this.banners = res.data.banners
    //   }).catch(res =>{

    //   })
    // }
  }
}
</script>
