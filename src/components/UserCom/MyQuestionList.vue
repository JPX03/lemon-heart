<template>
  <div id="container">
    <div id="date">{{date}}</div>
    <div id="title">{{title}}</div>
    <div id="commentNum">{{commentNum}}</div>
    <img src="@/assets/pictures/comment.png" id="img1">
    <div id="likeNum">{{likeNum}}</div>
    <img src="@/assets/pictures/like.png" id="img2">
    <div id="line"></div>
  </div>
</template>

<script>
  export default {
    name: 'MyQuestionList',
    props:{
      date:{},
      title:{},
      commentNum:{},
      likeNum:{},
    }
  }
</script>

<style lang="less" scoped>
  #container {
    position: relative;
    width: 800px;
    height: 110px;
    margin-top: 20px;
  }

  #date {
    position: absolute;
    color: rgba(97, 97, 97, 1);
    font-family: PingFang-Regular;
    font-size: 24px;
    line-height: 130.765629%;
  }

  #title {
    position: absolute;
    left: 158px;
    color: rgba(0, 0, 0, 1);
    font-family: FZBaoSong-Z04S;
    font-size: 24px;
    line-height: 130.799997%;
  }

  #commentNum {
    position: absolute;
    left: 159px;
    top: 44px;
    color: rgba(97, 97, 97, 1);
    font-family: PingFang-Regular;
    font-size: 18px;
    line-height: 130.765629%;
  }

  #img1 {
    position: absolute;
    left: 175px;
    top: 49px;
    width: 17px;
    height: 16px;
  }

  #likeNum {
    position: absolute;
    left: 234px;
    top: 44px;
    color: rgba(97, 97, 97, 1);
    font-family: PingFang-Regular;
    font-size: 18px;
    line-height: 130.765629%;
  }

  #img2 {
    position: absolute;
    left: 250px;
    top: 48px;
    width: 17px;
    height: 16px;
  }

  #line {
    position: absolute;
    top: 105px;
    width: 750px;
    height: 1px;
    background-color: rgba(203, 203, 203, 1);
  }
</style>