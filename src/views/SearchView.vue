<template>
  <div>
    <div class="header">
      <van-nav-bar left-text="返回" left-arrow  @click-left="$router.go(-1)" style="height: 54px;">
        <template #right>
          <van-search
              v-model="value"
              show-action
              placeholder="请输入搜索地址"
              @search="onSearch"
          >
            <template #action>
              <div @click="onSearch">搜索</div>
            </template>
          </van-search>
        </template>
      </van-nav-bar>
    </div>
    <div v-if="show">
      <SearchCop :location="location"></SearchCop>
    </div>
  </div>
</template>

<script>
import SearchCop from "@/components/SearchCop";
export default {
  name: "SearchView",
  components: {SearchCop},
  data(){
    return{
      show:false,
      location:'',
      value:'',
    }
  },
  methods:{
    onSearch() {
      this.show=true;
      this.location=this.value
      console.log(this.location)
   }
  }
}
</script>

<style lang="less" scoped>
*{
}
</style>