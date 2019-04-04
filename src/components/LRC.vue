<template>
  <div class="lrcContainer">
    <div class="lrc" ref="lrc">
      {{ getAllKey }}
      <!-- <p v-show="(parseInt(currentTime) >= keyArr[index - 1]) && (parseInt(currentTime) < keyArr[index + 2])" class="lrc-p" v-for="(item, key, index) in lrcData" :key="index">{{item}}{{getAllKey}}</p> -->
      <p class="lrc-p"
        :class="{active: parseInt(currentTime) >= keyArr[index] && parseInt(currentTime) < keyArr[index+1]}"
        v-for=" (item,key,index) in lrcData"
        :key="index">
        {{ item }} {{ srcollLrc(key, index) }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    songid: {
      type: [String, Number],
      default: ""
    },
    durationTime: {
      type: [String, Number],
      default: 0
    },
    currentTime: {
      type: [String, Number],
      default: 0
    }
  },

  data() {
    return {
      lrc: {},
      lrcData: {},
      keyArr: []
    };
  },

  mounted() {
    const LRCUrl = `${
      this.HOST
    }/v1/restserver/ting?method=baidu.ting.song.lry&songid=${this.songid}`;
    this.$axios
      .get(LRCUrl)
      .then(res => {
        this.lrc = res.data;
        // 数据格式处理
        var lyrics = res.data.lrcContent.split("\n");
        var lrcObj = {};

        for (var i = 0; i < lyrics.length; i++) {
          var lyric = decodeURIComponent(lyrics[i]);
          var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
          var timeRegExpArr = lyric.match(timeReg);

          if (!timeRegExpArr) continue;

          var clause = lyric.replace(timeReg, "");

          for (var k = 0, h = timeRegExpArr.length; k < h; k++) {
            var t = timeRegExpArr[k]

            var min = Number(String(t.match(/\[\d*/i)).slice(1))
            var sec = Number(String(t.match(/\:\d*/i)).slice(1))

            var time = min * 60 + sec

            lrcObj[time] = clause
          }
        }
        this.lrcData = lrcObj;
      })
      .catch(error => {
        console.log(error);
      });
  },

  computed: {
    getAllKey() {
      for (var i in this.lrcData) {
        this.keyArr.push(i);

        // console.log(this.keyArr)
      }
    }
  },

  methods: {
    srcollLrc(key, index) {
      const lrcDiv = this.$refs.lrc
      if (
        key < this.currentTime &&
        key > this.currentTime - (this.keyArr[index + 1] - this.keyArr[index])
      ) {
        lrcDiv.style.top = -((index - 2) * 30) + "px"
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.lrcContainer
  width 100%
  height 150px
  overflow hidden
  position relative
  .lrc
    width 100%
    position absolute
    top 0
    .lrc-p
      height 30px
      line-height 30px
      &.active
        color red !important

</style>
