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
        font-size: 28px;
    }

    #text {
        position: absolute;
        top: 67px;
        left: 286px;
        height: 52px;
        width: 700px;
        color: rgb(182, 165, 165);
        font-family: PingFang-Regular;
        font-weight: 100;
        font-size: 18px;
        line-height: 150.765629%;
    }

    #kind {
        position: absolute;
        top: 178px;
        left: 286px;
        height: 25px;
        color: rgb(153, 143, 143);
        font-family: PingFang-Regular;
        font-size: 18px;
    }
</style>