// 把具有重复头部和尾部组件的放在这个页面，这样在其他页面就不需要重复引用
<template>
  <div>
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from "./../components/NavHeader";
import NavFooter from "./../components/NavFooter";
export default {
  name: "nav-home",
  components: {
    NavHeader,
    NavFooter,
  },
};
</script>

<style></style>
