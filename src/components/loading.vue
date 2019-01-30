<template>
  <div class="load">
    <div class="loading">
      <img src="../assets/images/loading_green.gif" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name:'Loading'
}
</script>
<style lang="scss" scoped>
.load{
  width: 100%;height: 33.35rem;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  .loading{
    width:2rem;height: 2rem;margin: 0 auto;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    img{width: 100%;}
  }
}
</style>

