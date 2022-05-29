<template>
  <v-card>
    <v-toolbar style="background-color:#E3F2FD;font-size: larger;font-family: 华文楷体">
      {{location}}
    </v-toolbar>
    <v-card-text>
      <v-list-item>
        {{wea}}
      </v-list-item>
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
    </v-card-text>

    <v-sheet
        class="v-sheet--offset mx-auto"
        color="cyan"
        elevation="12"
        max-width="calc(100% - 32px)"
    >
      <v-sparkline
          :labels="labels"
          :value="value"
          color="white"
          line-width="2"
          padding="16"
      ></v-sparkline>
    </v-sheet>

    <v-card-text class="pt-0" style="margin-top: -2rem">
      <v-divider class="my-2"></v-divider>
      <v-icon
          class="mr-2"
          small
      >
        mdi-clock
      </v-icon>
      <span class="text-caption grey--text font-weight-light">一天气温图表</span>
    </v-card-text>
  </v-card>
</template>

<script>
import {getNow_Weather} from "@/api";

export default {
  name: "PopWeaView",
  props:['location'],
  data(){
    return{
      day:'星期六',
      win_speed:'3-4级',
      wea:'晴转多云',
      tem1:'28℃',
      tem2:'17℃',
      sunrise:'04:59',
      sunset:'18:52',
      labels: [
        '1am',
        '3am',
        '6am',
        '9am',
        '12pm',
        '3pm',
        '6pm',
        '9pm',
      ],
      value: [
        17,
        18,
        20,
        22,
        24,
        26,
        22,
        20,
      ],
    }
  },
  async mounted(){
    let result =await getNow_Weather(this.location)
    console.log(result)
    result=result.data
    result=result.data[0]
    this.date=result.date
    this.day=result.day.slice(4,7)
    this.wea=result.wea
    this.tem1=result.tem1
    this.tem2=result.tem2
    this.sunrise=result.sunrise
    this.sunset=result.sunset
    this.win_speed=result.win_speed
    this.value[0]=result.hours[17].tem
    this.value[1]=result.hours[19].tem
    this.value[2]=result.hours[22].tem
    this.value[3]=result.hours[1].tem
    this.value[4]=result.hours[4].tem
    this.value[5]=result.hours[7].tem
    this.value[6]=result.hours[10].tem
    this.value[7]=result.hours[13].tem
  }
}
</script>

<style lang="less" scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>