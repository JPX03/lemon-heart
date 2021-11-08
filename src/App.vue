<template>
  <div>
    <!--导航栏-->
    <div class="navContainer" :style="{'background':containerBgc}">
      <el-row :gutter="10">
        <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
          <div class="grid-content bg-purple">
            <div class="logo">
              <router-link to='/Home'>
                <img src="./assets/pictures/Group_15.png">
              </router-link>
            </div>
          </div>
        </el-col>
        <el-col :xs="4" :sm="9" :md="9" :lg="9" :xl="9">
          <div class="grid-content bg-purple article title">
            <router-link to="/Home">柠檬心理</router-link>
          </div>
        </el-col>
        <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
          <div class="grid-content bg-purple article">
            <router-link to="/Article">文章</router-link>
          </div>
        </el-col>
        <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
          <div class="grid-content bg-purple qa">
            <router-link to='/Qa'>问答</router-link>
          </div>
        </el-col>
        <el-col :xs="4" :sm="2" :md="2" :lg="2" :xl="2">
          <div class="grid-content bg-purple test">
            <router-link to='/Test'>心理测试</router-link>
          </div>
        </el-col>
        <el-col :xs="4" :sm="2" :md="2" :lg="2" :xl="2">
          <div class="grid-content bg-purple b=more">
            <router-link to='/More'>更多</router-link>
          </div>
        </el-col>
        <el-col :xs="2" :sm="1" :md="1" :lg="1" :xl="1" id="log">
          <div class="grid-content bg-purple login" @click="showLog" v-show="!isLog">
            <div>登录</div>
          </div>
        </el-col>
        <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
          <div class="grid-content bg-purple" @click="showReg" v-show="!isLog">
            <el-button round size='mini' class="register" :style="{'background':regBgc,'color':regColor}">注册</el-button>
          </div>
          <div v-show="isLog">
            <router-link to="/UserPage">
              <UserHead></UserHead>
            </router-link>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- -->
    <router-view></router-view>
    <component :is='comName' class="regPage" v-show="isVisible" :isVisible="isVisible" @dialogVisibleEvent="showDialog"
      @dialogNameEvent='showName' @logSuccess='logSuccess'>
    </component>
  </div>
</template>

<script>
  import Article from '@/components/ArticleCom/Article.vue'
  import More from '@/components/MoreCom/More.vue'
  import Login from '@/components/Login.vue'
  import Qa from '@/components/QaCom/Qa.vue'
  import Register from '@/components/Register.vue'
  import Test from '@/components/TestCom/Test.vue'
  import Home from '@/components/Home.vue'
  import UserHead from '@/components/UserCom/UserHead.vue'

  export default {
    data() {
      return {
        containerBgc: 'rgba(177, 243, 243, 1)',
        regBgc: 'rgba(255, 255, 255, 1)',
        regColor: 'rgba(71, 71, 71, 1);',
        path: this.$route.fullPath,
        isVisible: false,
        comName: '',
        isLog: false,
      }
    },

    methods: {
      changeColor() {
        if (this.path == '/Home' || this.path == '/UserPage' || this.path == '/Test') {
          this.containerBgc = 'rgba(177, 243, 243, 1)';
          this.regBgc = 'rgba(255, 255, 255, 1)';
          this.regColor = 'rgba(71, 71, 71, 1)';
        } else {
          this.containerBgc = 'rgba(253, 255, 255, 1)';
          this.regBgc = 'rgba(51, 51, 51, 1)';
          this.regColor = 'rgba(255, 255, 255, 1)';
        }
      },
      showReg() {
        this.isVisible = true;
        this.comName = 'Register';
      },
      showLog() {
        this.isVisible = true;
        this.comName = 'Login';
      },
      showDialog(visible) {
        this.isVisible = visible;
      },
      showName(name) {
        this.comName = name;
      },
      isLogin() {
        if (this.cookie.getCookie('userName') != null) {
          this.isLog = true;
        } else {
          this.isLog = false;
        }
      },
      logSuccess(val) {
        this.isLogin();
        location.reload();
      }
    },
    created() {
      this.isLogin();
    },
    //监听url变化
    watch: {
      '$route': function (to, from) {
        this.path = to.fullPath;
        this.changeColor();
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      }
    },


    components: {
      'Article': Article,
      'More': More,
      'Login': Login,
      'Qa': Qa,
      'Register': Register,
      'Test': Test,
      'Home': Home,
      'UserHead': UserHead,
    }
  }
</script>

<style lang='less' scoped>
  .navContainer {
    width: 1920px;
    height: 80px;
    border-bottom: 0.6px solid rgba(0, 0, 0, 1);
    overflow: hidden;
    position: sticky;
    top: 0px;
    left: 0px;
    z-index: 999;
  }

  a {
    color: rgba(71, 71, 71, 1);
    line-height: 80px;
    font-family: PingFang SC;
    font-size: 20px;
  }

  .register {
    font-family: PingFang SC;
    font-size: 20px;
    height: 40px;
    line-height: 20px;
    margin-top: 20px;
  }

  .login {
    color: rgba(71, 71, 71, 1);
    line-height: 80px;
    font-family: PingFang SC;
    font-size: 20px;
    padding-left: 5px;
  }

  #log :hover {
    cursor: pointer;
  }

  a:hover {
    font-size: 24px;
  }

  .title {
    font-family: Alibaba PuHuiTi;
    font-weight: 300;
    font-size: 24px;
    letter-spacing: 18%;
  }

  img {
    width: 35%;
    margin-left: 150px;
  }

  .regPage {
    position: absolute;
    top: 205px;
    left: 710px;
    width: 500px;
    height: 560px;
    z-index: 999;
  }
</style>