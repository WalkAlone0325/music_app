<template>
  <div class="banner">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide>
        <img src="../../assets/img/b1.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/img/b2.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/img/b3.jpg" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: true
      },
    }
  },
  components: {
    swiper,
    swiperSlide
  },
}
</script>

<style lang="stylus" scoped>
@import "../../../public/css/variable.styl"
.banner
  background-color $color-highlight-background
  margin 1px 0
  padding 10px
  img
    width 100%
    height 150px
</style>
