<template>
    <div>
        <div id="container1">
            <div id='category'>精彩文章 >{{Article.passageLei}}</div>
            <div id="title">{{Article.passageTitle}}</div>
            <div id="like1">{{Article.passageLike}}
                <img src="@/assets/pictures/like.png" id="img0">
            </div>
            <img :src='imgSrc' id="img1">
            <div id="content" v-for="item in Article.passageContent" :key="item.id">{{item}}</div>
            <div class="hoverIt">
                <div id="like2" @click="likeIt" :style="{'background':bgc1}">
                    <img :src="img2Src" id="img2">
                    <div id="likeNum" :style="{'color':color1}">{{likeNum}}</div>
                </div>
            </div>
            <div id='blank'></div>
            <RelativeThing id="relative" :block1='block1' :block2='block2' :block3='block3' :block4='block4'
                :block5='block5' :url2='url2' :url3='url3' :url4='url4' :url5='url5'></RelativeThing>
        </div>
        <Foot id="Foot"></Foot>
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
    import like1 from '@/assets/pictures/like.png'
    import like2 from '@/assets/pictures/like2.png'
    export default {
        name: 'ArticleDetai',
        data() {
            return {
                ArticleId: this.$route.params.id,
                Article: {},
                imgSrc: '',
                block1: '相关文章',
                block2: '',
                block3: '',
                block4: '',
                block5: '',
                url2: '',
                url3: '',
                url4: '',
                url5: '',
                likeNum: '',
                canLike: true,
                img2Src: like1,
                bgc1: 'rgba(255, 255, 255, 1)',
                color1: 'rgba(71, 71, 71, 1)',
            }
        },
        components: {
            RelativeThing,
        },
        methods: {
            likeIt() {
                if (!this.cookie.getCookie('userName')) {
                    alert('请先登录');
                } else if (this.canLike) {
                    request({
                        method: 'post',
                        url: '/passage/pressLike',
                        params: {
                            id: this.ArticleId,
                        }
                    }).then((response => {
                        this.likeNum = response.data.data;
                        this.img2Src = like2;
                        this.bgc1 = 'rgba(71, 71, 71, 1)';
                        this.color1 = 'rgba(255, 255, 255, 1)';
                        this.canLike = false;
                    }))
                } else {
                    alert('你已经点过赞了噢~')
                }
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
                    this.likeNum = this.Article.passageLike;
                    this.Article.passageLei = '\xa0\xa0' + this.Article.passageLei.slice(1);
                    this.Article.passageCategory = this.Article.passageCategory.slice(1);
                    this.Article.passageContent = this.Article.passageContent.split('。');
                })
            },
            getThreeArticle() {
                let num = Math.round(Math.random() * 7 + 1);
                request({
                    methods: 'post',
                    url: '/passage/listAllByPage',
                    params: {
                        pageNo: num,
                        pageSize: 5,
                    }
                }).then(({
                    data: res
                }) => {
                    this.block2 = res.data.records[0].passageTitle;
                    this.url2 = '/Article/' + `${res.data.records[0].id}`;
                    this.block3 = res.data.records[1].passageTitle;
                    this.url3 = '/Article/' + `${res.data.records[1].id}`;
                    this.block4 = res.data.records[2].passageTitle;
                    this.url4 = '/Article/' + `${res.data.records[2].id}`;
                    this.block5 = res.data.records[3].passageTitle;
                    this.url5 = '/Article/' + `${res.data.records[3].id}`;
                })
            }
        },
        created() {
            this.getArticle();
            this.getThreeArticle();
        },
        watch: {
            '$route'(to, from) {
                location.reload();
            }
        },
    }
</script>

<style lang="less" scoped>
    #container1 {
        margin-top: 80px;
        margin-left: 260px;
        position: relative;
        width: 913px;
    }

    #category {
        color: rgba(97, 97, 97, 1);
        font-family: PingFang-Regular;
        font-size: 20px;
    }

    #title {
        margin-top: 32px;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 48px;
        line-height: 150%;
    }

    #like1 {
        margin-top: 16px;
        color: rgba(71, 71, 71, 1);
        font-family: PingFang-Regular;
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
        position: relative;
        left: 0px;
        width: 877px;
        height: 352px;
        top: 25px;
        margin-bottom: 60px;
    }

    #content {
        position: relative;
        color: rgba(71, 71, 71, 1);
        font-family: PingFang-Regular;
        font-size: 20px;
        line-height: 180%;
        margin-top: 30px;
        margin-bottom: 35px;
    }

    #relative {
        position: fixed;
        top: 160px;
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
        border: 1px solid #282828;
        box-sizing: border-box;
    }

    #img2 {
        position: absolute;
        left: 36px;
        top: 8px;
        width: 24px;
        height: 24px;
    }

    #likeNum {
        position: absolute;
        left: 70px;
        top: 6px;
        font-family: PingFang-Regular;
        font-size: 18px;
        line-height: 150%;
    }

    #blank {
        height: 260px;
    }

    #Foot {
        margin-top: 170px;
        border-top: 1px solid black;
    }
</style>