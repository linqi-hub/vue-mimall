<template>
  <div id="id">
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage/index'
export default {
  name: "app",
  components: {},
  data() {
    return {
      res: {},
    };
  },
  mounted() {
    // storage.setItem('a', 1)
    this.axios.get("/mock/user/login.json").then((res) => {
      this.res = res;
    });
  },
};
</script>

<style>
@import url("./assets/scss/reset.scss");
</style>
