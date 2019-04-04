<template>
  <div class="more-list">
    <div class="wrapper">
      <h3>{{ this.$route.params.title }}</h3>
      <VuePullRefresh :on-refresh="onRefresh">
        <div tag="div" class="info url log" v-for="(item,index) in moreListData" :key="index">
          <div class="poster">
            <img :src="item.pic_big" :alt="item.title">
          </div>
          <div class="text-wrap">
            <div class="title">{{ item.title }}</div>
            <div class="author">{{ item.artist_name }}</div>
          </div>
        </div>
      </VuePullRefresh>
    </div>
  </div>
</template>

<script>
var VuePullRefresh = require('vue-pull-refresh');

export default {
  data () {
    return {
      moreListData: [],
      offset: 0,
    }
  },
  mounted () {
    const moreListUrl = this.HOST + `/v1/restserver/ting?method=baidu.ting.billboard.billList&type=${this.$route.params.musictype}&size=12&offset=0`;

    this.$axios.get(moreListUrl)
    .then(res => {
      this.moreListData = res.data.song_list
      // console.log(this.offset)
      this.offset = this.offset + 12
    })
    .catch(error => {
      console.log(error);
    })
  },
  methods: {
    // 下拉的时候触发函数
    onRefresh: function() {
      var that = this;
      const moreListUrl = `${this.HOST}/v1/restserver/ting?method=baidu.ting.billboard.billList&type=${this.$route.params.musictype}&size=12&offset=${this.offset}`
      return new Promise(function (resolve, reject) {
        setTimeout(() => {
          that.$axios.get(moreListUrl)
          .then(res => {
            console.log(res.data);
            that.offset >= res.data.billboard.billboard_songnum - 12 ? console.log("没数据了") : that.offset += 12,
            // that.moreListData = that.moreListData.concat(res.data.song_list)
            that.moreListData = res.data.song_list
            resolve();
          })
          .catch(error => {
            console.log(error);
          })
        })
      });
    }
  },
  components: {
    VuePullRefresh
  },
}
</script>

<style lang="stylus" scoped>
.wrapper
  padding-top 13px
  text-align center
  margin-bottom 10px
  background #fff
  clear both
  overflow hidden
  h3
    font-size 22px
    text-align left
    margin-left 17px
    margin-bottom 5px
  .info
    box-sizing border-box
    width 42%
    float left
    text-align center
    padding-left 17px
    display block
    text-align left
    margin 10px 8px
    position relative
    .poster
      img
    .text-wrap
      .title
        font-size 14px
        color #e8bf6a
        padding 5px
        text-align center
      .author
        font-size 12px
        color #a5c261
        text-align center

</style>
