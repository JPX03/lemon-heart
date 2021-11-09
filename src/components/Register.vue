<template>
  <div class="regContainer">
    <div id="close" @click="close"><i class="el-icon-close"></i></div>
    <div v-if="flag1">
      <div class="head">
        <div class="logo"></div>
        <img src="@/assets/pictures/Group_15.png">
        <div class="title">柠檬心理</div>
      </div>
      <div id="a">注册</div>
      <div class="table">
        <input id="inp1" type="text" placeholder="邮箱" v-model="email">
        <input id="inp2" type="text" placeholder="密码" v-model="pwd">
        <div id="message1" v-show="isShowmes1">邮箱格式输入错误,请重新输入</div>
        <div id="create">
          <button id="sub1" @click="sub1">创建账户</button>
        </div>
        <div id="text">
          <span>已有帐户？</span>
          <span id="login" @click="toLog"><a>登录</a></span>
        </div>
      </div>
    </div>
    <div v-if="flag2">
      <div class="head">
        <div class="logo"></div>
        <img src="@/assets/pictures/Group_15.png">
        <div class="title">柠檬心理</div>
      </div>
      <div id="back" @click="getBack">
        <i class="el-icon-arrow-left">返回</i>
      </div>
      <div id="test">完成注册</div>
      <input id="inp3" type="text" placeholder="邮箱验证码" v-model="ver">
      <input id="inp4" type="text" placeholder="昵称" v-model="userName">
      <div id="message2" v-show="isShowmes2" v-text="wrongT"></div>
      <div id="sure">
        <button id="sub2" @click="sub2">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
  import request from '@/utils/request.js'
  export default {
    name: 'Register',
    data() {
      return {
        props: {
          isVisible: Boolean,
          comName: String,
        },
        flag1: true,
        flag2: false,
        visible: this.isVisible,
        cN: this.comName,
        email: '',
        pwd: '',
        ver: '',
        ver2: '',
        userName: '',
        isShowmes1: false,
        isShowmes2: false,
        wrongT: '',
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
        this.email = '',
          this.pwd = '',
          this.userName = '',
          this.ver = '',
          this.$emit('dialogVisibleEvent', false);
      },
      toLog() {
        this.$emit('dialogNameEvent', 'Login')
      },
      sub1() {
        request({
          method: 'post',
          url: '/user/sendEmail',
          params: {
            userEmail: this.email
          }
        }).then((response) => {
          if (response.data.status == true) {
            this.flag1 = false;
            this.flag2 = true;
            this.isShowmes1 = false;
            this.ver2 = response.data.message
          } else {
            this.isShowmes1 = true;
          }
          console.log(this.ver)
          console.log(response)
        })
      },
      sub2() {
        if (this.ver != this.ver2) {
          this.wrongT = '验证码输入错误'
          this.isShowmes2 = true;
        } else {
          request({
            method: 'post',
            url: '/user/regist',
            params: {
              userName: this.userName,
              userPwd: this.pwd,
              userEmail: this.email,
            }
          }).then((response) => {
            if (response.data.status == true) {
              request({
                method: 'post',
                url: '/user/login',
                params: {
                  userName: this.userName,
                  userPwd: this.pwd,
                }
              }).then((response) => {
                let loginInfo = {
                  userName: this.userName,
                  userId: response.data.data.uid,
                }
                // 调用setCookie方法，同时传递需要存储的数据，保存天数
                this.cookie.setCookie(loginInfo, 7);
                this.flag1 = true;
                this.flag2 = false;
                this.email = '';
                this.pwd = '';
                this.ver = '';
                this.ver2 = '';
                this.userName = '';
                this.isShowmes1 = false;
                this.isShowmes2 = false;
                this.close();
                alert('注册成功!')
                location.reload();
              })
            } else {
              this.wrongT = '用户名已被注册!请重新输入'
            }
          })
        }
      },
      getBack() {
        this.flag1 = true;
        this.flag2 = false;
        this.userName = '';
        this.ver = '';
      }
    }
  }
</script>

<style lang="less" scoped>
  .regContainer {
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
    left: 198px;
    color: rgba(97, 97, 97, 1);
    font-family: PingFang-Regular;
    font-size: 15px;
  }

  #login {
    text-decoration: underline;
  }

  #login :hover {
    cursor: pointer;
    color: turquoise;
  }

  #back {
    position: absolute;
    top: 104px;
    left: 36px;
    width: 150px;
    height: 34px;
    color: rgba(97, 97, 97, 1);
    font-family: PingFang-Regular;
    font-size: 18px;
  }

  #back :hover {
    color: turquoise;
    cursor: pointer;
  }

  #test {
    position: absolute;
    top: 155px;
    left: 36px;
    width: 96px;
    height: 34px;
    color: rgba(71, 71, 71, 1);
    font-family: PingFang-Regular;
    font-size: 24px;
  }

  #inp3 {
    position: absolute;
    top: 209px;
    left: 36px;
    width: 428px;
    height: 60px;
    border: 0.6px solid rgba(0, 0, 0, 1);
    box-sizing: border-box;
    background: rgba(255, 255, 255, 1);
    color: rgba(0, 0, 0, 1);
    font-family: FZBaoSong-Z04S;
    font-size: 20px;
  }

  #inp4 {
    position: absolute;
    top: 295px;
    left: 36px;
    width: 428px;
    height: 60px;
    border: 0.6px solid rgba(0, 0, 0, 1);
    box-sizing: border-box;
    background: rgba(255, 255, 255, 1);
    color: rgba(0, 0, 0, 1);
    font-family: FZBaoSong-Z04S;
    font-size: 20px;
  }

  #sure :hover {
    cursor: pointer;
  }

  #sub2 {
    position: absolute;
    top: 413px;
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


  #message2 {
    position: absolute;
    top: 371px;
    left: 36px;
    width: 300px;
    height: 22px;
    color: rgba(235, 87, 87, 1);
    font-family: PingFang-Regular;
    font-size: 16px;
  }
</style>