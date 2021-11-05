<template>
    <div class="hoverIt">
        <div id="container">
            <div id="line"></div>
            <div id="title">{{block1}}</div>
            <router-link :to='url2'>
                <div id="text1">{{block2}}</div>
            </router-link>
            <router-link :to='url3'>
                <div id="text2">{{block3}}</div>
            </router-link>
            <router-link :to='url4'>
                <div id="text3">{{block4}}</div>
            </router-link>
            <router-link :to='url5'>
                <div id="text4">{{block5}}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RelativeThing',
        props: {
            block1: {},
            url2:'',
            block2: {},
            url3:'',
            block3: {},
            url4:'',
            block4: {},
            url5:'',
            block5: {},
        }
    }
</script>

<style lang="less" scoped>
    .hoverIt :hover {
        cursor: pointer;
    }

    #container {
        position: relative;
    }

    #line {
        position: absolute;
        top:7px;
        width: 0.6px;
        height: 260px;
        background-color: rgba(0, 0, 0, 1);
    }

    #title {
        position: absolute;
        left: 24px;
        top: 5px;
        width: 96px;
        height: 34px;
        color: rgba(97, 97, 97, 1);
        font-family: PingFang SC;
        font-size: 24px;
    }

    #text1 {
        position: absolute;
        left: 24px;
        top: 65px;
        width: 317px;
        height: 48px;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 18px;
        line-height: 130.799997%;
    }

    #text2 {
        position: absolute;
        left: 24px;
        top: 130px;
        width: 317px;
        height: 48px;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 18px;
        line-height: 130.799997%;
    }

    #text3 {
        position: absolute;
        left: 24px;
        top: 195px;
        width: 317px;
        height: 48px;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 18px;
        line-height: 130.799997%;
    }

    #text4 {
        position: absolute;
        left: 24px;
        top: 260px;
        width: 317px;
        height: 48px;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 18px;
        line-height: 130.799997%;
    }
</style>