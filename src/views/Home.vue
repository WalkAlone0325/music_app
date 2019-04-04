<template>
  <div class="home">
    <TodyRecommend title="今日推荐" type="24"></TodyRecommend>
    <NewsMusic></NewsMusic>
    <SwiperBanner></SwiperBanner>
    <ListNav></ListNav>
    <TodyRecommend title="热门歌单" type="1"></TodyRecommend>
  </div>
</template>

<script>
import TodyRecommend from '../components/home/TodyRecommend.vue';
import NewsMusic from '../components/home/NewsMusic.vue';
import SwiperBanner from '../components/home/SwiperBanner.vue';
import ListNav from './musiclist/ListNav.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    TodyRecommend,
    NewsMusic,
    SwiperBanner,
    ListNav,
  },
};
</script>

<style lang='stylus' scoped>
.home
  background #eee
</style>
