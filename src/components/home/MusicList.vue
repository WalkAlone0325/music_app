<template>
  <div class="board panels">
    <div class="panel hotsongs on">
      <ul class="list">
        <router-link :to="{name: 'MusicPlay', params: {songid: item.song_id}}" tag="li" class="song url" v-for="(item,index) in currentData" :key="index">
          <div class="poster">
            <img :src="item.pic_big" :alt="item.title">
          </div>
          <div class="info">
            <div class="name ellipsis">
                {{ item.title }}
            </div>
            <div class="author">{{ item.artist_name }}</div>
          </div>
        </router-link>
      </ul>
      <div class="more-songs url">
          查看该榜单&gt;
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: ""
    }
  },
  data () {
    return {
      currentData: []
    }
  },
  mounted () {
    const httpUrl = this.HOST + this.url
    this.$axios.get(httpUrl)
      .then(res => {
        // console.log(res.data)
        this.currentData = res.data.song_list
      })
      .catch(error => {
        console.log(error);
      })
  },
}
</script>

<style lang="stylus" scoped>
@import "../../../public/css/variable.styl"
.board
  display flex
  height 400px
  .panel
    border-top 1px solid #eee
    position relative
    top -1px
    display block
    background: $color-highlight-background
    .list
      padding 10px
      padding-top 0
      li
        height 60px
        border-bottom 1px solid #eee
        padding-left 0
        display flex
        padding-top 10px
        .poster
          position relative
          width 45px
          margin-right 8px
          img
            width 47px
            box-sizing border-box
            border 1px solid #eee
        .info
          flex 1
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
          .name
            width 280px
            font-size 16px
            color $color-theme
            margin-top 10px
          .author
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            font-size 12px
            color $color-text
            margin-top 10px
    .more-songs
      color $color-text
      margin-top 9px
      font-size 12px
      text-align center
      height 32px
      line-height 32px
</style>
