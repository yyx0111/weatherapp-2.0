<template>
  <div class="me">
    <div class="about">
      <img src="@/assets/头像.jpeg" />
      <p class="p1">玛卡巴卡</p>
      <p class="p2">1853038203@qq.com</p>
    </div>
    <div class="content">
      <div class="private">
        <span><img src="@/assets/个人中心.png" class="left"/><p>个人中心</p> <img src="@/assets/箭头.png" class="right" />
        </span>
        <hr style="margin: 0.5rem;width:96%;opacity: 50%"/>
        <span><img src="@/assets/会员中心.png" class="left"/><p>会员中心</p><img src="@/assets/箭头.png" class="right"/>
        </span>
        <hr style="margin: 0.5rem;width:96%;opacity: 50%"/>
        <span><img src="@/assets/邮箱.png" class="left"/><p>消息中心</p><img src="@/assets/箭头.png" class="right"/>
        </span>
      </div>
      <div class="other">
         <span><img src="@/assets/个性装扮.png" class="left"/><p>个性装扮</p> <img src="@/assets/箭头.png" class="right" />
        </span>
        <hr style="margin: 0.5rem;width:96%;opacity: 50%"/>
        <span><img src="@/assets/setting.png" class="left"/><p>设置</p> <img src="@/assets/箭头.png" class="right" />
        </span>
        <hr style="margin: 0.5rem;width:96%;opacity: 50%"/>
        <span><img src="@/assets/客服.png" class="left"/><p>客服</p> <img src="@/assets/箭头.png" class="right" />
        </span>
        <hr style="margin: 0.5rem;width:96%;opacity: 50%"/>
        <span><img src="@/assets/分享.png" class="left"/><p>分享该app</p> <img src="@/assets/箭头.png" class="right" />
        </span>
<!--        <hr style="margin: 0.5rem;width:96%;opacity: 50%"/>-->
<!--        <span><img src="@/assets/收集整理.png" class="left"/><p>个人信息收集与使用清单</p> <img src="@/assets/箭头.png" class="right" />-->
<!--        </span>-->
<!--        <hr style="margin: 0.5rem;width:96%;opacity: 50%"/>-->
<!--        <span><img src="@/assets/安全.png" class="left"/><p>个人信息与隐私保护</p> <img src="@/assets/箭头.png" class="right" />-->
<!--        </span>-->
        <hr style="margin: 0.5rem;width:96%;opacity: 50%"/>
        <span><img src="@/assets/关于.png" class="left"/><p>关于</p> <img src="@/assets/箭头.png" class="right" />
        </span>
      </div>
      <div class="exit">
        <span>退出登录</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Me"
}
</script>

<style lang="less" scoped>
.me{
  width: 100%;
  background-color: #f5f5f5;
  .about{
    background: url("../assets/背景.jpg");
    background-size: cover;
    img{
      width: 30%;
      height: 30%;
      border-radius: 100px;
      padding-top: 1rem;
      margin-left: 1rem;
    }
    .p1{
      width: 90%;
      color: #6a6666;
      font-family: 华文楷体;
      margin-left: 1rem;
      font-weight: 300;
      font-size: large;
    }
    .p2{
      width: 90%;
      color: #6a6666;
      font-family: 华文楷体;
      font-weight: 300;
      font-size: large;
      margin-left: 1rem;
      margin-top: -1rem;
    }
  }
  .content{
    width: 100%;
    height:100%;
    .private{
      margin-left: 1rem;
      width: 90%;
      margin-top: 1rem;
      border-radius: 10px;
      background-color: white;
      padding-bottom: 0.7rem;
      span{
        font-size: medium;
        font-family: 微软雅黑;
        color: #454242;
        padding-left: 1rem;
        padding-right: 1rem;
        display: flex;
        .left{
          margin-top: 1rem;
          width: 10%;
          height: 10%;
        }
        p{
          width: 80%;
          text-align: left;
          margin-top: 1rem;
          margin-left: 0.5rem;
        }
        .right{
          margin-top: 1rem;
          width: 10%;
          height: 10%;
        }
      }

    }
    .other{
      margin-left: 1rem;
      width: 90%;
      margin-top: 1rem;
      border-radius: 10px;
      background-color: white;
      padding-bottom: 0.7rem;
      span{
        font-size: medium;
        font-family: 微软雅黑;
        color: #454242;
        padding-left: 1rem;
        padding-right: 1rem;
        display: flex;
        .left{
          margin-top: 1rem;
          width: 10%;
          height: 10%;
        }
        p{
          width: 80%;
          text-align: left;
          margin-top: 1rem;
          margin-left: 0.5rem;
        }
        .right{
          margin-top: 1rem;
          width: 10%;
          height: 10%;
        }
      }

    }
    .exit{
      margin-left: 1rem;
      width: 90%;
      margin-top: 1rem;
      background-color: white;
      padding-bottom: 0.8rem;
      border-radius: 10px;
      span{
        display: flex;
        justify-content: center;
        color: red;
        padding-top: 0.4rem;
        font-size: large;
      }
    }
  }
}
</style>