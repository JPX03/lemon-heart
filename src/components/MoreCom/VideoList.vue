<template>
    <div id="container">
        <a :href='videoHref'>
            <img :src="pic" id="pic1">
            <img src="@/assets/pictures/turnOn.png" id="pic2" v-if='isShowTurn'>
        </a>
        <div id="des">{{des}}</div>
    </div>
</template>

<script>
    export default {
        name: 'VideoList',
        props: {
            pic: '',
            videoHref: '',
            des:'',
            isShowTurn:{
                default:true
            },
        }
    }
</script>

<style lang="less" scoped>
    #container {
        width: 355px;
        height: 250px;
        position: relative;
    }

    #container:hover {
        cursor: pointer;
    }

    a {
        width: 100%;
        height: 100%;
    }

    #pic1 {
        position: absolute;
        width: 355px;
        height: 205px;
        z-index: 99;
    }

    #pic2 {
        position: absolute;
        width: 60px;
        height: 60px;
        z-index: 99;
        left: 148px;
        top: 73px;
        z-index: 100;
    }

    #des {
        position: absolute;
        top: 230px;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 18px;
        width: 380px;
    }
</style>