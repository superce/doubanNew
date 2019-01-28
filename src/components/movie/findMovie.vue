<template>
  <div>
    <ul>
      <li></li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name:'findMovie',
  data(){
    return {
      findMovie:''
    }
  },
  created(){
    this.findMovies()
  },
  methods:{
    findMovies(){
      let url = '/api/movie/top250'
      axios.get(url,{
        params:{
          count:10
        }
      }).then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>