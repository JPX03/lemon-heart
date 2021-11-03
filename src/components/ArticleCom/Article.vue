<template>
  <div>
    <div class="pictures-top">
      <div class="square">
        <img src="@/assets/pictures/Rectangle_25.png">
      </div>
      <div class="pictures-text">
        <span>精选文章</span>
      </div>
      <div class="border-black">
        <div class="border-1">
          <img src="@/assets/pictures/unsplash_Av_NirIguEc.png">
        </div>
        <div class="border-1-text">
          <span>致讨好型人格：你不必通过讨好换取爱</span>
        </div>
        <div class="border-1-text2">
          <span># 心理科普</span>
        </div>
        <div class="border-2">
          <img src="@/assets\pictures\think1.png">
        </div>
        <div class="border-2-text">
          <span>“我把自己活成了一座孤岛”：心中有爱，才会享受孤独</span>
        </div>
        <div class="border-2-text2">
          <span># 自我情绪</span>
        </div>
        <div class="border-3">
          <img src="@/assets\pictures\think2.png" alt="" />
        </div>
        <div class="border-3-text">
          <span>你不经意中的人生“自我设限”，如何突破？</span>
        </div>
        <div class="border-3-text2">
          <span># 自我情绪</span>
        </div>
      </div>
    </div>
    <ArticleNav id="ArticleNav" @changeKind='changeKind'></ArticleNav>
    <div id="ArticleListContainer">
      <router-link :to="'/Article/'+ item.id" v-for="item in Articles" :key="item.id">
        <ArticleList :imgSrc='item.passageImg' :title='item.passageTitle' :text="item.passageSmallTitle"
          :kind='item.passageLei'></ArticleList>
      </router-link>
    </div>
    <APages id="pages" :totalPage='totalPage' @changePage='changePage' :pageSize='pageSize' :pageNo='pageNo'></APages>
    <Foot id="foot"></Foot>
    -->
  </div>
</template>

<script>
  import ArticleNav from '@/components/ArticleCom/ArticleNav.vue';
  import ArticleList from '@/components/ArticleCom/ArticleList.vue'
  import APages from '@/components/ArticleCom/APages.vue'
  import request from '@/utils/request.js'
  export default {
    name: "Article",
    data() {
      return {
        Articles: [],
        showedArticles: [],
        pageSize: 6,   //每一页展示的文章数
        totalPage: {},//文章总数或某一类型文章总数
        kind: '',     //文章类型的名称
        pageNo: 1,    //当前页面索引值,初始化为1(在created时,调用值为1)
      }
    },
    components: {
      ArticleNav,
      ArticleList,
      APages,
    },
    methods: {
      async getAllArticle(pageNo) {
        await request({
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
      async getKindArticle(kinds) {
        await request({
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
          this.Articles = this.Articles.slice((this.pageNo - 1) * this.pageSize, this.pageNo * this.pageSize); //根据当前页面(pageNo)，截取要展示的数组
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
        this.pageNo = val;  //保存传递的页面索引值
        if (this.kind == 'all') {
          this.getAllArticle(val);
        } else {
          this.getKindArticle(this.kind)
        }
      },
    },
    created() {
      this.getAllArticle(this.pageNo);
    },
  }
</script>

<style scoped>
  .pictures-top {
    height: 850px;
    position: relative;
  }

  .square img {
    position: absolute;
    top: 102px;
    left: 259px;
    width: 47px;
  }

  .pictures-text span {
    position: absolute;
    top: 113.1px;
    left: 291px;
    width: 144px;
    height: 47.5px;
    /* background: rgba(71, 71, 71, 1); */
    color: rgba(71, 71, 71, 1);
    font-family: PingFang SC;
    font-size: 36px;
  }

  .border-black {
    width: 1400px;
    height: 500px;
    border: 0.6px solid rgba(0, 0, 0, 1);
    box-sizing: border-box;
    position: relative;
    top: 191px;
    left: 260px;
    margin-bottom: 260px;
  }

  .border-1 img {
    width: 405px;
    height: 367px;
    position: absolute;
  }

  .border-2 img {
    width: 515px;
    height: 246px;
    position: absolute;
    left: 405px;
    top: 251px;
    z-index: 99;
  }

  .border-3 img {
    position: absolute;
    width: 530px;
    height: 252px;
    left: 860px;
    right: 0;
    top: 0px;
    z-index: 1;
  }

  .border-1-text span {
    position: absolute;
    width: 346px;
    height: 68px;
    color: rgba(0, 0, 0, 1);
    font-family: FZBaoSong-Z04S;
    font-size: 24px;
    line-height: 139.999998%;
    left: 31px;
    top: 383px;
  }

  .border-1-text2 span {
    color: rgba(97, 97, 97, 1);
    font-family: PingFang-Regular;
    font-size: 18px;
    width: 98px;
    height: 23px;
    position: absolute;
    left: 35px;
    top: 475px;
  }

  .border-2-text span {
    width: 348px;
    height: 68px;
    text-align: right;
    color: rgba(0, 0, 0, 1);
    font-family: FZBaoSong-Z04S;
    font-size: 24px;
    line-height: 139.999998%;
    position: absolute;
    top: 82px;
    left: 491px;
  }

  .border-2-text2 span {
    width: 98px;
    height: 23px;
    color: rgba(97, 97, 97, 1);
    font-family: PingFang-Regular;
    font-size: 18px;
    position: absolute;
    left: 741px;
    top: 170px;
  }

  .border-3-text span {
    position: absolute;
    left: 954px;
    top: 351px;
    width: 375px;
    height: 68px;
    color: rgba(0, 0, 0, 1);
    font-family: FZBaoSong-Z04S;
    font-size: 24px;
    line-height: 139.999998%;
  }

  .border-3-text2 span {
    position: absolute;
    top: 439px;
    left: 954px;
    width: 98px;
    height: 23px;
    color: rgba(97, 97, 97, 1);
    font-family: PingFang-Regular;
    font-size: 18px;
  }

  #ArticleNav {
    position: relative;
    top: 0px;
    left: 260px;
    margin-bottom: 20px;
  }

  #ArticleListContainer {
    position: relative;
    height: 1470px;
    width: 920px;
    left: 260px;
    top: 20px;
  }

  #pages {
    position: relative;
    height: 100px;
    width: 900px;
    left: 245px;
    top: 170px;
  }

  #foot {
    margin-top: 300px;
  }
</style>