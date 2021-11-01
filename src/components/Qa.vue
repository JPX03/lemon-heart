<template>
  <div>
    <div class="container">
      <div class="top1">
        <img src="@/assets/pictures/qaBgimg.gif">
        <div>
          <router-link to='QaDetail' id="ask">
            提问
          </router-link>
        </div>
      </div>
    </div>
    <div class="top2">
      <img src="@/assets/pictures/Rectangle_25.png" id="img1">
      <div id="title1">精选问答</div>
      <div id="line1"></div>
      <router-link to="a" id="text0">
        <div v-text="this.text[0].questionTitile"></div>
      </router-link>
      <router-link to="a" id="text1">
        <div v-text="this.text[1].questionTitile"></div>
      </router-link>
      <router-link to="a" id="text2">
        <div v-text="this.text[2].questionTitile"></div>
      </router-link>
      <div id="line2"></div>
      <router-link to="a" id="text3">
        <div v-text="this.text[3].questionTitile"></div>
      </router-link>
      <router-link to="a" id="text4">
        <div v-text="this.text[4].questionTitile"></div>
      </router-link>
      <router-link to="a" id="text5">
        <div v-text="this.text[5].questionTitile"></div>
      </router-link>
    </div>
    <div id="title2">最新问答</div>
    <ToAsk id="toAsk"></ToAsk>
    <div id="qaContainer">
      <QaArticle :title="item.questionTitile" :content='item.questionContent' :date='item.questionTime'
        :comNum='item.comment' :likeNum='item.like' v-for="item in qas" :key="item.id"></QaArticle>
    </div>
    <Pages id="pages" @changePage='changePage'></Pages>
    <Foot id="foot"></Foot>
  </div>

</template>

<script>
  import request from '@/utils/request.js'
  import Pages from '@/components/QaCom/Pages.vue'
  import QaArticle from '@/components/QaCom/QaArticle.vue'
  import ToAsk from '@/components/QaCom/ToAsk.vue'
  export default {
    components: {
      Pages,
      QaArticle,
      ToAsk,
    },

    data() {
      return {
        text: [],
        qas: [],
        page: 0,
        isReady: false,
      }
    },

    methods: {
      async getArticle1() {
        await request({
          method: 'post',
          url: '/question/listQuestionByPage',
          params: {
            pageNo: 2,
          }
        }).then(({
          data: res
        }) => {
          this.$set(this, 'text', res.data.records);
        })
      },
      async getArticle2(val) {
        await request({
          method: 'post',
          url: '/question/listQuestionByPage',
          params: {
            pageNo: val,
          }
        }).then(({
          data: res
        }) => {
          console.log(res);
          this.$set(this, 'qas', res.data.records);
          for (const item of this.qas) {
            item.questionContent = item.questionContent.slice(0, 80) + "……";
          }
        })
      },
      changePage(val) {
        this.getArticle2(val);
      }
    },

    created() {
      this.getArticle1();
      this.getArticle2(1);
    },

  }
</script>

<style lang="less" scoped>
  .container {
    width: 1920px;
  }

  .top1 {
    width: 1920px;
    height: 383px;
    background: #FFFFFF;
    position: relative;
  }

  .top1 img {
    height: 100%;
    width: 100%;
  }

  #ask {
    position: absolute;
    top: 259px;
    left: 260px;
    width: 108px;
    height: 40px;
    border-radius: 100px;
    border: 0.6px solid rgba(0, 0, 0, 1);
    box-sizing: border-box;
    background: rgba(255, 255, 255, 1);
    color: rgba(71, 71, 71, 1);
    font-family: PingFang SC;
    font-size: 18px;
    line-height: 130.265629%;
    text-align: center;
    padding-top: 7px;
  }

  .top2 {
    width: 1920px;
    height: 550px;
    background-color: rgb(177, 243, 243);
    position: relative;
  }

  #img1 {
    position: absolute;
    top: 67px;
    left: 228px;
  }

  #title1 {
    position: absolute;
    top: 80px;
    left: 260px;
    width: 144px;
    height: 47px;
    color: rgba(71, 71, 71, 1);
    font-family: PingFang SC;
    font-size: 36px;
    line-height: 130.265629%;
  }

  #line1 {
    position: absolute;
    top: 187px;
    left: 260px;
    width: 0.6px;
    height: 239px;
    background-color: rgba(0, 0, 0, 1);
  }

  #line2 {
    position: absolute;
    top: 187px;
    left: 1097px;
    width: 0.6px;
    height: 239px;
    background-color: rgba(0, 0, 0, 1);
  }

  #text0 {
    position: absolute;
    top: 187px;
    left: 280px;
    width: 500px;
    height: 62px;
    color: rgba(0, 0, 0, 1);
    font-family: FZBaoSong-Z04S;
    font-size: 24px;
    line-height: 130.799997%;
  }

  #text1 {
    position: absolute;
    top: 273px;
    left: 280px;
    width: 500px;
    height: 62px;
    color: rgba(0, 0, 0, 1);
    font-family: FZBaoSong-Z04S;
    font-size: 24px;
    line-height: 130.799997%;
  }

  #text2 {
    position: absolute;
    top: 359px;
    left: 280px;
    width: 500px;
    height: 62px;
    color: rgba(0, 0, 0, 1);
    font-family: FZBaoSong-Z04S;
    font-size: 24px;
    line-height: 130.799997%;
  }

  #text3 {
    position: absolute;
    top: 187px;
    left: 1117px;
    width: 500px;
    height: 62px;
    color: rgba(0, 0, 0, 1);
    font-family: FZBaoSong-Z04S;
    font-size: 24px;
    line-height: 130.799997%;
  }

  #text4 {
    position: absolute;
    top: 273px;
    left: 1117px;
    width: 500px;
    height: 62px;
    color: rgba(0, 0, 0, 1);
    font-family: FZBaoSong-Z04S;
    font-size: 24px;
    line-height: 130.799997%;
  }

  #text5 {
    position: absolute;
    top: 359px;
    left: 1117px;
    width: 359px;
    height: 1117px;
    color: rgba(0, 0, 0, 1);
    font-family: FZBaoSong-Z04S;
    font-size: 24px;
    line-height: 130.799997%;
  }

  #title2 {
    position: relative;
    top: 150px;
    left: 260px;
    width: 144px;
    height: 47px;
    color: rgba(71, 71, 71, 1);
    font-family: PingFang SC;
    font-size: 36px;
    line-height: 130.265629%;
  }

  #qaContainer {
    height: 1400px;
    position: relative;
    top: 168px;
    left: 262px;
    width: 910px;
  }

  #pages {
    position: relative;
    top: 249px;
    left: 250px;
  }

  #foot {
    position: relative;
    top: 400px;
  }

  #toAsk {
    position: fixed;
    top: 350px;
    right: 450px;
    ;
  }
</style>