<template>
  <div id="container">
    <div class="hoverIt">
      <img src="@/assets/pictures/close.png" id="close" @click="close" v-if="isShow1">
    </div>
    <video src="@/assets/pictures/press.mp4" autoplay='true' loop='true' id="mp4" v-if="isShow1"></video>
    <div id='container1' v-if="!isShow1">
      <div id="title1">减压动画</div>
      <div id="title2">放下烦恼，沉浸其中</div>
      <video src="@/assets/pictures/press.mp4" id="mp41" controls='true'></video>
    </div>
    <div id="container2" v-if="!isShow1">
      <img src="@/assets/pictures/Rectangle_25.png" id="img1">
      <div id="title3">推荐图书</div>
      <div id="Books">
        <BookList :imgSrc='imgSrc1' :text1='text1' :text2='text2' :text3='text3' :details='details1' :buy='buy1'
          id="book1"></BookList>
        <BookList :imgSrc='imgSrc2' :text1='text4' :text2='text5' :text3='text6' :details='details2' :buy='buy3'
          id="book2"></BookList>
        <BookList :imgSrc='imgSrc3' :text1='text7' :text2='text8' :text3='text9' :details='details2' :buy='buy3'
          id="book3"></BookList>
      </div>
      <div id="container3" v-if="!isShow1">
        <img src="@/assets/pictures/Rectangle_25.png" id="img2">
        <div id="title4">推荐视频</div>
        <div id="container4">
          <VideoList :videoHref='href1' :pic="src1" :des='des1' id="vid1"></VideoList>
          <VideoList :videoHref='href2' :pic="src2" :des='des2' id="vid2"></VideoList>
          <VideoList :videoHref='href3' :pic="src3" :des='des3' id="vid3"></VideoList>
          <VideoList :videoHref='href4' :pic="src4" :des='des4' id="vid4"></VideoList>
          <VideoList :videoHref='href5' :pic="src5" :des='des5' id="vid5"></VideoList>
          <VideoList :videoHref='href6' :pic="src6" :des='des6' id="vid6" :isShowTurn="isShowTurn"></VideoList>
        </div>
      </div>
      <div id="container5" v-if="!isShow1">
        <img src="@/assets/pictures/Rectangle_25.png" id="img3">
        <div id="title4">推荐FM</div>
        <div id="container6">
          <img src="@/assets/pictures/otherWeb.png" id="img4">
          <div id="title5">壹心理提供多场景多心情的电台，在你忧伤、抑郁、孤独的时候给予你力量</div>
          <div id="go">
            <a href="http://fm.xinli001.com/99405382">前往</a>
          </div>
        </div>
      </div>
    </div>
    <Foot v-if="!isShow1" id="foot"></Foot>
  </div>
</template>

<script>
  import BookList from '@/components/MoreCom/BookList.vue'
  import VideoList from '@/components/MoreCom/VideoList.vue'
  import img1 from '@/assets/pictures/book1.png'
  import img2 from '@/assets/pictures/book2.png'
  import img3 from '@/assets/pictures/book3.png'
  import img4 from '@/assets/pictures/video1.png'
  import img5 from '@/assets/pictures/video2.png'
  import img6 from '@/assets/pictures/video3.png'
  import img7 from '@/assets/pictures/video4.png'
  import img8 from '@/assets/pictures/video5.png'
  import img9 from '@/assets/pictures/video6.png'

  export default {
    name: 'More',
    components: {
      BookList,
      VideoList,
    },
    data() {
      return {
        isShow1: true,
        imgSrc1: img1,
        text1: '被讨厌的勇气',
        text2: '克服你内心的自卑，不再为琐事烦恼',
        text3: '被讨厌的勇气并不是要去吸引被讨厌的负向能量，而是，如果这是我生命想绽放出最美的光彩，那么即使有被讨厌的可能，我都要用自己的双手双脚往那里走去。因为拥有了被讨厌的勇气，于是有了真正幸福的可能。你是否常常对繁琐的生活感到乏味？你是否时时为复杂的人际关系感到疲惫？',
        details1: 'https://book.douban.com/subject/26369699/',
        buy1: 'http://product.dangdang.com/28518072.html?_ddclickunion=P-306226-0-s26369699|ad_type=0|sys_id=1#dd_refer=https%3A%2F%2Fbook.douban.com%2Flink2%2F%3Flowest%3D1300%26pre%3D0%26vendor%3Ddangdang%26srcpage%3Dsubject%26price%3D2480%26pos%3D1%26url%3Dhttp%253a%252f%252funion.dangdang.com%252ftransfer.php%253ffrom%253dp-306226-0-s26369699%2526backurl%253dhttp%253a%252f%252fproduct.dangdang.com%252fproduct.aspx%253fproduct_id%253d28518072%26cntvendor%3D5%26srcsubj%3D26369699%26type%3Dbkbuy%26subject%3D26369699',
        imgSrc2: img2,
        text4: '爱的艺术',
        text5: '恋爱也是一种艺术',
        text6: '爱情不是一种与人的成熟程度无关，只需要投入身心的感情。如果没有爱他人的能力，如果不能真正勇敢地、真诚地爱他人，那么人们在自己的爱情生活中也永远得不到满足。爱不仅是狭隘的男女爱情，爱是人格整体的展现，要发展爱的能力，就要努力发展自己的人格，并朝着有益的目标迈进。',
        details2: 'https://book.douban.com/subject/3026879/',
        buy2: "http://item.kongfz.com/book/62535778.html?push_type=5&min_price=17.70",
        imgSrc3: img3,
        text7: '心流',
        text8: '沉浸其中，忘记自我',
        text9: "“心流”是指我们在做某些事情时，那种全神贯注、投入忘我的状态——这种状态下，你甚至感觉不到时间的存在，事情完成之后我们会有一种充满能量并且非常满足的感受。若能有效地运用心流，我们将能更高效更专注地完成工作和学习等事情中。",
        details3: 'https://book.douban.com/subject/27186106/',
        buy3: 'http://product.dangdang.com/25183660.html?_ddclickunion=P-306226-0-s27186106|ad_type=0|sys_id=1#dd_refer=https%3A%2F%2Fbook.douban.com%2Flink2%2F%3Flowest%3D1300%26pre%3D0%26vendor%3Ddangdang%26srcpage%3Dsubject%26price%3D4900%26pos%3D1%26url%3Dhttp%253a%252f%252funion.dangdang.com%252ftransfer.php%253ffrom%253dp-306226-0-s27186106%2526backurl%253dhttp%253a%252f%252fproduct.dangdang.com%252fproduct.aspx%253fproduct_id%253d25183660%26cntvendor%3D6%26srcsubj%3D27186106%26type%3Dbkbuy%26subject%3D27186106',
        href1: 'https://www.bilibili.com/video/BV1t4411u7Tz/?spm_id_from=333.788.recommend_more_video.0',
        src1: img4,
        des1: '为什么你总是无法专心学习和工作？',
        href2: 'https://www.bilibili.com/video/BV1aE411p72r/?spm_id_from=333.788.recommend_more_video.6',
        src2: img5,
        des2: '总是逃避各种事情？你比想象的更强大！',
        href3: 'https://www.bilibili.com/video/BV1o54y1a7QU',
        src3: img6,
        des3: '爱情的秘诀，不是讲道理',
        href4: "https://www.bilibili.com/video/BV1L4411w7yK",
        src4: img7,
        des4: '好人真的一生平安？学会残忍，是你的保障',
        href5: 'https://www.bilibili.com/video/BV1yT4y1P7Pf/?spm_id_from=333.788.recommend_more_video.9',
        src5: img8,
        href6: '/More',
        des5: '不要再浪费眼前的时间和机会',
        src6: img9,
        des6: '',
        isShowTurn: false,
      }
    },
    methods: {
      close() {
        this.isShow1 = false;
      }
    }
  }
</script>

<style lang="less" scoped>
  #container {
    width: 1920px;
  }

  .hoverIt :hover {
    cursor: pointer;
  }

  #close {
    position: absolute;
    z-index: 1001;
    top: -80px;
    right: 20px;
  }

  #mp4 {
    z-index: 1000;
    position: absolute;
    top: -81px;
    min-width: 100%;
    min-height: 100%;
    object-fit: fill;
    width: auto;
    height: auto;
    background-size: cover;
  }

  #container1 {
    height: 880px;
    position: relative;
  }

  #title1 {
    position: absolute;
    color: rgba(0, 0, 0, 1);
    font-family: FZBaoSong-Z04S;
    font-size: 48px;
    top: 173px;
    left: 864px;
  }

  #title2 {
    position: absolute;
    color: rgba(0, 0, 0, 1);
    font-family: PingFang-ExtraLight-2;
    font-size: 24px;
    top: 238px;
    left: 852px;
  }

  #mp41 {
    position: absolute;
    width: 1400px;
    height: 592px;
    left: 260px;
    top: 312px;
  }

  #container2 {
    width: 1400px;
    position: relative;
  }

  #img1 {
    position: absolute;
    left: 873px;
    top: 149px;
  }

  #title3 {
    position: absolute;
    top: 165px;
    left: 903px;
    color: rgba(0, 0, 0, 1);
    font-family: FZBaoSong-Z04S;
    font-size: 36px;
  }

  #book1 {
    position: absolute;
    width: 1400px;
    height: 472px;
    border: 0.6px solid rgba(0, 0, 0, 1);
    left: 260px;
    top: 297px;
  }

  #book2 {
    position: absolute;
    width: 1400px;
    height: 472px;
    border: 0.6px solid rgba(0, 0, 0, 1);
    left: 260px;
    top: 769px;
  }

  #book3 {
    position: absolute;
    width: 1400px;
    height: 472px;
    border: 0.6px solid rgba(0, 0, 0, 1);
    left: 260px;
    top: 1241px;
  }

  #container3 {
    width: 1400px;
    position: relative;
    top: 1860px;
  }

  #img2 {
    position: absolute;
    left: 873px;
  }

  #title4 {
    position: absolute;
    left: 903px;
    color: rgba(0, 0, 0, 1);
    font-family: FZBaoSong-Z04S;
    font-size: 36px;
    top: 15px;
  }

  #container4 {
    width: 1400px;
    height: 660px;
    border: 0.6px solid rgba(0, 0, 0, 1);
    position: absolute;
    left: 260px;
    top: 90px;
  }

  #vid1 {
    position: absolute;
    top: 34px;
    left: 100px;
  }

  #vid2 {
    position: absolute;
    top: 34px;
    left: 523px;
  }

  #vid3 {
    position: absolute;
    top: 34px;
    left: 945px;
  }

  #vid4 {
    position: absolute;
    top: 344px;
    left: 100px;
  }

  #vid5 {
    position: absolute;
    top: 344px;
    left: 523px;
  }

  #vid6 {
    position: absolute;
    top: 344px;
    left: 945px;
  }

  #container5 {
    width: 1400px;
    position: relative;
    top: 2760px;
  }

  #img3 {
    position: absolute;
    left: 873px;
  }

  #title4 {
    position: absolute;
    left: 905px;
    top: 15px;
    color: rgba(0, 0, 0, 1);
    font-family: FZBaoSong-Z04S;
    font-size: 36px;
  }

  #container6 {
    position: absolute;
    width: 1400px;
    height: 400PX;
    border: 0.6px solid rgba(0, 0, 0, 1);
    left: 260px;
    top: 100px;
  }

  #img4 {
    position: absolute;
    width: 150px;
    height: 37px;
    left: 625px;
    top: 128px;
  }

  #title5 {
    position: absolute;
    left: 304px;
    top: 187px;
    color: rgba(0, 0, 0, 1);
    font-family: FZBaoSong-Z04S;
    font-size: 24px;
  }

  #go {
    position: absolute;
    top: 249px;
    left: 645px;
    width: 110px;
    height: 40px;
    border-radius: 20px;
    border: 0.6px solid rgba(0, 0, 0, 1);
    box-sizing: border-box;
    background: rgba(255, 255, 255, 1);
    color: rgba(71, 71, 71, 1);
    font-family: PingFang-Regular;
    font-size: 18px;
    line-height: 188.000011%;
    padding-left: 37px;
  }

  #go :hover{
    cursor: pointer;
  }

  #foot{
    position: relative;
    top: 3350px;
    border-top: 0.6px solid rgba(0, 0, 0, 1);
  }
</style>