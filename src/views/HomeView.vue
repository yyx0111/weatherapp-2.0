<template>
  <v-app>
    <v-card class="overflow-hidden">
      <v-app-bar
          absolute
          dark
          shrink-on-scroll
          src="@/assets/bg.jpg"
          scroll-target="#scrolling-techniques-2"
          height="29px"
      >
        <template v-slot:img="{ props }">
          <v-img
              v-bind="props"
          ></v-img>
        </template>

        <v-app-bar-nav-icon @click="showPopup"></v-app-bar-nav-icon>


        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon  @click="$router.push('/search')">mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon @click="$router.push('/locationwea')">mdi-dots-vertical</v-icon>
        </v-btn>
        <template v-slot:extension>
          <v-tabs v-model="tab"
              align-with-title>
            <v-tab>杭州</v-tab>
            <v-tab>衢州</v-tab>
            <v-tab>上海</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
      <v-sheet
          id="scrolling-techniques-2"
          class="overflow-y-auto"
          max-height="844"
      >
        <v-container style="height: 920px;padding: 0">
          <v-tabs-items v-model="tab">
           <v-tab-item>
             <div class="bg" style="height: 920px;margin-top: 125px;">
               <Weather :location="tab1[0]"></Weather>
                <FutureWeather :location="tab1[0]"></FutureWeather>
               <WeatherDetail :location="tab1[0]"></WeatherDetail>
             </div>
           </v-tab-item>
            <v-tab-item>
              <div class="bg" style="height: 920px;margin-top: 125px;">
                <Weather :location="tab1[1]"></Weather>
                <FutureWeather :location="tab1[1]"></FutureWeather>
                <WeatherDetail :location="tab1[1]"></WeatherDetail>
              </div>
            </v-tab-item>
            <v-tab-item>
              <div class="bg" style="height: 920px;margin-top: 125px;">
                <Weather :location="tab1[2]"></Weather>
                <FutureWeather :location="tab1[2]"></FutureWeather>
                <WeatherDetail :location="tab1[2]"></WeatherDetail>
              </div>
            </v-tab-item>
          </v-tabs-items>
        </v-container>
      </v-sheet>
    </v-card>
    <v-main>
      <div>
        <van-popup v-model="show"  position="left" style="width: 80%; height: 100%;">
          <Me></Me>
        </van-popup>
      </div>
    </v-main>
  </v-app>
</template>

<script>
  import Me from "@/views/Me";
  import Weather from "@/components/Weather";
  import FutureWeather from "@/components/FutureWeather";
  import WeatherDetail from "@/components/WeatherDetail";

  export default {
    name: 'Home',
    components: {
      WeatherDetail,
      FutureWeather,
      Weather,
      Me
    },
    data(){
      return{
        show:false,
        tab:'',
        tab1:['杭州','衢州','上海'],
        location:'杭州',
        reveal: false,
      }
    },

    methods:{
      showPopup() {
        this.show = true;
      },
      left() {
        console.log('left')
      }
    },
  }
</script>
<style lang="less" scoped>
.bg{
  background-image: url("../assets/bg1.jpg");
  background-size: 100% 100%;
  background-position: center;
  width: 100%;
  height: fit-content;
  /*filter:contrast(70%);*/
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;

}
}
</style>