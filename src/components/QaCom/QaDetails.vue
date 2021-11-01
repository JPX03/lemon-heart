<template>
  <div>
    1111
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id,
        theQa: {}
      }
    },
    methods: {
      async getArticle() {
        await request({
          method: 'post',
          url: '/question/listQuestionByPage',
          params: {
            pageNo: 2,
          }
        }).then(({
          data: res
        }) => {
          this.$set(this, 'theQa', res.data.records);
        })
      }
    },
    created() {
      console.log(this.id);
    }
  }
</script>

<style lang="less" scoped>

</style>