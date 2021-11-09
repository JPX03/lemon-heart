<template>
  <div class="test1Container">
    <img src="@/assets/pictures/test1A.gif" id="img1">
    <div id="test1BackImg">
      <div id="bgImg">
        <img src="@/assets/pictures/threecolors.png">
      </div>
    </div>
    <div id="top">
      <img src="@/assets/pictures/Time_Machine.png" id="img2">
      <div id="time">预计时间：3分钟</div>
      <div id="aler">请尽量选择符合和不符合，并且选择你最真实的情况，我们会保护你的隐私</div>
    </div>
    <div id="listsContainer">
      <div v-for='item in listArr' :key="item.index">
        <TestList :listTitle='item.listTitle' :testQ='item.testQ' @getVal='getVal'></TestList>
      </div>
    </div>
    <div class="hoverIt">
      <div id="sub" @click="sendResult1">
        查看分析
      </div>
    </div>
    <Foot id="test1Foot"></Foot>
  </div>
</template>

<script>
  import TestList from '@/components/TestCom/TestList.vue'
  export default {
    data() {
      return {
        answer: '',
        result1A: 0,
        result1B: 0,
        result1C: 0,
        result1D: 0,
        result1E: 0,
        listArr: [{
            listTitle: '1.我常感到害怕',
            testQ: 'q1',
          },
          {
            listTitle: '2.一旦确定了目标，我会坚持努力地实现它',
            testQ: 'q2',
          },
          {
            listTitle: '3.我觉得大部分人基本上是心怀善意的',
            testQ: 'q3',
          },
          {
            listTitle: '4.我头脑中经常充满生动的画面',
            testQ: 'q4',
          },
          {
            listTitle: '5.我对人多的聚会感到乏味',
            testQ: 'q5',
          },
          {
            listTitle: '6.有时我觉得自己一无是处',
            testQ: 'q6',
          },
          {
            listTitle: '7.我常常是仔细考虑之后才做出决定',
            testQ: 'q7',
          },
          {
            listTitle: '8.我不太关心别人是否受到不公正的待遇',
            testQ: 'q8',
          },
          {
            listTitle: '9.我是个勇于冒险，突破常规的人',
            testQ: 'q9',
          },
          {
            listTitle: '10.在热闹的聚会上，我常常表现主动并尽情玩耍',
            testQ: 'q10',
          },
          {
            listTitle: '11.别人一句漫不经心的话，我常会联系在自己身上',
            testQ: 'q11',
          },
          {
            listTitle: '12.别人认为我是个慎重的人',
            testQ: 'q12',
          },
          {
            listTitle: '13.我时常觉得别人的痛苦与无关',
            testQ: 'q13',
          },
          {
            listTitle: '14.我喜欢冒险',
            testQ: 'q14',
          },
          {
            listTitle: '15.我尽量避免参加人多的聚会和嘈杂的环境',
            testQ: 'q15',
          },
          {
            listTitle: '16.在面对压力时，我有种快要崩溃的感觉',
            testQ: 'q16',
          },
          {
            listTitle: '17.我喜欢一开头就把事情计划好',
            testQ: 'q17',
          },
          {
            listTitle: '18.我是那种只照顾好自己，不替别人担忧的人',
            testQ: 'q18',
          },
          {
            listTitle: '19.我对许多事情有着很强的好奇心',
            testQ: 'q19',
          },
          {
            listTitle: '20.有我在的场合一般不会冷场',
            testQ: 'q20',
          },
          {
            listTitle: '21.我常担忧一些无关紧要的事情',
            testQ: 'q21',
          },
          {
            listTitle: '22.我工作或学习很勤奋',
            testQ: 'q22',
          },
          {
            listTitle: '23.虽然社会上有些骗子，但我觉得大部分人还是可信的',
            testQ: 'q23',
          },
          {
            listTitle: '24.我身上具有别人没有的冒险精神',
            testQ: 'q24',
          },
          {
            listTitle: '25.在一个团体中，我希望处于领导地位',
            testQ: 'q25',
          },
          {
            listTitle: '26.常感到内心不踏实',
            testQ: 'q26',
          },
          {
            listTitle: '27.我是个倾尽全力做事的人',
            testQ: 'q27',
          },
          {
            listTitle: '28.当别人向我诉说不幸时，我常感到难过',
            testQ: 'q28',
          },
          {
            listTitle: '29.我渴望学习一些新东西，即使它们与我的日常生活无关',
            testQ: 'q29',
          },
          {
            listTitle: '30.别人多认为我是一个热情和友好的人',
            testQ: 'q30',
          },
          {
            listTitle: '31.我常担心有什么不好的事情要发生',
            testQ: 'q31',
          },
          {
            listTitle: '32.在工作上，我常只求能应付过去便可',
            testQ: 'q32',
          },
          {
            listTitle: '33.尽管人类社会存在着一些阴暗的东西（如战争、罪恶、欺诈），我仍然相信人性总的来说是善良的。',
            testQ: 'q33',
          },
          {
            listTitle: '34.我的想象力相当丰富',
            testQ: 'q34',
          },
          {
            listTitle: '35.我喜欢参加社交与娱乐聚会',
            testQ: 'q35',
          },
          {
            listTitle: '36.我很少感到忧郁或沮丧',
            testQ: 'q36',
          },
          {
            listTitle: '37.做事讲究逻辑和条理是我的一个特点',
            testQ: 'q37',
          },
          {
            listTitle: '38.我常为那些遭遇不幸的人感到难过',
            testQ: 'q38',
          },
          {
            listTitle: '39.我很愿意也很容易接受那些新事物、新观点、新想法',
            testQ: 'q39',
          },
          {
            listTitle: '40.我希望成为领导者而不是被领导者',
            testQ: 'q40',
          },
        ],
      }
    },
    methods: {
      getVal(val) {
        // console.log(val.checkedValue);
        // console.log(val.testQ);
        if (val.testQ == 'q1' || val.testQ == 'q6' || val.testQ == 'q11' || val.testQ == 'q16' || val.testQ == 'q21' ||
          val.testQ == 'q26' || val.testQ == 'q31') {
          this.result1A += parseInt(val.checkedValue);
        } else if (val.testQ == 'q2' || val.testQ == 'q7' || val.testQ == 'q12' || val.testQ == 'q17' || val.testQ ==
          'q22' || val.testQ == 'q27' || val.testQ == 'q37') {
          this.result1B += parseInt(val.checkedValue);
        } else if (val.testQ == 'q3' || val.testQ == 'q23' || val.testQ == 'q28' || val.testQ == 'q33' || val.testQ ==
          'q38') {
          this.result1C += parseInt(val.checkedValue);
        } else if (val.testQ == 'q4' || val.testQ == 'q9' || val.testQ == 'q14' || val.testQ == 'q19' || val.testQ ==
          'q24' || val.testQ == 'q29' || val.testQ == 'q34' || val.testQ == 'q39') {
          this.result1D += parseInt(val.checkedValue);
        } else if (val.testQ == 'q10' || val.testQ == 'q20' || val.testQ == 'q25' || val.testQ == 'q30' || val.testQ ==
          'q35' || val.testQ == 'q40') {
          this.result1E += parseInt(val.checkedValue);
        } else if (val.testQ == 'q36') {
          this.result1A += 5 - parseInt(val.checkedValue);
        } else if (val.testQ == 'q32') {
          this.result1B += 5 - parseInt(val.checkedValue);
        } else if (val.testQ == 'q8' || val.testQ == 'q13' || val.testQ == 'q18') {
          this.result1C += 5 - parseInt(val.checkedValue);
        } else if (val.testQ == 'q5' || val.testQ == 'q15') {
          this.result1E += 5 - parseInt(val.checkedValue);
        }
        console.log(this.result1A);
        console.log(this.result1B);
        console.log(this.result1C);
        console.log(this.result1D);
        console.log(this.result1E);
      },
      sendResult1() {
        this.$router.push({
          path: '/Test1Result',
          query: {
            result1A: this.result1A,
            result1B: this.result1B,
            result1C: this.result1C,
            result1D: this.result1D,
            result1E: this.result1E,
          }
        });
      }
    },
    components: {
      TestList,
    }
  }
</script>

<style lang="less" scoped>
  #test1Container {
    width: 1920px;
    overflow: hidden;
  }

  #img1 {
    width: 1920px;
    height: 537px;
    position: relative;
    left: 0px;
    top: 0px;
    border-bottom: 0.6px solid black;
  }

  #test1BackImg {
    position: absolute;
    width: 1920px;
    height: 9310px;
  }

  #top {
    width: 640px;
    height: 90px;
    left: 696px;
    top: 120px;
    position: relative;
  }

  #img2 {
    position: absolute;
    left: 180px;
    top: 0px;
  }

  #bgImg {
    position: sticky;
    left: 0px;
    top: 250px;
    width: 1920px;
    height: 700px;
  }

  #bgImg img {
    width: 100%;
    height: 100%;
  }

  #time {
    position: absolute;
    left: 220px;
    color: rgba(71, 71, 71, 1);
    font-family: PingFang-Regular;
    font-size: 24px;
  }

  #aler {
    position: absolute;
    top: 50px;
    color: rgba(130, 130, 130, 1);
    font-family: PingFang-Regular;
    font-size: 16px;
    left: 50px;
  }

  #listsContainer {
    position: relative;
    left: 590px;
    top: 200px;
  }

  #bgPic {
    position: sticky;
    width: 1920px;
    height: 720px;
    overflow: hidden;
  }

  #test1Foot {
    border-top: 1px solid black;
    margin-top: 500px;
  }

  .hoverIt :hover {
    cursor: pointer;
  }

  #sub {
    position: relative;
    width: 140px;
    height: 40px;
    border-radius: 23.5px;
    background: rgba(51, 51, 51, 1);
    color: rgba(255, 255, 255, 1);
    font-family: PingFang-Regular;
    font-size: 18px;
    top: 250px;
    left: 800px;
    line-height: 40px;
    text-align: center;
  }
</style>