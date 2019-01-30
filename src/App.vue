<template>
  <div id="app">
    <Header />
    <router-view class="view"/>
  </div>
</template>

<script>
import Header from './components/header'
export default {
  components:{
    Header
  },
  name: 'App'
}
</script>

<style lang='scss'>
  #app{
    .view{
      margin-top: 2.9rem;
    }
  }
</style>
