<template>
  <div>
    <div class="pictures-top">
      <div class="square">
        <img src="../assets/pictures/Rectangle_25.png" alt="" />
      </div>
      <div class="pictures-text">
        <span>精选文章</span>
      </div>
      <div class="border-black">
        <div class="border-1">
          <img src="../assets/pictures/unsplash_Av_NirIguEc.png" alt="" />
        </div>
        <div class="border-1-text">
          <span>致讨好型人格：你不必通过讨好换取爱</span>
        </div>
        <div class="border-1-text2">
          <span># 心理科普</span>
        </div>
        <div class="border-2">
          <img
            src="../assets\pictures\思考图片素材IDVCG41pha295000017_1.png"
            alt=""
          />
        </div>
        <div class="border-2-text">
          <span>“我把自己活成了一座孤岛”：心中有爱，才会享受孤独</span>
        </div>
        <div class="border-2-text2">
          <span># 自我情绪</span>
        </div>
        <div class="border-3">
          <img
            src="../assets\pictures\思考图片素材IDVCG211128975283_1.png"
            alt=""
          />
        </div>
        <div class="border-3-text">
          <span>你不经意中的人生“自我设限”，如何突破？</span>
        </div>
        <div class="border-3-text2">
          <span># 自我情绪</span>
        </div>
      </div>
      
      <el-menu
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        router
        active-text-color="black"
      >
        <el-menu-item index="/Article/ArticleHome">全部</el-menu-item>
        <el-menu-item index="/Article/Articlezhichang">职场技能</el-menu-item>
        <el-menu-item index="/Article/Articlekepu">心理科普</el-menu-item>
        <el-menu-item index="/Article/Articlehunlian">婚恋情感</el-menu-item>
        <el-menu-item index="/Article/Articlejiating">家庭关系</el-menu-item>
        <el-menu-item index="/Article/Articlerenji">人际社交</el-menu-item>
        <el-menu-item index="/Article/Articlejuecha">自我觉察</el-menu-item>
      </el-menu>
    </div>
    <div class="router">

        <router-view></router-view>      
 

    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
};
</script>

<style scoped>
.pictures-top {
  height: 1000px;
  position: relative;
}
.square img {
  position: absolute;
  top: 102px;
  left: 259px;
  width: 47px;
}
.pictures-text span {
  position: absolute;
  top: 113.1px;
  left: 291px;
  width: 144px;
  height: 47.5px;
  /* background: rgba(71, 71, 71, 1); */
  color: rgba(71, 71, 71, 1);
  font-family: PingFang SC;
  font-size: 36px;
}
.border-black {
  width: 1400px;
  height: 500px;
  border: 0.6px solid rgba(0, 0, 0, 1);
  box-sizing: border-box;
  position: relative;
  top: 191px;
  left: 260px;
  margin-bottom: 260px;
}
.border-1 img {
  width: 405px;
  height: 367px;
  position: absolute;
} 
.border-2 img {
  width: 515px;
  height: 246px;
  position: absolute;
  left: 405px;
  top: 251px;
  z-index: 99;
}

.border-3 img {
  position: absolute;
  width: 530px;
  height: 252px;
  left: 860px;
  right: 0;
  top: 0px;
  z-index: 1;
} 
 .border-1-text span {
  position: absolute;
  width: 346px;
  height: 68px;
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
  font-size: 24px;
  line-height: 139.999998%;
  left: 31px;
  top: 383px;
}
.border-1-text2 span {
  color: rgba(97, 97, 97, 1);
  font-family: PingFang-Regular;
  font-size: 18px;
  width: 98px;
  height: 23px;
  position: absolute;
  left: 35px;
  top: 475px;
}
.border-2-text span {
  width: 348px;
  height: 68px;
  text-align: right;
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
  font-size: 24px;
  line-height: 139.999998%;
  position: absolute;
  top: 82px;
  left: 491px;
}
.border-2-text2 span {
  width: 98px;
  height: 23px;
  color: rgba(97, 97, 97, 1);
  font-family: PingFang-Regular;
  font-size: 18px;
  position: absolute;
  left: 741px;
  top: 170px;
}
.border-3-text span {
  position: absolute;
  left: 954px;
  top: 351px;
  width: 375px;
  height: 68px;
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
  font-size: 24px;
  line-height: 139.999998%;
}
.border-3-text2 span {
  position: absolute;
  top: 439px;
  left: 954px;
  width: 98px;
  height: 23px;
  color: rgba(97, 97, 97, 1);
  font-family: PingFang-Regular;
  font-size: 18px;
}

.el-menu-demo {
  position: relative;
  top: 0px;
  left: 259px;
  display: inline-block;
}
.router{
  position: relative;
  left: 259px;
  top: -80px;
  display: inline-block;
}

</style>