<template>
    <div id="toAsk">
        <div id="line"></div>
        <div id="toAsk1">向专家提问</div>
        <div id="toAsk2">已有66+心理专家入驻柠檬心理</div>
        <router-link  id="toAsk3" to="/PublishQ">
            去提问
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'ToAsk',
    }
</script>

<style lang="less" scoped>
    #toAsk {
        position: relative;
    }

    #line {
        position: absolute;
        width: 0.6px;
        height: 143px;
        background-color: rgba(0, 0, 0, 1);
    }

    #toAsk1 {
        position: absolute;
        left: 20px;
        width: 120px;
        height: 31px;
        color: rgba(97, 97, 97, 1);
        font-family: PingFang-Regular;
        font-size: 24px;
        line-height: 130.265629%;
    }

    #toAsk2 {
        position: absolute;
        top: 43px;
        left: 20px;
        width: 255px;
        height: 23px;
        color: rgba(97, 97, 97, 1);
        font-family: PingFang-Regular;
        font-size: 18px;
        line-height: 130.265629%;
    }

    #toAsk3 {
        position: absolute;
        top: 86px;
        left: 20px;
        width: 108px;
        height: 40px;
        border-radius: 100px;
        border: 0.6px solid rgba(0, 0, 0, 1);
        box-sizing: border-box;
        background: rgba(255, 255, 255, 1);
        color: rgba(71, 71, 71, 1);
        font-family: PingFang-Regular;
        font-size: 18px;
        line-height: 130.265629%;
        padding-left: 24px;
        padding-top: 7px;
    }
</style>