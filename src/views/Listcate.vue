<template>
  <div>
    <ListCate v-for="(item, index) in musicTypeJSON" :musicType="item" :key="index"></ListCate>
  </div>
</template>

<script>
import MusicType from '../assets/data/musictype.json'
import ListCate from '../components/ListCate'

export default {
  data() {
    return {
      musicTypeJSON: []
    };
  },
  components: {
    ListCate
  },
  created() {
    this.musicTypeJSON = MusicType.currentType
  }
};
</script>

<style lang="stylus" scoped>
</style>
