<template>
  <div class="movie-home">
    <hotMovie />
    <newMovie />
    <freeMovie />
    <findMovie />
  </div>
</template>
<script>
import hotMovie from './hotMovie'
import freeMovie from './freeMovie'
import findMovie from './findMovie'
import newMovie from './newMovie'
export default {
  components:{
    hotMovie,
    freeMovie,
    findMovie,
    newMovie
  },
  name:'Movie'
}
</script>
<style lang="scss" scoped>
 @import '@/assets/css/scss.scss';
 .movie-home{
   width: $width;
   margin: $rem/2 auto 0;
 }
</style>


