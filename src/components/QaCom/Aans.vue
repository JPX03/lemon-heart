<template>
    <div id="container">
        <div id='title'>{{title}}</div>
        <img src="@/assets/pictures/infoHead.png" id="img1">
        <div id="name">name</div>
        <div id="date">{{date}}</div>
        <div id="text">{{text}}</div>
        <div class="hoverIt">
            <div id="like" @click="likeIt">
                <img id="img2" src="@/assets/pictures/like.png">
                <div id="likeNum">{{likeNum}}</div>
            </div>
        </div>
        <div class="hoverIt" v-if="!isAnsing" @click="ansing">
            <div id="toAns">写回答</div>
        </div>
        <div id="ansContainer" v-if="isAnsing">
            <textarea id="inp" placeholder="请输入你的看法，字数1000字以内" v-model="ansContent"></textarea>
            <div class="hoverIt">
                <div id="cancle" @click="cancle">取消</div>
                <div id="publish" @click="publish">发布</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isAnsing: false,
            }
        },
        methods: {
            likeIt() {
                console.log("点赞")
            },
            ansing(){
                this.isAnsing=true;
            },
            cancle(){
                this.isAnsing=false;
            }
        },
        props: {
            title: {},
            date: {},
            text: {},
            likeNum: {},
            questionId: {},
        }
    }
</script>

<style lang="less" scoped>
    #container {
        width: 1020px;
        height: 700px;
        position: relative;
    }

    #title {
        position: absolute;
        top: 0px;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 36px;
        line-height: 130.265629%;
    }

    #img1 {
        position: absolute;
        top: 60px;
        width: 28px;
        height: 28px;
    }

    #name {
        position: absolute;
        top: 60px;
        left: 35px;
        color: rgba(97, 97, 97, 1);
        font-family: PingFang SC;
        font-size: 18px;
        line-height: 130.265629%;
    }

    #date {
        position: absolute;
        top: 58px;
        left: 110px;
        color: rgba(97, 97, 97, 1);
        font-family: PingFang SC;
        font-size: 14px;
        line-height: 193.265629%;
    }

    #text {
        position: absolute;
        top: 120px;
        color: rgba(97, 97, 97, 1);
        font-family: PingFang SC;
        font-size: 21px;
        line-height: 193.265629%;
    }

    #like {
        position: absolute;
        top: 450px;
        width: 130px;
        height: 40px;
        border-radius: 23.5px;
        border: 0.6px solid rgba(0, 0, 0, 1);
        box-sizing: border-box;
        background: rgba(255, 255, 255, 1);
    }

    .hoverIt :hover {
        cursor: pointer;
    }

    #toAns {
        position: absolute;
        top: 450px;
        left: 160px;
        width: 130px;
        height: 40px;
        border-radius: 23.5px;
        border: 0.6px solid rgba(0, 0, 0, 1);
        box-sizing: border-box;
        background: rgba(255, 255, 255, 1);
        text-align: center;
        font-family: PingFang SC;
        font-size: 18px;
        line-height: 150%;
        padding-top: 5px;
        color: rgba(71, 71, 71, 1);
    }

    #toAns a {
        width: 100%;
        height: 100%;
    }

    #img2 {
        position: absolute;
        top: 8px;
        left: 41px;
        width: 24px;
        height: 24px;
    }

    #likeNum {
        position: absolute;
        top: 6px;
        left: 77px;
        color: rgba(71, 71, 71, 1);
        font-family: PingFang SC;
        font-size: 18px;
        line-height: 150%;
    }

    #ansContainer {
        position: absolute;
        top: 520px;
        width: 1030px;
        height: 260px;
    }

    #inp {
        width: 1030px;
        height: 200px;
        color: rgba(130, 130, 130, 1);
        font-family: PingFang SC;
        font-size: 18px;
        line-height: 150%;
        margin-bottom: 10px;
    }

    #cancle {
        position: relative;
        left: 786px;
        width: 108px;
        height: 45px;
        border-radius: 23.5px;
        border: 0.6px solid rgba(0, 0, 0, 1);
        box-sizing: border-box;
        background: rgba(255, 255, 255, 1);
        color: rgba(71, 71, 71, 1);
        font-family: PingFang SC;
        font-size: 18px;
        line-height: 150%;
        text-align: center;
        padding-top: 5px;
    }

    #publish {
        position: relative;
        left: 914px;
        top: -45px;
        width: 108px;
        height: 40px;
        border-radius: 23.5px;
        background: rgba(51, 51, 51, 1);
        color: rgba(255, 255, 255, 1);
        font-family: PingFang SC;
        font-size: 18px;
        line-height: 150%;
        text-align: center;
        padding-top: 5px;
    }
</style>