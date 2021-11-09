<template>
  <div id="container">
    <div id='title'>{{title}}</div>
    <img src="@/assets/pictures/infoHead.png" id="img1">
    <div id="qesName">{{name}}</div>
    <div id="qesDate">{{date}}</div>
    <div id="qesText">{{text}}</div>
    <div class="hoverIt">
      <div id="like" @click="likeIt" :style="{'background':bgc1}">
        <img id="img2" :src="img2Src">
        <div id="likeNum" :style="{'color':color1}">{{likeNum}}</div>
      </div>
    </div>
    <div class="hoverIt" v-if="!isAnsing" @click="ansing">
      <div id="toAns">写回答</div>
    </div>
    <div id="ansContainer" v-if="isAnsing">
      <textarea id="inp" placeholder="请输入你的看法，字数1000字以内" v-model="ansContent"></textarea>
      <div class="hoverIt">
        <div id="cancle" @click="cancle">取消</div>
        <div id="publish" @click="publish">发布</div>
      </div>
    </div>
  </div>
</template>

<script>
  import request from '@/utils/request.js'
  import like1 from '@/assets/pictures/like.png'
  import like2 from '@/assets/pictures/like2.png'
  export default {
    data() {
      return {
        ansContent: '',
        isAnsing: false,
        canLike: true,
        img2Src: like1,
        bgc1: 'rgba(255, 255, 255, 1)',
        color1: 'rgba(71, 71, 71, 1)',
      }
    },
    props: {
      title: {},
      date: {},
      text: {},
      likeNum: {},
      questionId: {},
      name: {},
    },
    methods: {
      likeIt() {
        if (!this.cookie.getCookie('userName')) {
          alert('请先登录')
        } else if (this.canLike) {
          request({
            method: 'post',
            url: '/question/pressLike',
            params: {
              id: this.questionId,
            }
          }).then((response => {
            this.likeNum = response.data.data;
            this.img2Src = like2;
            this.bgc1 = 'rgba(71, 71, 71, 1)';
            this.color1 = 'rgba(255, 255, 255, 1)';
            this.canLike = false;
          }))
        } else {
          alert('你已经点过赞了噢~')
        }
      },
      ansing() {
        this.isAnsing = true;
      },
      cancle() {
        this.isAnsing = false;
      },
      publish() {
        request({
          method: 'post',
          url: '/answer/sendAnswer',
          params: {
            questionId: this.questionId,
            userId: this.cookie.getCookie('userId'),
            userName: this.cookie.getCookie('userName'),
            answerContent: this.ansContent,
          },
        }).then((response) => {
          if (response.data.status == true) {
            alert('发布成功!');
            this.ansContent = '';
            location.reload();
          } else {
            alert('发布失败!');
          }
        })
      },
    },
  }
</script>

<style lang="less" scoped>
  #container {
    width: 1020px;
    height: 700px;
    position: relative;
  }

  #title {
    position: absolute;
    top: 0px;
    color: rgba(0, 0, 0, 1);
    font-family: FZBaoSong-Z04S;
    font-size: 36px;
    line-height: 130.265629%;
  }

  #img1 {
    position: absolute;
    left: 0px;
    top: 60px;
    width: 28px;
    height: 28px;
  }

  #qesName {
    position: absolute;
    top: 62px;
    left: 40px;
    color: rgba(97, 97, 97, 1);
    font-family: PingFang-Regular;
    font-size: 18px;
    line-height: 130.265629%;
  }

  #qesDate {
    position: absolute;
    top: 60px;
    left: 125px;
    color: rgba(97, 97, 97, 1);
    font-family: PingFang-Regular;
    font-size: 14px;
    line-height: 193.265629%;
  }

  #qesText {
    position: absolute;
    top: 120px;
    color: rgba(97, 97, 97, 1);
    font-family: PingFang-Regular;
    font-size: 21px;
    line-height: 193.265629%;
    width: 1020px;
  }

  #like {
    position: absolute;
    top: 480px;
    width: 130px;
    height: 40px;
    border-radius: 23.5px;
    border: 0.6px solid rgba(0, 0, 0, 1);
    box-sizing: border-box;
  }

  .hoverIt :hover {
    cursor: pointer;
  }

  #toAns {
    position: absolute;
    top: 480px;
    left: 160px;
    width: 130px;
    height: 40px;
    border-radius: 23.5px;
    border: 0.6px solid rgba(0, 0, 0, 1);
    box-sizing: border-box;
    background: rgba(255, 255, 255, 1);
    text-align: center;
    font-family: PingFang-Regular;
    font-size: 18px;
    line-height: 150%;
    padding-top: 5px;
    color: rgba(71, 71, 71, 1);
  }

  #toAns a {
    width: 100%;
    height: 100%;
  }

  #img2 {
    position: absolute;
    top: 8px;
    left: 41px;
    width: 24px;
    height: 24px;
  }

  #likeNum {
    position: absolute;
    top: 6px;
    left: 77px;
    font-family: PingFang-Regular;
    font-size: 18px;
    line-height: 150%;
  }

  #ansContainer {
    position: absolute;
    top: 530px;
    width: 1030px;
    height: 260px;
  }

  #inp {
    width: 1030px;
    height: 200px;
    color: rgba(130, 130, 130, 1);
    font-family: PingFang-Regular;
    font-size: 18px;
    line-height: 150%;
    margin-bottom: 10px;
  }

  #cancle {
    position: relative;
    left: 786px;
    width: 108px;
    height: 45px;
    border-radius: 23.5px;
    border: 0.6px solid rgba(0, 0, 0, 1);
    box-sizing: border-box;
    background: rgba(255, 255, 255, 1);
    color: rgba(71, 71, 71, 1);
    font-family: PingFang-Regular;
    font-size: 18px;
    line-height: 150%;
    text-align: center;
    padding-top: 5px;
  }

  #publish {
    position: relative;
    left: 914px;
    top: -45px;
    width: 108px;
    height: 40px;
    border-radius: 23.5px;
    background: rgba(51, 51, 51, 1);
    color: rgba(255, 255, 255, 1);
    font-family: PingFang-Regular;
    font-size: 18px;
    line-height: 150%;
    text-align: center;
    padding-top: 5px;
  }
</style>