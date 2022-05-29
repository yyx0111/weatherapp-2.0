<template>
  <div class="DetailWea" >
    <img class="bg" src="@/assets/bg2.png"/>
<!--    <div class="header" >-->
<!--        <img src="@/assets/系统返回.png" @click="$router.go(-1)"/>-->
<!--    </div>-->
    <v-card
        class="mx-auto"
        max-width="360"
        style="margin-top: 5rem;margin-left: 1rem;"
    >
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="text-h5">
            {{location}}
          </v-list-item-title>
          <v-list-item-subtitle>{{date}} {{day}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-text>
        <v-row align="center">
          <v-col
              class="text-h2"
              cols="6"
          >
            {{wea}}
          </v-col>
          <v-col cols="6">
            <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sun.png"
                alt="Sunny image"
                width="92"
            ></v-img>
          </v-col>
        </v-row>
      </v-card-text>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-send</v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle>{{win_speed}}</v-list-item-subtitle>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-cloud-download</v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle>30%</v-list-item-subtitle>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-weather-sunset-up</v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle>{{ sunrise}}</v-list-item-subtitle>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-weather-sunset-down</v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle>{{ sunset}}</v-list-item-subtitle>
      </v-list-item>

      <v-list-item>
        <v-list-item-subtitle>最高气温</v-list-item-subtitle>
        <v-list-item-subtitle>{{ tem1}}</v-list-item-subtitle>
        <v-list-item-subtitle>最低气温</v-list-item-subtitle>
        <v-list-item-subtitle>{{ tem2}}</v-list-item-subtitle>
      </v-list-item>
      <div class="Tdiv" style=" width: 100%;
      height: 8rem;
      display: flex;
      margin-top: 2rem;
      flex-wrap: nowrap;
      overflow: hidden;
      overflow-x: auto;">
        <div class="time"  v-for="(item,i) in hours" :key="i" style="        width: 100%;
        margin-left: 1.5rem;">
          <p style=" margin-top: 0.7rem;
          text-align: center;
          color: #444141;">{{item.hours}}</p>
          <p style=" margin-top: 0.7rem;
          text-align: center;
          color: #444141;">{{item.wea}}</p>
          <p style=" margin-top: 0.7rem;
          text-align: center;
          color: #444141;">{{item.tem}}℃</p>
        </div>
      </div>
      <v-divider></v-divider>

      <v-card-actions>
        <v-btn text @click="$router.go(-1)">
          返回
        </v-btn>
      </v-card-actions>
    </v-card>

  </div>
</template>

<script>
import {getNow_Weather} from '@/api/index'
import Weather from "@/components/Weather";
export default {
  name: "DetailWea",
  components: {Weather},
  data(){
    return{
      date:'2022-04-09',
      location:'',
      day:'星期六',
      win_speed:'3-4级',
      wea:'晴转多云',
      tem1:'28℃',
      tem2:'17℃',
      sunrise:'04:59',
      sunset:'18:52',
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
  async mounted(){
      const id= this.$route.query.id
      this.location=this.$route.query.location
      console.log(id)
      console.log(this.location)
      let result =await getNow_Weather(this.location)
      result=result.data
      result=result.data[id]
      this.date=result.date
      this.day=result.day.slice(4,7)
      this.wea=result.wea
      this.tem1=result.tem1
      this.tem2=result.tem2
      this.sunrise=result.sunrise
      this.sunset=result.sunset
      this.hours=result.hours
      this.win_speed=result.win_speed
      console.log(result)
    }

}
</script>

<style lang="less" scoped>
.DetailWea{
  width: 100%;
  height: 100%;
  position: fixed;
  .bg{
    width: 100%;
    height: 100%;
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
  }
    .Tdiv {
      width: 100%;
      height: 8rem;
      display: flex;
      margin-top: 2rem;
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


}
</style>