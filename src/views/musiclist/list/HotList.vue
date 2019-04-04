<template>
  <div class="page">
    <MusicList :url="url"></MusicList>
  </div>
</template>

<script>
import MusicList from '../../../components/home/MusicList'
export default {
  data () {
    return {
      url:"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size=5&offset=0"
    }
  },
  components: {
    MusicList,
  }
}
</script>

<style lang="stylus" scoped>
</style>
