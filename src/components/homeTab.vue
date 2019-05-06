<template>
  <div class="home-tab">
    <div class="tabs">
      <ul>
        <li v-for="(t,i) in tabs" :key="i" @click='toPage(i)'>
          {{ t }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name:'homeTab',
  data(){
    return{
      tabs:['影院热映','欧美新碟榜','注册帐号','登录豆瓣']
    }
  },
  methods:{
    toPage(i){
      if(i == 0){
        this.$router.push({
          path:'/newmovie'
        })
      }
      if(i == 1){
        this.$router.push({
          path:'/m'
        })
      }
      if(i == 3){
        this.$router.push({
          name:'book'
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../assets/css/scss.scss';
  .home-tab{
    width: $width;
    margin: 0 auto;
    ul{
      display: $flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 1rem;
      li{
        width: 48%;
        flex-grow: 0;
        line-height: 2.6rem;
        background: $background;
        text-align: center;
        margin: 1%;
        border-radius: 4px;
        color:$color;
        font-size: .8rem;
      }
    }
  }
</style>


