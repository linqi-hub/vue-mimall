<template>
  <div id="id">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from './storage/index'
export default {
  name: 'app',
  components: {},
  data() {
    return {}
  },
  mounted() {
    storage.setItem('a', 1)
  },
}
</script>

<style>
@import url('./assets/scss/reset.scss');
</style>
