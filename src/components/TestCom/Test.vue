<template>
  <div id="testContainer">
    <div id="top">
      <img src="@/assets/pictures/test.gif" id="topImg">
    </div>
    <div id="banner">
      <div id="test1">
        <div id="title1A">人</div>
        <div id="title1B">格测试</div>
        <div id="des1">通过TheBigFive（大五类人格特征）来描述人的人格与个性。 大五类因素包括：严谨性、外向性、开放性、宜人性与神经质人格特质。</div>
        <ToTestButton :urlB='url1' id="theBtn1"></ToTestButton>
      </div>
      <TestBlock id="test2" :text1='text1' :text2='text2' :text3='text3' :urlA='url2'></TestBlock>
      <TestBlock id="test3" :text1='text4' :text2='text5' :text3='text6' :urlA='url3'></TestBlock>
      <TestBlock id="test4" :text1='text7' :text2='text8' :text3='text9' :urlA='url4' :isShow='isShow'></TestBlock>
      <ToTestButton :urlB='url4' id="theBtn4"></ToTestButton>
      <TestBlock id="test5" :text1='text10' :text2='text11' :text3='text12' :urlA='url4' :isShow='isShow'></TestBlock>
      <ToTestButton :urlB='url5' id="theBtn5"></ToTestButton>
      <div id="line1"></div>
      <div id="line2"></div>
    </div>
    <div id="tail">
      <img src="@/assets/pictures/threecolors.png">
      <div id="about1">关于心理测试</div>
      <div id="about2">柠檬心理提供多方面的测试来使你更了解你自己</div>
      <div id="about3">测试完成后会提供详细分析和有效的建议</div>
    </div>
    <Foot id="testFoot"></Foot>
  </div>
</template>

<script>
  import ToTestButton from '@/components/ArticleCom/ToTestButton.vue'
  import TestBlock from '@/components/TestCom/TestBlock.vue'
  export default {
    name: 'Test',
    components: {
      ToTestButton,
      TestBlock,
    },
    data() {
      return {
        url1: '/Test1',
        url2: '/Test2',
        url3: '/Test3',
        url4: '/Test4',
        url5: '/Test5',
        text1: '抑',
        text2: '郁度测试',
        text3: '《抑郁测试》（专业版）的编制主要以此为依据，从生理、精神两方面来评估你的抑郁情况。',
        text4: '压',
        text5: '力测试',
        text6: '由心理学家Catherine Maillard 编制，它可以帮助你了解自己的压力类型，以及合适的减压方式。',
        text7: '焦',
        text8: '虑度测试',
        text9: '《焦虑自评量表》是世界上最著名的心理健康测试量表之一，也是当前使用最为广泛的精神障碍和心理疾病门诊检查量表。',
        isShow: false,
        text10: '自',
        text11: '卑度测试',
        text12: '本测评将从家庭、个性、社交、能力等6个方面去分析你的自卑来源，并针对你的结果，提出改善方案，帮助你从觉察自卑到突破自卑。',
      }
    }
  }
</script>

<style lang="less" scoped>
  #testContainer{
    width: 1920px;
    overflow: hidden;
  }
  #top {
    width: 1920px;
    height: 439px;
    border-bottom: 0.6px solid rgba(0, 0, 0, 1)
  }

  #topImg {
    width: 1920px;
    height: 439px;
  }

  #banner {
    width: 1400px;
    height: 1144px;
    border: 0.6px solid rgba(0, 0, 0, 1);
    box-sizing: border-box;
    background: rgba(255, 255, 255, 1);
    margin-left: 260px;
    margin-top: 100px;
    position: relative;
  }

  #test1 {
    position: relative;
    height: 377.4px;
    width: 1400px;
    border-bottom: 0.6px solid rgba(0, 0, 0, 1)
  }

  #title1A {
    position: absolute;
    top: 90px;
    left: 646px;
    height: 40px;
    color: rgba(0, 0, 0, 1);
    font-family: FZBaoSong-Z04S;
    font-size: 36px;
  }

  #title1B {
    position: absolute;
    left: 682px;
    top: 105px;
    font-size: 18px;
    color: rgba(0, 0, 0, 1);
    font-family: FZBaoSong-Z04S;
  }

  #des1 {
    position: absolute;
    top: 148px;
    left: 354px;
    width: 730px;
    height: 76px;
    text-align: center;
    color: rgba(0, 0, 0, 1);
    font-family: PingFang-ExtraLight-2;
    font-size: 24px;
    line-height: 156.765628%;
  }

  #theBtn1 {
    position: absolute;
    top: 254px;
    left: 646px;
  }

  #test2 {
    position: relative;
  }

  #test3 {
    position: relative;
    left: 700px;
  }

  #test4 {
    position: relative;
    top: 378px;
  }

  #theBtn4 {
    position: absolute;
    top: 1062px;
    left: 72px;
  }

  #test5 {
    position: relative;
    top: 378px;
    left: 700px;
  }

  #theBtn5 {
    position: absolute;
    top: 1062px;
    left: 772px;
  }

  #line1 {
    width: 0.6px;
    height: 765px;
    background-color: rgba(0, 0, 0, 1);
    position: relative;
    left: 700px;
  }

  #line2 {
    width: 1400px;
    height: 0.6px;
    background-color: rgba(0, 0, 0, 1);
    position: relative;
    left: 0px;
    top: -388px;
  }

  #tail {
    width: 1920px;
    height: 768px;
    margin-top: 193px;
    position: relative;
  }

  #tail img {
    width: 100%;
    height: 100%;
  }

  #about1 {
    position: absolute;
    top: 179px;
    left: 852px;
    width: 216px;
    height: 40px;
    color: rgba(0, 0, 0, 1);
    font-family: FZBaoSong-Z04S;
    font-size: 36px;
  }

  #about2 {
    position: absolute;
    top: 252px;
    left: 708px;
    width: 510px;
    height: 34px;
    color: rgba(0, 0, 0, 1);
    font-family: PingFang-ExtraLight-2;
    font-size: 24px;
  }

  #about3 {
    position: absolute;
    top: 292px;
    left: 744px;
    width: 440px;
    height: 34px;
    color: rgba(0, 0, 0, 1);
    font-family: PingFang-ExtraLight-2;
    font-size: 24px;
  }

  #testFoot{
    border-top: 0.6px solid rgba(0,0,0,1);
  }
</style>