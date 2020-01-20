<template>
  <div>
    <form action="/">
      <van-search v-model="value" placeholder="请输入搜索关键词" show-action />
    </form>

    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list>

    <BottomBar></BottomBar>
  </div>
</template>

<script>
import BottomBar from "../components/BottomBar";

export default {
  components: {
    BottomBar
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },

  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  }
};
</script>
