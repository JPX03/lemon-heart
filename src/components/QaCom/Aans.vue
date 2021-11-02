<template>
    <div id="container">
        <div id="line"></div>
        <img src="@/assets/pictures/infoHead2.png" id="img1">
        <div id="name">{{name}}</div>
        <div id="date">{{date}}</div>
        <div id="text">{{text}}</div>
    </div>
</template>

<script>
    export default {
        props:{
            name:{},
            date:{},
            text:{},
        },
    }
</script>

<style lang="less" scoped>
    #container {
        width: 1020px;
        height: 500px;
        position: relative;
    }

    #line {
        width: 1027px;
        height: 1px;
        background-color: rgba(203, 203, 203, 1);
    }

    #img1 {
        position: absolute;
        top: 37px;
        height: 30px;
        width: 35px;
    }

    #name {
        position: absolute;
        top: 42px;
        left: 50px;
        color: rgba(97, 97, 97, 1);
        font-family: PingFang SC;
        font-size: 18px;
        line-height: 130.265629%;
    }

    #date {
        position: absolute;
        top: 37px;
        left: 135px;
        color: rgba(97, 97, 97, 1);
        font-family: PingFang SC;
        font-size: 14px;
        line-height: 193.265629%;
    }

    #text {
        position: absolute;
        top:100px;
        color: rgba(97, 97, 97, 1);
        font-family: PingFang SC;
        font-size: 24px;
        line-height: 200%;
    }
</style>