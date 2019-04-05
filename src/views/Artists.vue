<template>
  <div class="artists">
    <ul class="list">
      <router-link tag="li" :to="{name: 'ArtistsDetails', params: {avatar: item.avatar_s500, name: item.name, ting_uid: item.ting_uid}}" :key="index" class="artist" v-for="(item, index) in artistsData">
        <div class="pic">
          <img :alt="item.name" :src="item.avatar_s500">
        </div>
        <div class="info">
          <div>{{ item.name }}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      artistsArr: ["2517","7994","1091","45561","2507","245815","1077","1204","1117","82366"],
      artistsData:[]
    };
  },

  mounted() {
    for(var i =0; i < this.artistsArr.length; i++){
    const artistsURL = `${this.HOST}/v1/restserver/ting?method=baidu.ting.artist.getInfo&tinguid=${this.artistsArr[i]}`

      this.$axios.get(artistsURL)
      .then(res => {
        this.artistsData.push({
          avatar_s500:res.data.avatar_s500,
          name:res.data.name,
          ting_uid:res.data.ting_uid
        })
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>\
@import "../../public/css/variable.styl"
.artists
  padding 0 17px
  background $color-highlight-background
  .list
    li
      padding-left 10px
      min-height 70px
      display flex
      align-items center
      margin-top 1px
      border-bottom 1px solid $color-text
      .pic
        margin-right 15px
        img
          width 54px
          height 54px
          border-radius 27px
          overflow hidden
      .info
        display flex
        flex-direction column
        align-items flex-start
        justify-content flex-start
        font-size 16px

</style>
