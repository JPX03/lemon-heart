<template>
    <div id='container'>
        <img :src="imgSrc" id="img">
        <div id="text1">{{text1}}</div>
        <div id="text2">{{text2}}</div>
        <div id="text3">{{text3}}</div>
        <div class="hoverIt">
            <div id="btn1">
                <a :href="details">查看详情</a>
            </div>
            <div id="btn2">
                <a :href='buy'>购买</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BookList',
        data() {
            return {

            }
        },
        props: {
            imgSrc: '',
            text1: '',
            text2: '',
            text3: '',
            details: '',
            buy: '',
        }
    }
</script>

<style>
    #container {
        width: 1400px;
        height: 472px;
        position: relative;
    }

    #img {
        position: absolute;
        top: 71px;
        left: 100px;
        width: 249px;
        height: 330px;
    }

    #text1 {
        position: absolute;
        width: 168px;
        top: 71px;
        left: 397px;
        color: rgba(71, 71, 71, 1);
        font-family: PingFang-Regular;
        font-size: 28px;
    }

    #text2 {
        position: absolute;
        width: 288px;
        top: 118px;
        left: 397px;
        color: rgba(97, 97, 97, 1);
        font-family: PingFang-Regular;
        font-size: 18px;
    }

    #text3 {
        position: absolute;
        width: 501px;
        top: 183px;
        left: 397px;
        color: rgba(130, 130, 130, 1);
        font-family: PingFang-Regular;
        font-size: 18px;
        line-height: 220.000005%;
    }

    #btn1 {
        position: absolute;
        top: 320px;
        left: 1030px;
        width: 137px;
        height: 40px;
        border-radius: 20px;
        border: 0.6px solid rgba(0, 0, 0, 1);
        box-sizing: border-box;
        background: rgba(255, 255, 255, 1);
        font-family: PingFang-Regular;
        font-size: 18px;
        line-height: 188.000011%;
        padding-left: 30px;
        line-height: 40px;
    }

    #btn2 {
        position: absolute;
        top: 320px;
        left: 1198px;
        width: 137px;
        height: 40px;
        border-radius: 20px;
        border: 0.6px solid rgba(0, 0, 0, 1);
        box-sizing: border-box;
        background: rgba(255, 255, 255, 1);
        font-family: PingFang-Regular;
        font-size: 18px;
        line-height: 188.000011%;
        line-height: 40px;
        padding-left: 50px;
    }

    a {
        color: rgba(71, 71, 71, 1);
    }
</style>