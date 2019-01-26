<template>
  <div>
    <homeTab />
    <homeList />
  </div>
</template>

<script>

import homeTab from './homeTab'
import homeList from './homeList'
export default {
  components:{
    homeTab,homeList
  },
  name: 'Home',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
