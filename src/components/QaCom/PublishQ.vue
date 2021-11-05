<template>
  <div>
    <div id="container">
      <div id="ask1">发布问题</div>
      <textarea id="inp1" placeholder="请输入问题标题，字数30字以内" v-model="askTitle"></textarea>
      <textarea id="inp2" placeholder="请输入详细的问题描述，字数1000字以内" v-model="askContent"></textarea>
      <div id="back" @click="back">
        <div id="backtext">取消</div>
      </div>
      <div id="pub" @click="pub">
        <div id="pubtext">发布</div>
      </div>
      <RelativeThing id="relative" :block1='block1' :block2='block2' :block3='block3' :block4='block4' :url2='url2'
        :url3='url3' :url4='url4'></RelativeThing>
    </div>
  </div>
</template>

<script>
  import RelativeThing from '@/components/RelativeThing.vue'
  import request from '@/utils/request.js'
  export default {
    name: 'PublishQa',
    data() {
      return {
        askTitle: '',
        askContent: '',
        block1: '参考问题',
        block2: '',
        block3: '',
        block4: '',
        url2: '',
        url3: '',
        url4: '',
      }
    },
    components: {
      RelativeThing,
    },
    methods: {
      back() {
        this.$router.go(-1);
      },
      pub() {
        if (this.askTitle == '' || this.askContent == '') {
          alert('标题或描述不能为空')
        } else {
          request({
            method: 'post',
            url: '/question/sendQuestion',
            params: {
              questionUid: this.cookie.getCookie('userId'),
              questionUserName: this.cookie.getCookie('userName'),
              questionTitile: this.askTitle,
              questionContent: this.askContent,
            }
          }).then((response) => {
            if (response.data.status == true) {
              alert('发布成功！')
              this.askTitle = '';
              this.askContent = '';
              this.$router.replace('/Qa');
              location.reload();
            } else {
              alert('发布失败，请重试！')
            }
          })
        }
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
      this.getThreeQuestion();
    }
  }
</script>

<style lang="less" scoped>
  #container {
    position: relative;
  }

  #ask1 {
    position: absolute;
    top: 180px;
    left: 260px;
    color: rgba(97, 97, 97, 1);
    font-family: PingFang SC;
    font-size: 36px;
    line-height: 150%;
  }

  #inp1 {
    position: absolute;
    top: 264px;
    left: 260px;
    width: 1022px;
    height: 104px;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 1);
    color: rgba(130, 130, 130, 1);
    font-family: PingFang SC;
    font-size: 18px;
    line-height: 150%;
  }

  #inp2 {
    position: absolute;
    top: 392px;
    left: 260px;
    width: 1022px;
    height: 238px;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 1);
    color: rgba(130, 130, 130, 1);
    font-family: PingFang SC;
    font-size: 18px;
    line-height: 150%;
  }

  #back {
    position: absolute;
    top: 690px;
    left: 1046px;
    width: 108px;
    height: 40px;
    border-radius: 23.5px;
    border: 0.6px solid rgba(0, 0, 0, 1);
    box-sizing: border-box;
    color: rgba(71, 71, 71, 1);
    font-family: PingFang SC;
    font-size: 18px;
    line-height: 150%;
  }

  #backtext {
    padding-left: 33px;
    padding-top: 6px;
  }

  #back :hover {
    cursor: pointer;
  }

  #pub {
    position: absolute;
    top: 690px;
    left: 1174px;
    width: 108px;
    height: 40px;
    border-radius: 23.5px;
    background: rgba(51, 51, 51, 1);
    box-sizing: border-box;
    color: rgba(255, 255, 255, 1);
    font-family: PingFang SC;
    font-size: 18px;
    line-height: 150%;
  }

  #pubtext {
    padding-left: 33px;
    padding-top: 6px;
  }

  #pub :hover {
    cursor: pointer;
  }

  #relative {
    position: relative;
    top: 207px;
    left: 1420px;
  }
</style>