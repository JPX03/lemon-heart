<template>
  <div>
    <div id="qContainer">
      <Aquestion :title="qInfor.questionTitile" :text="qInfor.questionContent" :date='qInfor.questionTime'
        :likeNum='qInfor.like' :questionId="qInfor.id"></Aquestion>
    </div>
    <div id="aTitle">所有解答</div>
    <div id="aNum">{{qInfor.comment}}解答</div>
    <div id="aContainer">
      <Aans v-for="item in ansArr" :key="item.id" :name='item.userName' :date='item.answerTime'
        :text='item.answerContent'></Aans>
    </div>
    <ToAsk id="toAsk"></ToAsk>
    <RelativeThing id="relative" :block1='block1' :block2='block2' :block3='block3' :block4='block4'></RelativeThing>
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
        block2: '我该怎么接纳孤独，享受孤独，更好地与它相处？',
        block3: '有烦恼不能说出来，为什么我老憋着事情在肚子里呢？',
        block4: '社交恐惧，不想接电话，朋友觉得我很不会做人？'
      }
    },
    methods: {
      async getQ() {
        await request({
          method: 'post',
          url: '/question/oneQuesition',
          params: {
            id: this.qId,
          }
        }).then(({
          data: res
        }) => {
          this.$set(this, 'qInfor', res.data);
          console.log(this.qInfor);
        })
      },
      async getAns() {
        await request({
          method: 'post',
          url: '/answer/showAnswersOfOneQuestion',
          params: {
            questionId: this.qId,
          }
        }).then(({
          data: res
        }) => {
          this.$set(this, 'ansArr', res.data);
          console.log(this.ansArr);
        })
      }
    },
    created() {
      this.getQ();
      this.getAns();
    }
  }
</script>

<style lang="less" scoped>
  #qContainer {
    margin-top: 120px;
    margin-left: 262px;
  }

  #aTitle {
    position: relative;
    left: 262px;
    top: 100px;
    color: rgba(71, 71, 71, 1);
    font-family: PingFang SC;
    font-size: 36px;
    line-height: 193.265629%;
  }

  #aNum {
    position: relative;
    left: 450px;
    top: 55px;
    color: rgba(130, 130, 130, 1);
    font-family: PingFang SC;
    font-size: 24px;
    line-height: 130.265629%;
  }

  #aContainer {
    margin-top: 120px;
    margin-left: 262px;
  }

  #toAsk {
    position: fixed;
    top: 320px;
    left: 1400px;
  }

  #relative{
    position: fixed;
    top: 550px;
    left: 1400px;
  }
</style>