<template>
  <div class="detail">
    <div class="today">
      今天:现在{{Nweather}}。最高气温{{HighTem}}。今晚{{weaNight}},最低气温{{LowTem}}。
    </div>
    <div class="line"></div>
    <div class="other">
      <table>
        <tr class="setTr">
          <td>日出</td>
          <td>日落</td>
        </tr>
        <tr class="comtr">
          <td>{{sunrise}}</td>
          <td>{{sunset}}</td>
        </tr>
        <tr class="setTr">
          <td>湿度</td>
          <td>体感温度</td>
        </tr>
        <tr class="comtr">
          <td>{{humidity}}</td>
          <td>{{temperature}}</td>
        </tr>
        <tr class="setTr">
          <td>气压</td>
          <td>能见度</td>
        </tr>
        <tr class="comtr">
          <td>{{pressure}}百帕</td>
          <td>{{visibility}}</td>
        </tr>

      </table>
    </div>
  </div>
</template>

<script>
import {getNow_Weather} from '@/api/index'
export default {
  name: "WeatherDetail",
  props:['location'],
  data(){
    return{
      temperature:'21℃',
      Nweather:'小雨',
      HighTem:'27℃',
      LowTem:'17℃',
      weaNight:'阴',
      sunrise:'04:59',
      sunset:'18:52',
      humidity:'93%',
      air:'53',
      airlevel:'良',
      pressure:'1050',
      visibility:'8km',
    }
  },
  async mounted(){
      let result=(await getNow_Weather(this.location))
      result=result.data
      console.log(result)
      this.temperature=result.data[0].tem
      this.Nweather=result.data[0].wea
      this.HighTem=result.data[0].tem1
      this.LowTem=result.data[0].tem2
      this.weaNight=result.data[0].wea_night
      this.sunrise=result.data[0].sunrise
      this.sunset=result.data[0].sunset
      this.humidity=result.data[0].humidity
      this.air=result.data[0].air
      this.airlevel=result.data[0].air_level
      this.pressure=result.data[0].pressure
      this.visibility=result.data[0].visibility
  }
}
</script>

<style lang="less" scoped>
.detail{
  font-family: -apple-system;
  .today{
    padding-left: 1rem;
    color: white;
    line-height: 1.5rem;
  }
  table{
    color: white;
    width: 100%;
    .setTr{

      font-size: small;
      opacity:80%;
      td{
        width: 50%;
        padding-left: 1rem;
      }
    }
    .comtr{
      font-weight: 500;
      font-size: larger;
      td{
        width: 50%;
        padding-left: 1rem;
        border-bottom: 1px solid white;
      }
    }

  }
  .line{
    float:right;
    width: 100%;
    height: 0.5px;
    margin-top: 0.5em;
    background:white;
    position: relative;
    text-align: center;
  }
}
</style>