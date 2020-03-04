<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item to="home" icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item to="search" icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: ""
    };
  }
};
</script>

<style lang="less" scoped>
.van-grid {
  bottom: 0;
}
</style>
