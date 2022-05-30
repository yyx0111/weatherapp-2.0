<template>
  <div class="bg">
      <Weather :location="location"></Weather>
      <FutureWeather :location="location"></FutureWeather>
      <WeatherDetail :location="location"></WeatherDetail>
  </div>
</template>

<script>
import Weather from "@/components/Weather";
import FutureWeather from "@/components/FutureWeather";
import WeatherDetail from "@/components/WeatherDetail";
export default {
  name: "SearchCop",
  props:['location'],
  components: {
    WeatherDetail,
    FutureWeather,
    Weather,
  }
}
</script>

<style lang="less" scoped>
.bg{
  /*background-color: #607D8B;*/
  background-image: url("../assets/bg2.png");
  background-size: 100% 100%;
  background-position: center;
  width: 100%;
  height: fit-content;
}
</style>