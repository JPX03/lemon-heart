<template>
    <div id='containerHover'>
        <div id="container">
            <router-link :to='urlB'>
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
        }
    }
</script>

<style lang="less" scoped>
    #containerHover :hover {
        cursor: pointer;
    }

    #container {
        width: 108px;
        height: 40px;
        border-radius: 20px;
        border: 0.6px solid rgba(0, 0, 0, 1);
        box-sizing: border-box;
        text-align: center;
        padding-top: 7px;
        ;
    }

    #container a {
        color: rgba(71, 71, 71, 1);
        font-family: PingFang-Regular;
        font-size: 18px;
    }
</style>