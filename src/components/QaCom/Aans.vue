<template>
    <div id="container">
        <div id="line"></div>
        <img src="@/assets/pictures/infoHead2.png" id="img1">
        <div id="ansName">{{ansName}}</div>
        <div id="ansDate">{{ansDate}}</div>
        <div id="ansText">{{ansText}}</div>
    </div>
</template>

<script>
    export default {
        props:{
            ansName:{},
            ansDate:{},
            ansText:{},
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
        left: 0px;
    }

    #ansName {
        position: absolute;
        top: 42px;
        left: 42px;
        color: rgba(97, 97, 97, 1);
        font-family: PingFang-Regular;
        font-size: 18px;
        line-height: 130.265629%;
    }

    #ansDate {
        position: absolute;
        top: 40px;
        left: 135px;
        color: rgba(97, 97, 97, 1);
        font-family: PingFang-Regular;
        font-size: 14px;
        line-height: 193.265629%;
    }

    #ansText {
        position:relative;
        top:100px;
        color: rgba(97, 97, 97, 1);
        font-family: PingFang-Regular;
        font-size: 24px;
        line-height: 200%;
        width: 1020px;
    }
</style>