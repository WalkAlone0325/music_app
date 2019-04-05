<template>
  <div class="index">
    <ul>
      <li>
        <router-link to="/home">
          <img src="../assets/logo-ea5.png" alt="">
        </router-link>
      </li>
      <li>
        <router-link class="nav" to="/artists">
          歌手
        </router-link>
      </li>
      <li>
        <router-link class="nav" to="/listcate">
          榜单
        </router-link>
      </li>
      <li>
        <router-link class="nav" to="/mine">
          我的
        </router-link>
      </li>
      <li>
        <router-link class="nav" to="/search">
          搜索
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  components: {
  },
};
</script>

<style lang="stylus" scoped>
@import "../../public/css/variable.styl"
.index
  width 100%
  height 100%
  ul
    display flex
    height 50px
    line-height 50px
    background $color-background
    li
      flex 1
      text-align center
      img
        width 26px
        height 26px
        margin-top 12px
      .nav
        font-size 16px
        color $color-theme
        &.router-link-active
          color $color-text !important

</style>
