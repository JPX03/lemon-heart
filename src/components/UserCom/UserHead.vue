<template>
  <div id="infor">
    <img src="@/assets/pictures/infoHead.png">
    <div id="userName">{{this.cookie.getCookie('userName')}}</div>
  </div>
</template>

<script>
  export default {
    name: 'UserHead',
  }
</script>

<style lang="less" scoped>
  #infor {
    width: 114px;
    height: 40px;
    border-radius: 24px;
    border: 0.6px solid rgba(71, 71, 71, 1);
    box-sizing: border-box;
    background: rgba(255, 255, 255, 1);
    margin-top: 22px;
    position: relative;
  }

  img {
    position: absolute;
    height: 28px;
    width: 28px;
    top: 6px;
    left: 10px;
  }

  #userName {
    position: absolute;
    color: rgba(71, 71, 71, 1);
    font-family: PingFang SC;
    font-size: 18px;
    top: -20px;
    left: 50px;
  }
</style>