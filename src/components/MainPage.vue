<template>
  <div class="main-page">
    <HeaderBar></HeaderBar>
    <BottomBar></BottomBar>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBar from "../components/HeaderBar";
import BottomBar from "../components/BottomBar";

export default {
  components: {
    BottomBar,
    HeaderBar
  }
};
</script>
