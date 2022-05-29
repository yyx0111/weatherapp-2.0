<template>
  <div class="locationWea">
        <div class="header" >
            <img src="@/assets/系统返回.png" @click="$router.go(-1)"/>
        </div>
      <div class="content">
        <van-cell is-link @click="showPopup" >
          <v-btn style="display: flex;justify-content: space-between;width: 350px;background-color: lightblue;height: 100px;margin-left: 1rem;border-radius: 10px">
            <span>
            <p class="location">杭州市</p>
            <p class="description">我的位置</p>
            </span>
            <p class="tem">{{tem1}}</p>
          </v-btn>
        </van-cell>
        <van-popup v-model="show" style="width: 350px;height: 521px;">
          <div>
            <PopWeaView :location="location1"></PopWeaView>
          </div>
        </van-popup>
      </div>
      <div class="content">
        <van-cell is-link @click="showPopup2" >
          <v-btn style="display: flex;justify-content: space-between;width: 350px;background-color: lightblue;height: 100px;margin-left: 1rem;border-radius: 10px">
            <span>
            <p class="location">衢州市</p>
            <p class="description">{{time}}</p>
            </span>
            <p class="tem">{{tem2}}</p>
          </v-btn>
        </van-cell>
        <van-popup v-model="show2" style="width: 350px;height: 521px;">
          <div>
            <PopWeaView :location="location2"></PopWeaView>
          </div>
        </van-popup>
      </div>
      <div class="content">
        <van-cell is-link @click="showPopup3" >
          <v-btn style="display: flex;justify-content: space-between;width: 350px;background-color: lightblue;height: 100px;margin-left: 1rem;border-radius: 10px">
            <span>
            <p class="location">上海市</p>
            <p class="description">{{time}}</p>
            </span>
            <p class="tem">{{tem3}}</p>
          </v-btn>
        </van-cell>
        <van-popup v-model="show3" style="width: 350px;height: 521px;">
          <div>
            <PopWeaView :location="location3"></PopWeaView>
          </div>
        </van-popup>
      </div>
    <div class="content">
      <van-cell is-link @click="showPopup4" >
        <v-btn style="display: flex;justify-content: space-between;width: 350px;background-color: lightblue;height: 100px;margin-left: 1rem;border-radius: 10px">
            <span>
            <p class="location">北京市</p>
            <p class="description">{{time}}</p>
            </span>
          <p class="tem">{{tem4}}</p>
        </v-btn>
      </van-cell>
      <van-popup v-model="show4" style="width: 350px;height: 521px;">
        <div>
          <PopWeaView :location="location4"></PopWeaView>
        </div>
      </van-popup>
    </div>
    <div class="content">
      <van-cell is-link @click="showPopup5" >
        <v-btn style="display: flex;justify-content: space-between;width: 350px;background-color: lightblue;height: 100px;margin-left: 1rem;border-radius: 10px">
            <span>
            <p class="location">开化县</p>
            <p class="description">{{time}}</p>
            </span>
          <p class="tem">{{tem5}}</p>
        </v-btn>
      </van-cell>
      <van-popup v-model="show5" style="width: 350px;height: 521px;">
        <div>
          <PopWeaView :location="location5"></PopWeaView>
        </div>
      </van-popup>
    </div>
    <div class="content">
      <van-cell is-link @click="showPopup6" >
        <v-btn style="display: flex;justify-content: space-between;width: 350px;background-color: lightblue;height: 100px;margin-left: 1rem;border-radius: 10px">
            <span>
            <p class="location">西安市</p>
            <p class="description">{{time}}</p>
            </span>
          <p class="tem">{{tem6}}</p>
        </v-btn>
      </van-cell>
      <van-popup v-model="show6" style="width: 350px;height: 521px;">
        <div>
          <PopWeaView :location="location6"></PopWeaView>
        </div>
      </van-popup>
    </div>
  </div>
</template>

<script>
import WeatherDetail from "@/components/WeatherDetail";
import DetailWea from "@/views/DetailWea";
import PopWeaView from "@/views/PopWeaView";
import {getCity} from "@/api/index"
export default {
  name: "LocationWeaVIew",
  components: {PopWeaView, DetailWea, WeatherDetail},
  data(){
    return{
      reveal: false,
      location1:'杭州',
      tem1:'27℃',
      location2:'衢州',
      tem2:'23℃',
      location3:'上海',
      tem3:'22℃',
      location4:'北京',
      tem4:'22℃',
      location5:'开化',
      tem5:'20℃',
      location6:'西安',
      tem6:'22℃',
      time:'',
      show: false,
      show2:false,
      show3:false,
      show4: false,
      show5:false,
      show6:false,
    }
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    showPopup2() {
      this.show2 = true;
    },
    showPopup3() {
      this.show3 = true;
    },
    showPopup4() {
      this.show4 = true;
    },
    showPopup5() {
      this.show5 = true;
    },
    showPopup6() {
      this.show6 = true;
    },
  },
  async mounted() {
    let d = new Date();
    let hour= d.getHours();
    let minute= d.getMinutes();
    if (minute>=0&&minute<=9)
    {
      minute='0'+minute
    }
    this.time=hour+':'+minute;
    let result=await getCity("杭州")
    this.tem1=result.data.tem+"℃"
    result=await getCity("衢州")
    this.tem2=result.data.tem+"℃"
    result=await getCity("上海")
    this.tem3=result.data.tem+"℃"
    result=await getCity("北京")
    this.tem4=result.data.tem+"℃"
    result=await getCity("开化")
    this.tem5=result.data.tem+"℃"
    result=await getCity("西安")
    this.tem6=result.data.tem+"℃"
  }
}
</script>

<style lang="less" scoped>
.locationWea{
  width: 100%;
  .header{
    width: 100%;
    height: 10%;
    img{
      width: 10%;
      height: 10%;
      margin-left: 1rem;
      margin-top: 0.5rem;
    }
  }
  .content{
    margin-top: 2rem;
  }
    span{
      .location{
        font-size: large;
        font-family: 华文楷体;
      }
      .description{

        font-size: x-large;
        font-family: 华文楷体;
      }
    }
    .tem{
      margin-top: 1rem;
      font-size: xx-large;
      font-family: 华文楷体;
    }
  a{
    color: #1d1d1d;
    text-decoration:none ;
  }
}
</style>