<template>
  <div class="index">
    <ul>
      <li>
        <router-link to="/home">
          <img src="../assets/logo-ea5.png" alt="">
        </router-link>
      </li>
      <li>
        <router-link to="/artists">
          歌手
        </router-link>
      </li>
      <li>
        <router-link to="/listcate">
          榜单
        </router-link>
      </li>
      <li>
        <router-link to="/mine">
          我的
        </router-link>
      </li>
      <li>
        <router-link to="/search">
          搜素
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  },
};
</script>

<style lang="stylus" scoped>
.index
  border-bottom 1px solid #fff
  ul
    display flex
    height 50px
    line-height 50px
    background #f9f9f9
    li
      flex 1
      text-align center
      img
        width 26px
        height 26px
        margin-top 12px
      a
        font-size 16px
        color #999

</style>
