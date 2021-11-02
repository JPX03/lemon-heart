<template>
  <div>
    <div id="qContainer">
      <Aans :title="qInfor.questionTitile" :text="qInfor.questionContent" :date='qInfor.questionTime'
        :likeNum='qInfor.like' :questionId="qInfor.id"></Aans>
    </div>
  </div>
</template>

<script>
  import request from '@/utils/request.js'
  import Aans from '@/components/QaCom/Aans.vue'
  import Aquestion from '@/components/QaCom/Aqustion.vue'
  export default {
    name: 'QAndA',
    components: {
      Aans,
      Aquestion,
    },
    data() {
      return {
        qId: this.$route.params.id,
        qInfor: {},
        ansArr: [],
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
</style>