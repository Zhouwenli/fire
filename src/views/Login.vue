<template>
  <div>
    <img src="../assets/img/login/login_logoB.png" alt="" class="loginFlag">
    <img src="../assets/img/login/login_titleB.png" alt="" class="loginTitle">
    <div class="loginData">
      <p class="loginp"><span class="flag"><i class="cubeic-person"></i></span><input class="loginText" v-model="username" type="text" placeholder="请输入您的用户名"></p>
      <p><span class="flag"><i class="cubeic-lock"></i></span><input class="loginText" type="text" v-model="password" placeholder="登录密码"></p>
    </div>
    <p class="loginBtn" @click="login()">登录</p>
    <p class="companyIntro">贵阳市消防支队</p>
  </div>
</template>

<script>
export default{
  name:'Login',
  data(){
    return{
      username:'',
      password:''
    }
  },
  mounted() {

  },
  methods:{
    login:function(){
      if(this.username == ''){
        alert("用户名不能为空")
      }else if(this.password ==''){
        alert("密码不能为空")
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.loginFlag
  width 42%
  height 200px
  margin-top 100px
  display inline-block

.loginTitle
  width 60%
  display inline-block
.loginData
  width 80%
  margin 30px auto
  border 1px solid #3293EA
  p
    padding 15px 0
    text-align left
    &.loginp
      border-bottom 1px solid #3293EA
    .flag
      color #3293EA
      vertical-align middle
      padding-left 20px
    .loginText
      font-size 34px
      background none
      outline none
      border none
      padding-left 20px
      vertical-align middle
.loginBtn
  width 80%
  height 80px
  line-height 80px
  background-color #3293EA
  color #fff
  text-align center
  margin 20px auto
  font-size 36px
.companyIntro
  width 100%
  font-size 36px
  color #3293EA
  position fixed
  bottom 100px
  text-align center
  font-weight 800

</style>
