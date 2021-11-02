<template>
  <div>
    1111
  </div>
</template>

<script>
  import request from '@/utils/request.js'
  export default {
    name: 'QAndA',
    data() {
      return {
        QaId: this.$route.params.id,
        Qa: {},
        ansArr: [],
      }
    },
    methods: {
      async getAns() {
        await request({
          method: 'post',
          url: '/answer/showAnswersOfOneQuestion',
          params: {
            questionId: this.QaId,
          }
        }).then(({
          data: res
        }) => {
          console.log(res);
          //this.$set(this, 'theQa', res.data.records);
        })
      }
    },
    created() {
      console.log(this.QaId);
      this.getAns();
    }
  }
</script>

<style lang="less" scoped>

</style>