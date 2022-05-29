<template>
  <div class="weather">
    <div class="location">{{location}}</div>
    <div class="temperature">{{temperature}}</div>
    <div class="Nweather">{{Nweather}}</div>
    <div class="HLTem">最高{{HighTem}} 最低{{LowTem}}</div>
    <div class="line"></div>
    <div class="Tdiv">
      <div class="time"  v-for="(item,i) in hours" :key="i">
        <p>{{item.hours}}</p>
        <p>{{item.wea}}</p>
        <p>{{item.tem}}℃</p>
      </div>
    </div>
    <div class="line1"></div>
  </div>
</template>

<script>
import {getNow_Weather} from "@/api";

export default {
  props:['location'],
  name: "Weather",
  components: {
  },
  data(){
    return{
      temperature:'21℃',
      Nweather:'小雨',
      HighTem:'27℃',
      LowTem:'17℃',
      hours:[
        {
          "hours": "08时",
          "wea": "小雨",
          "wea_img": "yu",
          "tem": "19",
          "win": "东风",
          "win_speed": "3-4级"
        },
        {
          "hours": "09时",
          "wea": "阴",
          "wea_img": "yin",
          "tem": "19",
          "win": "东风",
          "win_speed": "4-5级"
        },
        {
          "hours": "10时",
          "wea": "阴",
          "wea_img": "yin",
          "tem": "20",
          "win": "东风",
          "win_speed": "4-5级"
        },
        {
          "hours": "11时",
          "wea": "阴",
          "wea_img": "yin",
          "tem": "20",
          "win": "东风",
          "win_speed": "5-6级"
        },
        {
          "hours": "12时",
          "wea": "阴",
          "wea_img": "yin",
          "tem": "20",
          "win": "东风",
          "win_speed": "5-6级"
        },
        {
          "hours": "13时",
          "wea": "阴",
          "wea_img": "yin",
          "tem": "21",
          "win": "东风",
          "win_speed": "5-6级"
        },
        {
          "hours": "14时",
          "wea": "阴",
          "wea_img": "yin",
          "tem": "22",
          "win": "东北风",
          "win_speed": "5-6级"
        },
        {
          "hours": "15时",
          "wea": "阴",
          "wea_img": "yin",
          "tem": "22",
          "win": "东风",
          "win_speed": "5-6级"
        },
        {
          "hours": "16时",
          "wea": "阴",
          "wea_img": "yin",
          "tem": "23",
          "win": "东风",
          "win_speed": "5-6级"
        },
        {
          "hours": "17时",
          "wea": "阴",
          "wea_img": "yin",
          "tem": "24",
          "win": "东风",
          "win_speed": "5-6级"
        },
        {
          "hours": "18时",
          "wea": "阴",
          "wea_img": "yin",
          "tem": "22",
          "win": "东风",
          "win_speed": "5-6级"
        },
        {
          "hours": "19时",
          "wea": "阴",
          "wea_img": "yin",
          "tem": "21",
          "win": "东风",
          "win_speed": "5-6级"
        },
        {
          "hours": "20时",
          "wea": "阴",
          "wea_img": "yin",
          "tem": "19",
          "win": "东风",
          "win_speed": "5-6级"
        },
        {
          "hours": "21时",
          "wea": "多云",
          "wea_img": "yun",
          "tem": "19",
          "win": "东风",
          "win_speed": "4-5级"
        },
        {
          "hours": "22时",
          "wea": "多云",
          "wea_img": "yun",
          "tem": "19",
          "win": "东风",
          "win_speed": "4-5级"
        },
        {
          "hours": "23时",
          "wea": "多云",
          "wea_img": "yun",
          "tem": "19",
          "win": "东风",
          "win_speed": "3-4级"
        },
        {
          "hours": "00时",
          "wea": "多云",
          "wea_img": "yun",
          "tem": "18",
          "win": "东风",
          "win_speed": "3-4级"
        },
        {
          "hours": "01时",
          "wea": "多云",
          "wea_img": "yun",
          "tem": "18",
          "win": "东风",
          "win_speed": "3-4级"
        },
        {
          "hours": "02时",
          "wea": "晴",
          "wea_img": "qing",
          "tem": "18",
          "win": "东风",
          "win_speed": "3-4级"
        },
        {
          "hours": "03时",
          "wea": "多云",
          "wea_img": "yun",
          "tem": "18",
          "win": "东风",
          "win_speed": "3-4级"
        },
        {
          "hours": "04时",
          "wea": "多云",
          "wea_img": "yun",
          "tem": "17",
          "win": "东风",
          "win_speed": "3-4级"
        },
        {
          "hours": "05时",
          "wea": "多云",
          "wea_img": "yun",
          "tem": "17",
          "win": "东风",
          "win_speed": "3-4级"
        },
        {
          "hours": "06时",
          "wea": "多云",
          "wea_img": "yun",
          "tem": "18",
          "win": "东风",
          "win_speed": "3-4级"
        },
        {
          "hours": "07时",
          "wea": "多云",
          "wea_img": "yun",
          "tem": "19",
          "win": "东风",
          "win_speed": "3-4级"
        }
      ],
    }
  },
  async mounted (){
    console.log(this.location)
    let result=(await getNow_Weather(this.location))
    result=result.data
    this.temperature=result.data[0].tem
    this.Nweather=result.data[0].wea
    this.HighTem=result.data[0].tem1
    this.LowTem=result.data[0].tem2
    this.hours=result.data[0].hours
    this.futureWea=result.data.slice(1)
    console.log(this.futureWea)
    console.log(this.hours)
    console.log(result)
  },
}
</script>

<style lang="less" scoped>
.weather {
  width: 100%;
  height: 39%;
  .location {
    height: 40px;
    text-align: center;
    font-size: 30px;
    font-weight: 900;
    font-family: 华文楷体;
    color: white;
  }

  .temperature {
    height: 117px;
    text-align: center;
    font-size: 90px;
    font-weight: 800;
    font-family: 华文楷体;
    color: white;
  }

  .Nweather {
    height: 40px;
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    font-family: 华文楷体;
    color: white;
  }

  .HLTem {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    font-family: 华文楷体;
    color: white;
  }

  .line {
    float: right;
    width: 100%;
    height: 0.5px;
    margin-top: 1em;
    background: white;
    position: relative;
    text-align: center;
  }
  .Tdiv {
    width: 100%;
    height: 8rem;
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
    overflow-x: auto;
    .time {
      width: 100%;
      margin-left: 1.5rem;
      p {
        margin-top: 0.7rem;
        text-align: center;
        color: white;
      }
    }
  }
  .line1{
    float:right;
    width: 100%;
    height: 0.5px;
    margin-top: -1rem;
    background:white;
    position: relative;
    text-align: center;
  }
}
</style>