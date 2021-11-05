<template>
  <div>
    <ArticleTop id="top"></ArticleTop>
    <RelativeThing id="relative1" :block1='block1' :block2='block2' :block3='block3' :block4='block4'></RelativeThing>
    <div id="toAsk">
      <router-link to="/PublishQ">
        <div>去提问></div>
      </router-link>
    </div>
    <RelativeThing id="relative2" :block1='block5' :block2='block6' :block4='block7'></RelativeThing>
    <div id="moreBook">
      <router-link to='/Book'>
        <div>更多></div>
      </router-link>
    </div>
    <ArticleNav id="ArticleNav" @changeKind='changeKind'></ArticleNav>
    <div id="ArticleListContainer">
      <router-link :to="'/Article/'+ item.id" v-for="item in Articles" :key="item.id">
        <ArticleList :imgSrc='item.passageImg' :title='item.passageTitle' :text="item.passageSmallTitle"
          :kind='item.passageLei'></ArticleList>
      </router-link>
    </div>
    <Paging id="pages" :totalPage='totalPage' @changePage='changePage' :pageSize='pageSize' :pageNo='pageNo'></Paging>
    <div id="testContainer">
      <div>
        <img src="@/assets/pictures/Rectangle_25.png" id="img1">
        <div id="title">心理测试</div>
      </div>
      <ToTestBlock id='test1' :urlA='url1' :block1='text1' :block2='text2' :block3='text3'></ToTestBlock>
      <ToTestBlock id='test2' :urlA='url2' :block1='text4' :block2='text5' :block3='text6'></ToTestBlock>
      <ToTestBlock id='test3' :urlA='url3' :block1='text7' :block2='text8' :block3='text9'></ToTestBlock>
      <div id="moreTest">
        <router-link to='/Test/'>
          <div>更多心理测试></div>
        </router-link>
      </div>
    </div>
    <Foot id="foot"></Foot>
  </div>
</template>

<script>
  import ArticleTop from '@/components/ArticleCom/ArticleTop.vue';
  import RelativeThing from '@/components/RelativeThing.vue';
  import ArticleNav from '@/components/ArticleCom/ArticleNav.vue';
  import ArticleList from '@/components/ArticleCom/ArticleList.vue';
  import Paging from '@/components/Paging.vue';
  import request from '@/utils/request.js';
  import ToTestBlock from '@/components/ArticleCom/ToTestBlock.vue';
  export default {
    name: "Article",
    data() {
      return {
        Articles: [],
        showedArticles: [],
        pageSize: 6, //每一页展示的文章数
        totalPage: {}, //文章总数或某一类型文章总数
        kind: '', //文章类型的名称
        pageNo: 1, //当前页面索引值,初始化为1(在created时,调用值为1)
        block1: '精彩问答',
        block2: '',
        block3: '',
        block4: '',
        block5: '推荐图书',
        block6: '《被讨厌的勇气》太在意别人的看法？个体心理学创始者阿德勒带你走出自卑与困境',
        block7: '《心流》做事老分心？积极心理学奠基人之一米哈里让你全身心投入事情中',
        url1: '/Test1',
        text1: '人',
        text2: '格测试',
        text3: '看看你属于哪种性格',
        url2: '/Test2',
        text4: '焦',
        text5: '虑测试',
        text6: '别让焦虑毁了你的人生',
        url3: '/Test3',
        text7: '抑',
        text8: '郁测试',
        text9: '测测你的抑郁情绪状态',
      }
    },
    components: {
      ArticleTop,
      RelativeThing,
      ArticleNav,
      ArticleList,
      Paging,
      ToTestBlock,
    },
    methods: {
      getAllArticle(pageNo) {
        request({
          method: 'post',
          url: '/passage/listAllByPage',
          params: {
            pageNo: pageNo
          }
        }).then(({
          data: res
        }) => {
          this.totalPage = res.data.total;
          this.$set(this, 'Articles', res.data.records);
          this.kind = 'all';
        })
      },
      getKindArticle(kinds) {
        request({
          methods: 'post',
          url: '/passage/listPassageByLei',
          params: {
            passageLei: kinds
          }
        }).then(({
          data: res
        }) => {
          this.totalPage = res.data.length; //获取本类型所有文章数
          this.$set(this, 'Articles', res.data); //将所有文章存入Articles数组
          this.Articles = this.Articles.slice((this.pageNo - 1) * this.pageSize, this.pageNo * this
            .pageSize); //根据当前页面(pageNo)，截取要展示的数组
        })
      },
      getThreeArticle() {
        request({
          methods: 'post',
          url: '/question/listRandomThree',
        }).then(({
          data: res
        }) => {
          this.block2=res.data[0].questionTitile;
          this.block3=res.data[1].questionTitile;
          this.block4=res.data[2].questionTitile;

        })
      },
      changeKind(val) {
        this.pageNo = 1; //每次切换文章类型时，把初始页面数设置1
        if (val == '全部') {
          this.getAllArticle(this.pageNo);
        } else {
          this.kind = val;
          this.getKindArticle(this.kind);
        }
      },
      changePage(val) {
        this.pageNo = val; //保存传递的页面索引值
        if (this.kind == 'all') {
          this.getAllArticle(val);
        } else {
          this.getKindArticle(this.kind)
        }
      },
    },
    created() {
      this.getAllArticle(this.pageNo);
      this.getThreeArticle();
    },
  }
</script>

<style scoped>
  #relative1 {
    position: relative;
    top: 100px;
    left: 1400px;
    width: 200px;
  }


  #toAsk {
    position: relative;
    top: 130px;
    left: 1650px;
    width: 65px;
    overflow: hidden;
  }

  #toAsk :hover {
    cursor: pointer;
  }

  #toAsk a {
    color: rgba(97, 97, 97, 1);
    font-family: PingFang SC;
    font-size: 16px;
  }

  #relative2 {
    position: relative;
    top: 500px;
    left: 1400px;
    width: 200px;
  }

  #moreBook {
    position: relative;
    top: 530px;
    left: 1670px;
    width: 50px;
    overflow: hidden;
  }

  #moreBook :hover {
    cursor: pointer;
  }

  #moreBook a {
    color: rgba(97, 97, 97, 1);
    font-family: PingFang SC;
    font-size: 16px;
  }

  #ArticleNav {
    position: relative;
    top: 0px;
    left: 260px;
    margin-bottom: 20px;
    width: 1000px;
    overflow: hidden;
  }

  #ArticleListContainer {
    position: relative;
    height: 1700px;
    width: 920px;
    left: 260px;
    top: 20px;
  }

  #pages {
    position: relative;
    height: 100px;
    width: 900px;
    left: 245px;
    top: 0px;
  }

  #testContainer {
    position: relative;
    height: 475px;
    width: 1920px;
    border-top: 0.6px solid rgba(0, 0, 0, 1);
  }

  #img1 {
    position: absolute;
    width: 50px;
    height: 50px;
    top: 119px;
    left: 870px;
  }

  #title {
    position: absolute;
    top: 140px;
    left: 900px;
    color: rgba(71, 71, 71, 1);
    font-family: PingFang SC;
    font-size: 36px;
  }

  #test1 {
    position: absolute;
    top: 260px;
    left: 373px;
  }

  #test2 {
    position: absolute;
    top: 260px;
    left: 854px;
  }

  #test3 {
    position: absolute;
    top: 260px;
    left: 1335px;
  }

  #moreTest {
    position: absolute;
    top: 506px;
    left: 906px;
    text-decoration: underline;
  }

  #moreTest :hover {
    cursor: pointer;
  }

  #moreTest a {
    color: rgba(97, 97, 97, 1);
    font-family: PingFang SC;
    font-size: 18px;
  }

  #foot{
    position: relative;
    border-top: 0.6px solid rgba(0, 0, 0, 1);;
  }
</style>