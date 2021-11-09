<template>
    <div id="container">
        <div id="line"></div>
        <div id='block1'>{{block1}}
            <span id="block2">{{block2}}</span>
        </div>
        <div id="block3">{{block3}}</div>
        <ToTestButton :urlB='urlA' id="block4"></ToTestButton>
    </div>
</template>

<script>
    import ToTestButton from '@/components/ArticleCom/ToTestButton.vue'
    export default {
        name: 'ToTestBlock',
        components: {
            ToTestButton,
        },
        data() {
            return {
            }
        },
        props: {
            urlA: "",
            block1:'',
            block2:'',
            block3:'',
        }
    }
</script>

<style lang="less" scoped>
    #container {
        height: 170px;
        width: 450px;
        position: relative;
    }

    #line {
        position: absolute;
        width: 0.6px;
        height: 166px;
        background-color: rgba(0, 0, 0, 1);
    }

    #block1 {
        position: absolute;
        top: 21px;
        left: 39px;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 48px;
    }

    #block2 {
        position: absolute;
        font-size: 24px;
        top: 22px;
        width: 450px;
    }

    #block3 {
        position: absolute;
        top: 82px;
        left: 39px;
        width: 450px;
        color: rgb(130, 124, 124);
        font-family: PingFang-Regular;
        font-size: 18px;
    }

    #block4{
        position: absolute;
        top: 126px;
        left: 39px;
    }
</style>