<template>
  <div class="search">
    <div class="search-top">
      <span @click="close">关闭</span>
      <div class="input">
        <input type="text">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-search"></use>
        </svg>
      </div>
    </div>
    <ul>
      <li v-for="(list,i) in lists" :key="i">{{list}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'Search',
  data(){
    return {
      lists:['电影','电视','图书','同城','小组','音乐','阅读','游戏','应用','广播','FM','豆品']
    }
  },
  methods:{
    close(){
      this.$emit('closeSearch','隐藏搜索页面')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/scss.scss';
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.search{
  width:100%;
  height: 50rem;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  .search-top{
    width:17.5rem;
    margin: 0 auto;
    display: flex;
    border-bottom: 1px solid #f3f3f3;
    padding: .5rem 0;
    span{
      color:#42bd56;
      margin-right: .5rem;
      line-height: 1.7rem;
      font-size: .8rem;
    }
  .input{
    position: relative;
    flex-grow:1; 
    input{
      width: 100%;
      height: 1.5rem;
      border: 1px solid #f3f3f3;
      background: #f3f3f3
      }
    .icon{
      position: absolute;
      left:50%;
      top: 50%;
      transform: translate(-50%,-50%)
      }
    }
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    @for $i from 1 to 13{
      li:nth-child(13n+#{$i}){
        width: 33.33%;
        text-align: center;
        font-size: 1.2rem;
        color:nth($searchColor,$i);
        margin:20px 0;
      }
    }
  }
}
</style>

