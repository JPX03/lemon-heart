<template>
    <div id="container">
        <div id='category'>精彩文章>{{Article.passageLei}}</div>
        <div id="title">{{Article.passageTitle}}</div>
        <div id="like1">{{Article.passageLike}}
            <img src="@/assets/pictures/like.png" id="img0">
        </div>
        <img :src='imgSrc' id="img1">
        <div id="content" v-for="item in Article.passageContent" :key="item.id">{{item}}</div>
        <div class="hoverIt">
            <div id="like2" @click="likeIt">
                <img src="@/assets/pictures/like.png" id="img2">
                <div id="likeNum">{{Article.passageLike}}</div>
            </div>
        </div>
        <div id='blank'></div>
        <RelativeThing id="relative" :block1='block1' :block2='block2' :block3='block3' :block4='block4'
            :block5='block5'></RelativeThing>
    </div>
</template>

<script>
    import request from '@/utils/request.js'
    import RelativeThing from '@/components/RelativeThing.vue'
    import img1 from '@/assets/pictures/science.png'
    import img2 from '@/assets/pictures/grow.png'
    import img3 from '@/assets/pictures/societ.png'
    import img4 from '@/assets/pictures/think.png'
    import img5 from '@/assets/pictures/mood.png'
    import img6 from '@/assets/pictures/emotion.png'
    export default {
        name: 'ArticleDetai',
        data() {
            return {
                ArticleId: this.$route.params.id,
                Article: {},
                imgSrc: '',
                block1: '相关文章',
                block2: '我该怎么接纳孤独，享受孤独，更好地与它相处？',
                block3: '解决孤独的根本方法是，你得拥有它',
                block4: '我该怎么接纳孤独，享受孤独，更好地与它相处？',
                block5: '你把自己照顾好了，你的世界就好了',
            }
        },
        components: {
            RelativeThing,
        },
        methods: {
            likeIt(){
                alert('点赞');
            },
            getArticle() {
                request({
                    methods: 'post',
                    url: '/passage/onePassage',
                    params: {
                        id: this.ArticleId,
                    }
                }).then(({
                    data: res
                }) => {
                    this.Article = res.data;
                    if (this.Article.passageLei == '#心理科普') {
                        this.imgSrc = img1;
                    } else if (this.Article.passageLei == '#自我觉察') {
                        this.imgSrc = img2;
                    } else if (this.Article.passageLei == '#人际社交') {
                        this.imgSrc = img3;
                    } else if (this.Article.passageLei == '#职场技能') {
                        this.imgSrc = img4;
                    } else if (this.Article.passageLei == '#家庭关系') {
                        this.imgSrc = img5;
                    } else if (this.Article.passageLei == '#婚恋情感') {
                        this.imgSrc = img6;
                    }
                    this.Article.passageLei = '\xa0\xa0' + this.Article.passageLei.slice(1);
                    this.Article.passageCategory = this.Article.passageCategory.slice(1);
                    this.Article.passageContent = this.Article.passageContent.split('。');
                    console.log(this.Article.passageContent);
                })
            },
        },
        created() {
            this.getArticle();
        },
    }
</script>

<style lang="less" scoped>
    #container {
        margin-top: 80px;
        margin-left: 260px;
        position: relative;
        width: 913px;
    }

    #category {
        color: rgba(97, 97, 97, 1);
        font-family: PingFang SC;
        font-size: 24px;
    }

    #title {
        margin-top: 32px;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 48px;
    }

    #like1 {
        margin-top: 16px;
        color: rgba(71, 71, 71, 1);
        font-family: PingFang SC;
        font-size: 18px;
        line-height: 130.765629%;
    }

    #img0 {
        position: relative;
        width: 16px;
        height: 16px;
        top: 1px;
    }

    #img1 {
        margin-top: 24px;
        width: 877px;
        height: 352px;
    }

    #content {
        color: rgba(71, 71, 71, 1);
        font-family: PingFang SC;
        font-size: 18px;
        margin-top: 30px;
        margin-bottom: 35px;
    }

    #relative {
        position: fixed;
        top: 360px;
        left: 1400px;
    }

    .hoverIt :hover {
        cursor: pointer;
    }

    #like2 {
        position: relative;
        left: 364px;
        top: 137px;
        width: 130px;
        height: 40px;
        border-radius: 23.5px;
        border: 0.6px solid rgba(0, 0, 0, 1);
        box-sizing: border-box;
        background: rgba(255, 255, 255, 1);
    }

    #img2 {
        position: absolute;
        left: 38px;
        top: 8px;
        width: 24px;
        height: 24px;
    }

    #likeNum {
        position: absolute;
        left: 77px;
        top: 6px;
        color: rgba(71, 71, 71, 1);
        font-family: PingFang SC;
        font-size: 18px;
        line-height: 150%;
    }

    #blank{
        height: 260px;
    }
</style>