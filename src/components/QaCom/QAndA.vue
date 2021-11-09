<template>
  <div id='container'>
    <div id="qContainer">
      <Aquestion :title="qInfor.questionTitile" :name="qInfor.questionUserName" :text="qInfor.questionContent"
        :date='qInfor.questionTime' :likeNum='qInfor.like' :questionId="qInfor.id"></Aquestion>
    </div>
    <div id="aTitle">所有解答</div>
    <div id="aNum">{{qInfor.comment}}解答</div>
    <div id="aContainer">
      <Aans v-for="item in ansArr" :key="item.id" :name='item.userName' :date='item.answerTime'
        :text='item.answerContent'></Aans>
    </div>
    <ToAsk id="toAsk"></ToAsk>
    <RelativeThing id="relative" :block1='block1' :block2='block2' :block3='block3' :block4='block4' :url2='url2'
      :url3='url3' :url4='url4'></RelativeThing>
    <Foot id="foot"></Foot>
  </div>
</template>

<script>
  import request from '@/utils/request.js'
  import Aquestion from '@/components/QaCom/Aqustion.vue'
  import Aans from '@/components/QaCom/Aans.vue'
  import ToAsk from '@/components/QaCom/ToAsk.vue'
  import RelativeThing from '@/components/RelativeThing.vue'

  export default {
    name: 'QAndA',
    components: {
      Aans,
      Aquestion,
      ToAsk,
      RelativeThing,
    },
    data() {
      return {
        qId: this.$route.params.id,
        qInfor: {},
        ansArr: [],
        block1: '相关问题',
        block2: '',
        block3: '',
        block4: '',
        url2: '',
        url3: '',
        url4: '',
      }
    },
    methods: {
      getQ() {
        request({
          method: 'post',
          url: '/question/oneQuesition',
          params: {
            id: this.qId,
          }
        }).then(({
          data: res
        }) => {
          this.$set(this, 'qInfor', res.data);
        })
      },
      getAns() {
        request({
          method: 'post',
          url: '/answer/showAnswersOfOneQuestion',
          params: {
            questionId: this.qId,
          }
        }).then(({
          data: res
        }) => {
          this.$set(this, 'ansArr', res.data);
        })
      },
      getThreeQuestion() {
        request({
          methods: 'post',
          url: 'question/listRandomThree'
        }).then(({
          data: res
        }) => {
          this.block2 = res.data[0].questionTitile;
          this.block3 = res.data[1].questionTitile;
          this.block4 = res.data[2].questionTitile;
          this.url2 = '/Qa/' + res.data[0].id;
          this.url3 = '/Qa/' + res.data[1].id;
          this.url4 = '/Qa/' + res.data[2].id;
        })
      }
    },
    created() {
      this.getQ();
      this.getAns();
      this.getThreeQuestion();
    },
    watch: {
      '$route'(to, from) {
        location.reload();
      }
    },
  }
</script>

<style lang="less" scoped>
  #container {
    width: 1920px;
  }

  #qContainer {
    margin-top: 120px;
    margin-left: 262px;
    width: 700px;
  }

  #aTitle {
    position: relative;
    left: 262px;
    top: 100px;
    color: rgba(71, 71, 71, 1);
    font-family: PingFang-Regular;
    font-size: 36px;
    line-height: 193.265629%;
  }

  #aNum {
    position: relative;
    left: 450px;
    top: 55px;
    color: rgba(130, 130, 130, 1);
    font-family: PingFang-Regular;
    font-size: 24px;
    line-height: 130.265629%;
  }

  #aContainer {
    margin-top: 120px;
    margin-left: 262px;
    width: 1658px;
    overflow: hidden;
  }

  #toAsk {
    position: absolute;
    top: 260px;
    left: 1400px;
    width: 200px;
    z-index: 99;
  }

  #relative {
    position: absolute;
    top: 560px;
    left: 1400px;
    width: 200px;
    z-index: 99;
  }

  #foot {
    position: relative;
    top: 200px;
  }
</style>