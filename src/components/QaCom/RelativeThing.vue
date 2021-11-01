<template>
    <div id="container">
        <div id="line"></div>
        <div id="title">{{block1}}</div>
        <div id="qes1">{{block2}}</div>
        <div id="qes2">{{block3}}</div>
        <div id="qes3">{{block4}}</div>
    </div>
</template>

<script>
    export default {
        name: 'RelativeThing',
        props: {
            block1: {},
            block2: {},
            block3: {},
            block4: {},
        }
    }
</script>

<style lang="less" scoped>
    #container {
        position: relative;
    }

    #line {
        position: absolute;
        width: 0.6px;
        height: 315px;
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

    #qes1 {
        position: absolute;
        left: 24px;
        top: 70px;
        width: 317px;
        height: 48px;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 18px;
        line-height: 130.799997%;
    }

    #qes2 {
        position: absolute;
        left: 24px;
        top: 160px;
        width: 317px;
        height: 48px;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 18px;
        line-height: 130.799997%;
    }

    #qes3 {
        position: absolute;
        left: 24px;
        top: 250px;
        width: 317px;
        height: 48px;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 18px;
        line-height: 130.799997%;
    }
</style>