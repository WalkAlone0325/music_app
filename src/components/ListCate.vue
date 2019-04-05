<template>
  <div class="listcate">
    <div  tag="div" class="cate-item">
      <router-link tag="div" :to="{name:'LicateDetails',params:{musictype:musicType}}" class="item-content">
        <div class="cate-post">
          <img :src="listCateData.billboard.pic_s192" :alt="listCateData.billboard.name">
        </div>
        <ul class="cate-hot">
          <li v-for="(item, index) in listCateData.song_list" :key="index">
            <span class="col-rank" :title="item.rank">{{ item.rank }}</span>
            <span class="col-title">{{ item.title }} - {{ item.author }}</span>
          </li>
        </ul>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listCateData: {
        song_list: [],
        billboard: {}
      }
    };
  },
  props: {
    musicType: {
      type: [String, Number],
      default: 1
    }
  },
  mounted() {
    const ListCateUrl =
      this.HOST +
      "/v1/restserver/ting?method=baidu.ting.billboard.billList&type=" +
      this.musicType +
      "&size=3&offset=0";
    this.$axios.get(ListCateUrl)
    .then(res => {
      this.listCateData = res.data
    })
    .catch(error => {
      console.log(error)
    });
  }
};
</script>

<style lang="stylus" scoped>
@import "../../public/css/variable.styl"

.listcate {
  padding: 0 17px 20px;
  font-size: 16px;
  background: $color-highlight-background;
}

.cate-item {
  border-bottom: 1px solid #eee;
  padding: 20px 0;
}

.item-content {
  display: flex;
}

.cate-post {
  position: relative;
  color: $color-text;
  font-size: 18px;
  height: 96px;
  width: 96px;
}

.cate-post img {
  width: 100%;
  height: 100%;
}

.cate-item .cate-hot {
  flex: 1;
  margin-left: 14px;
  padding: 6px 0;
}

.cate-item .cate-hot li {
  padding: 6px 0;
  height: 17px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: $color-text-ll;
  font: 15px 700;
}

.cate-item .cate-hot li .col-rank {
  color: #fa6644;
  font-family: Arial;
  font-weight: 700;
  font-style: italic;
}
.cate-item .cate-hot li .col-title {
  line-height: 17px;
  color: $color-theme-d;
  text-indent: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  width: 140px;
}
</style>
