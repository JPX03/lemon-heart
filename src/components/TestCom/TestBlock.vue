<template>
        <div id="blockContainer">
            <div id="titleA">{{text1}}</div>
            <div id="titleB">{{text2}}</div>
            <div id="des">{{text3}}</div>
            <div v-show='isShow'>
                <ToTestButton :urlB='urlA' id="tBtn"></ToTestButton>
            </div>
        </div>
</template>

<script>
    import ToTestButton from '@/components/ArticleCom/ToTestButton.vue'
    export default {
        name: 'TestBlock',
        components: {
            ToTestButton,
        },
        props: {
            text1: '',
            text2: '',
            text3: '',
            urlA: '',
            isShow: {
                default: true,
            }
        }
    }
</script>

<style lang="less" scoped>
    #blockContainer {
        position: relative;
        width: 700px;
        height: 377px;
    }

    #titleA {
        position: absolute;
        top: 91px;
        left: 72px;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 36px;

    }

    #titleB {
        position: absolute;
        top: 105px;
        left: 108px;
        font-size: 18px;
        font-family: FZBaoSong-Z04S;
    }

    #des {
        position: absolute;
        top: 149px;
        left: 72px;
        width: 542px;
        height: 76px;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 24px;
        line-height: 156.765628%;
        letter-spacing: -5%;
    }

    #tBtn {
        position: absolute;
        top: 255px;
        left: 72px;
    }
</style>>