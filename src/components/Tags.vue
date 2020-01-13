<template>
  <div
    class="tag"
    v-if="showTag"
  >
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="item in tagList"
        :key=item.index
        :to="{ path: item.path }"
      >{{ item.title }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import bus from '../common/bus';
export default {
  data() {
    return {
      tagList: []
    }
  },
  watch: {
    $route(to, from) {
      this.tagList = [];
      if (to.meta.fromIndex) {
        this.tagList.push({
          index: to.meta.fromIndex,
          path: to.meta.fromPath || this.$route.path,
          title: to.meta.fromTitle,
        })
      }
      this.tagList.push({
        index: to.path,
        path: to.path,
        title: to.meta.title
      });
    }
  },
  computed: {
    showTag() {
      return this.tagList.length > 0;
    }
  },
  mounted() {
    if (this.$route.meta.fromIndex) {
      this.tagList.push({
        index: this.$route.meta.fromIndex,
        path: this.$route.meta.fromPath || this.$route.path,
        title: this.$route.meta.fromTitle,
      })
    }
    this.tagList.push({
      index: this.$route.path,
      path: this.$route.path,
      title: this.$route.meta.title
    });
  }
}

</script>

<style lang="less" scoped>
.tag {
  position: relative;
  height: 30px;
  overflow: hidden;
  background: #fff;
  padding-right: 120px;
  .el-breadcrumb {
    top: 50%;
    position: relative;
    transform: translateY(-50%);
  }
}
</style>>
