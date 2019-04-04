<template>
  <div class="search">
    <div class="search-title">
      <input class="search-i" type="search" name placeholder="输入要搜索的歌手或歌名" v-model="searchContent">
      <input class="search-b" type="submit" @click.prevent="searchHandler" name="搜索">
    </div>
    <ul class="searchlist">
      <router-link
        :key="index"
        tag="li"
        :to="{name:'MusicPlay',params:{songid:item.songid}}"
        class="song"
        v-for="(item,index) in songlist"
      >
      <div class="single-line">
        <div class="name">{{ item.songname }}</div>
        <span class="txt">{{ item.artistname }}</span>
      </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchContent: "",
      songlist: [],
    };
  },

  methods: {
    searchHandler() {
      const searchURL = `${this.HOST}/v1/restserver/ting?method=baidu.ting.search.catalogSug&query=${this.searchContent}`
      this.$axios.get(searchURL)
        .then(res => {
          if (res.data.error_code == 22001) {
            console.log("搜索数据不存在")
            return
          }
          this.songlist = res.data.song
        })
        .catch(error => {
          console.log(error)
        });
    }
  }
};
</script>

<style lang="stylus" scoped>
.search
  .search-title
    padding 20px
    overflow hidden
    clear both
    .search-i
      width 80%
      height 40px
      line-height 40px
      font-size 16px
      background #eee
      border 1px solid #f1f2f3
      padding 15px 10px
      float left
      display inline-block
    .search-b
      float left
      margin-left 15px
      width 15%
      height 40px
  .searchlist
    .song
      display block
      width 100%
      height 50px
      padding 8px 17px
      // border-buttom 1px solid #fff
      background #eee
    .single-line
      border-bottom 1px solid #fff
      .name
        font-size 20px
        font-weight 700
        margin 10px
      .txt
        font-size 14px
        margin 0 0 10px 20px

</style>
