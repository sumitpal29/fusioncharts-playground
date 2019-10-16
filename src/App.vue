<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import '@/assets/main.scss';

html{
  background-color: $color3;
  color: #fff;
}

#app {
  margin-top: 60px;
  background-color: $color3;
  color: #fff;
}
</style>
