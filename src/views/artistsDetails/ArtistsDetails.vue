<template>
  <div>
    <Title :name="this.$route.params.name" :avatar="this.$route.params.avatar"></Title>
    <List :ting_uid="this.$route.params.ting_uid"></List>
  </div>
</template>

<script>
import Title from '../../components/details/Title'
import List from '../../components/details/List'

export default {
  data () {
    return {
    }
  },
  components:{
    Title,
    List
  }
}
</script>

<style lang="stylus" scoped>
</style>
