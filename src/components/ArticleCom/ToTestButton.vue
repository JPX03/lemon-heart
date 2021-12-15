<template>
    <div id='containerHover' @mouseenter='changeBack1' @mouseleave='changeBack2'>
        <div id="container" :style="{'background':buttonBack}">
            <router-link :to='urlB' :style="{'color':buttonColor}">
                去测试
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ToTestButton',
        props: {
            urlB: {}
        },
        data() {
            return {
                buttonBack: '',
                buttonColor: 'rgba(0, 0, 0, 1)',
            }
        },
        methods: {
            changeBack1() {
                this.buttonBack = 'rgba(0, 0, 0, 1)';
                this.buttonColor = 'rgba(255, 255, 255, 1)';
            },
            changeBack2() {
                this.buttonBack = '';
                this.buttonColor = 'rgba(0, 0, 0, 1)';
            }
        }
    }
</script>

<style lang="less" scoped>
    #containerHover :hover {
        cursor: pointer;
        background-color: black;
    }

    #container {
        width: 108px;
        height: 40px;
        border-radius: 20px;
        border: 0.6px solid rgba(0, 0, 0, 1);
        box-sizing: border-box;
        text-align: center;
        padding-top: 7px;

        a {
            width: 100%;
            height: 100%;
            font-family: PingFang-Regular;
            font-size: 18px;
        }
    }
</style>