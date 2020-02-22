<template>
  <div class="bannar">
    <cube-slide ref="slide"  @change="changePage">
      <cube-slide-item v-for="(item, index) in banners" :key="index" @click.native="clickHandler(item, index)">
        <a :href="item.linkurl">
          <img :src="item.imgurl">
        </a>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      banners:[{
        imgurl:require('./../assets/img/banner/1.jpg'),
        linkurl:'https://m.jd.com'
      },
      {
        imgurl:require('./../assets/img/banner/2.jpg'),
        linkurl:'https://m.jd.com'
      }]
    }
  },
  methods: {
    changePage (current) {
      // console.log('当前轮播图序号为:' + current)
    },
    clickHandler (item, index) {
      // console.log(item, index)
    }
  }
}
</script>

<style scoped lang="stylus">
.cube-slide-item > a > img
  width 100%
  height 100%
  padding-top 80px
</style>
