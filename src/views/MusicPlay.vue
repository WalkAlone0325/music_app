<template>
  <div class="play">
    <div class="header">
      <div class="title">
        <router-link to="/">
          <i class="iconfont icon-shouye left"></i>
        </router-link>
        <div class="music-info">
          <p>{{ currentUrl.songinfo.title }}</p>
          <p class="author">{{ currentUrl.songinfo.author }}</p>
        </div>
        <router-link to="/search">
          <i class="iconfont icon-sousuo right"></i>
        </router-link>
      </div>
    </div>

    <div class="song-info">
      <div class="song-info-img">
        <!-- {{this.$route.params.songid}} -->
        <img :src="currentUrl.songinfo.pic_big">
        <LRC
          :durationTime="durationTime"
          :currentTime="currentTime"
          :songid="this.$route.params.songid"
        ></LRC>
      </div>
      <div class="iconbox">
        <i class="iconfont icon-shoucang2 left" :class="{color}" @click="changcolor"></i>
        <i class="box"></i>
        <i class="iconfont icon-xiazai right"></i>
      </div>
    </div>
    <div class="song">
      <audio class="audio" ref="player" :src="currentUrl.bitrate.show_link" controls autoplay></audio>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import "../assets/font/iconfont.css";
// import LRC from '../components/LRC'
// 异步引入歌词
const LRC = Vue.component("lrc", resolve =>
  require(["../components/LRC"], resolve)
);

export default {
  data() {
    return {
      currentUrl: {
        songinfo: {
          title: "",
          author: ""
        },
        bitrate: {
          show_link: ""
        }
      },
      durationTime: 0,
      currentTime: 0,
      color: false
    };
  },

  mounted() {
    const playUrl = `${
      this.HOST
    }/v1/restserver/ting?method=baidu.ting.song.play&songid=${
      this.$route.params.songid
    }`;
    this.$axios
      .get(playUrl)
      .then(res => {
        // console.log(res.data)
        // console.log(this.$route.params.songid)
        this.currentUrl = res.data;
      })
      .catch(error => {
        console.log(error);
      });

    this.addEventListeners();
  },

  beforeDestroyed() {
    this.removeEventListeners();
  },

  methods: {
    addEventListeners() {
      this.$refs.player.addEventListener("timeupdate", this._currentTime),
        this.$refs.player.addEventListener("canplay", this._durationTime);
    },
    removeEventListeners() {
      this.$refs.player.removeEventListener("timeupdate", this._currentTime);
      this.$refs.player.removeEventListener("canplay", this._durationTime);
    },
    _currentTime() {
      this.currentTime = this.$refs.player.currentTime;
      // currentTime是audio标签提供的获取当前播放时间的方法
    },
    _durationTime() {
      this.durationTime = this.$refs.player.duration;
      // duration是audio标签提供的获得歌曲播放整体时间的方法
    },
    changcolor() {
      this.color = !this.color;
    }
  },

  components: {
    LRC
  }
};
</script>

<style lang="stylus" scoped>
@import '../../public/css/variable.styl';

.play
  background: $color-highlight-background;
  height: 100%;
  overflow: hidden;
  .header
    padding 15px
    .title
      display flex
      text-align center
      a>.left
        font-size 30px
        color $color-theme
      .music-info
        flex 1
        margin-top 20px
        font-size 20px
        .author
          font-size 14px
          margin-top 10px
          color $color-text
      a>.right
        font-size 30px
        color $color-theme
  .song-info
    padding 15px
    .song-info-img
      text-align center
      img
        width 50%
        border-radius 10px
        box-shadow 0 0 10px 0 rgba(50, 50, 50, .31)
    .iconbox
      display flex
      margin-top 30px
      .left
        font-size 30px
      .color
        color red
      .box
        flex 1
      .right
        font-size 30px
  .song
    width 100%
    text-align center
    .audio
      width 80%
  .router-link-active
    color $color-lrc

</style>
