<template>
  <div id="app">
    <Header />
    <router-view/>
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

<style>

</style>
