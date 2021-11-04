<template>
    <div id="container">
        <img :src="imgSrc">
        <div id="title">{{title}}</div>
        <div id="text">{{text}}</div>
        <div id="kind">{{kind}}</div>
    </div>
</template>

<script>
    export default {
        name: 'ArtivleList',
        props:{
            imgSrc:{},
            title:{},
            text:{},
            kind:{},
        }
    }
</script>

<style lang="less" scoped>
    #container {
        width: 100%px;
        height: 262px;
        position: relative;
    }

    img {
        width: 250px;
        height: 250px;
        position: absolute;
    }

    #title {
        position: absolute;
        top: 21px;
        left: 286px;
        height: 26px;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 24px;
    }

    #text {
        position: absolute;
        top: 67px;
        left: 286px;
        height: 52px;
        color: rgba(0, 0, 0, 1);
        font-family: PingFangSC-ExtraLight;
        font-size: 20px;
        line-height: 130.765629%;
    }

    #kind {
        position: absolute;
        top: 178px;
        left: 286px;
        height: 25px;
        color: rgba(130, 130, 130, 1);
        font-family: PingFang SC;
        font-size: 18px;
    }
</style>