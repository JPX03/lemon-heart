<template>
  <div>
    <div class="logContainer"></div>
    <div id="close" @click="close"><i class="el-icon-close"></i></div>
    <div class="head">
      <div class="logo"></div>
      <img src="@/assets/pictures/Group_15.png">
      <div class="title">柠檬心理</div>
    </div>
    <div id="a">登录</div>
    <div class="table">
      <input id="inp1" type="text" placeholder="用户名" v-model="userName">
      <input id="inp2" type="text" placeholder="密码" v-model="pwd">
      <div id="message1" v-show="isShowLog">用户名或密码输入错误</div>
      <div id="create">
        <button id="sub1" @click="sub1">登录</button>
      </div>
      <div id="text">
        <span>新用户？</span>
        <span id="reg" @click="toReg"><a>注册</a></span>
      </div>
    </div>
  </div>
</template>

<script>
  import request from '@/utils/request.js'
  export default {
    name: 'Login',
    data() {
      return {
        props: {
          isVisible: Boolean,
          comName: String,
        },
        cN: this.comName,
        visible: this.isVisible,
        isShowLog: false,
        userName: '',
        pwd: '',
      }
    },

    watch: {
      visible(val) {
        this.isVisible = val;
      },
      cN(val) {
        this.comName = val;
      }
    },

    methods: {
      close() {
        this.userName = '';
        this.pwd = '';
        this.isShowLog = false;
        this.$emit('dialogVisibleEvent', false);
      },
      toReg() {
        this.$emit('dialogNameEvent', 'Register')
      },
      sub1() {
        request({
          method: 'post',
          url: '/user/login',
          params: {
            userName: this.userName,
            userPwd: this.pwd,
          }
        }).then((response) => {
          console.log(response);
          if (response.data.status == true) {
            this.isShowLog = false;
            // 以json格式传给setCookie方法存入信息,方法里面会循环遍历该json以单个数据存储的方式，多次存入cookie中
            // 注：cookie不支持直接以json的方式存入
            let loginInfo = {
              userName: this.userName,
              userId:response.data.data.uid,
            }
            // 调用setCookie方法，同时传递需要存储的数据，保存天数
            this.cookie.setCookie(loginInfo, 7);
            this.close();
            alert("登录成功");
            this.$emit('logSuccess', this.cookie.getCookie('userName'))
          } else {
            this.isShowLog = true;
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .logContainer {
    width: 500px;
    height: 560px;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 1);
    box-sizing: border-box;
    background: rgba(255, 255, 255, 1);
    position: relative;
  }

  #close {
    position: absolute;
    top: 40px;
    left: 435px;
    width: 34px;
    height: 34px;
    color: rgba(203, 203, 203, 1);
    font-size: 25px;
  }

  #close :hover {
    cursor: pointer;
    color: tomato;
  }

  .head {
    position: absolute;
    top: 33px;
    left: 30px;
    width: 51px;
    height: 44px;
  }

  .head img {
    width: 100%;
    height: 100%;
  }

  .title {
    position: absolute;
    top: 13px;
    left: 82px;
    width: 300px;
    height: 33px;
    color: rgba(0, 0, 0, 1);
    font-family: Alibaba PuHuiTi;
    font-weight: 300;
    font-size: 24px;
  }

  #a {
    position: absolute;
    top: 120px;
    left: 36px;
    width: 150px;
    height: 34px;
    color: rgba(71, 71, 71, 1);
    font-family: PingFang-Regular;
    font-size: 24px;
  }

  #inp1 {
    position: absolute;
    top: 179px;
    left: 36px;
    width: 428px;
    height: 60px;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 1);
    box-sizing: border-box;
    background: rgba(255, 255, 255, 1);
    color: rgba(0, 0, 0, 1);
    font-family: FZBaoSong-Z04S;
    font-size: 20px;
  }

  #inp2 {
    position: absolute;
    top: 265px;
    left: 36px;
    width: 428px;
    height: 60px;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 1);
    box-sizing: border-box;
    background: rgba(255, 255, 255, 1);
    color: rgba(0, 0, 0, 1);
    font-family: FZBaoSong-Z04S;
    font-size: 20px;
  }

  #message1 {
    position: absolute;
    top: 341px;
    left: 36px;
    width: 300px;
    height: 22px;
    color: rgba(235, 87, 87, 1);
    font-family: PingFang-Regular;
    font-size: 16px;
  }

  #create :hover {
    cursor: pointer;
  }

  #sub1 {
    position: absolute;
    top: 383px;
    left: 36px;
    width: 428px;
    height: 56px;
    border: 1px solid rgba(97, 97, 97, 1);
    box-sizing: border-box;
    background: rgba(71, 71, 71, 1);
    color: rgba(255, 255, 255, 1);
    font-family: PingFang-Regular;
    font-size: 18px;
  }

  #text {
    position: absolute;
    top: 451px;
    left: 205px;
    color: rgba(97, 97, 97, 1);
    font-family: PingFang-Regular;
    font-size: 15px;
  }

  #reg {
    text-decoration: underline;
  }

  #reg :hover {
    cursor: pointer;
    color: turquoise;
  }
</style>