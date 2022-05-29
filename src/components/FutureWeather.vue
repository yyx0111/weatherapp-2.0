<template>
  <div class="futureWeather">
    <div class="weather" v-for="(item,i) in futureWea" :key="i">
      <router-link  :to="{path:'/detail',query:{id:i+1,location:location}}">
            <span>
              <p class="p1">{{item.week}}</p>
              <p class="p2">{{item.wea}}</p>
              <p class="p3">{{item.tem1}}</p>
              <p class="p4">{{item.tem2}}</p>
            </span>
      </router-link>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
import {getNow_Weather} from "@/api";

export default {
  props:['location'],
  name: "FutureWeather",
  data(){
    return{
      futureWea:[{"week":"星期日","wea":"阴","tem1":"27℃","tem2":"17℃"},
        {"week":"星期一","wea":"阴","tem1":"27℃","tem2":"17℃"},
        {"week":"星期二","wea":"阴","tem1":"27℃","tem2":"17℃"},
        {"week":"星期三","wea":"阴","tem1":"27℃","tem2":"17℃"},
        {"week":"星期四","wea":"阴","tem1":"27℃","tem2":"17℃"},
        {"week":"星期五","wea":"阴","tem1":"27℃","tem2":"17℃"},],
    }
  },
  async mounted (){
    console.log(this.location)
    let result=(await getNow_Weather(this.location))
    result=result.data
    this.futureWea=result.data.slice(1)
  },

}
</script>

<style lang="less" scoped>
.futureWeather{
  width: 100%;
  .weather{
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
    font-family: -apple-system;
    span{
      width: 100%;
      display: flex;
      //align-items: center;
      justify-content: space-between;
      color: white;
      margin-bottom: 1rem;
      .p1{
        width: 15%;
        height: 100%;
      }
      .p2{
        width: 40%;
        height: 100%;
        text-align: center;
      }
      .p3{
        width: 12%;
        height: 100%;
      }
      .p4{
        width: 12%;
        height: 100%;
      }
    }
  }
  .line{
    float:right;
    width: 100%;
    height: 0.5px;
    margin-top: -0.8rem;
    background:white;
    position: relative;
    text-align: center;
  }
  a{
    color: #1d1d1d;
    text-decoration:none ;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }


}
</style>