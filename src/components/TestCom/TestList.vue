<template>
    <div id="listContainer">
        <div id="listTitle">{{listTitle}}</div>
        <label><input type="radio" :name="testQ" value='0' @change='sendRadioVal' v-model='checkedValue'></label><span class="select">符合</span>
        <label><input type="radio" :name="testQ" value='1' @change='sendRadioVal' v-model='checkedValue'></label><span class="select">大部分符合</span>
        <label><input type="radio" :name="testQ" value='2' @change='sendRadioVal' v-model='checkedValue'></label><span class="select">有时不符合</span>
        <label><input type="radio" :name="testQ" value='3' @change='sendRadioVal' v-model='checkedValue'></label><span class="select">不符合</span>
    </div>
</template>

<script>
    export default {
        name: 'TestList',
        props: {
            listTitle: '',
            testQ:'',
        },
        data(){
            return{
                checkedValue:'0',
            }
        },
        methods:{
            sendRadioVal(){
                this.$emit('getVal',this);
            }
        }
    }
</script>

<style lang="less" scoped>
    #listContainer {
        border-top: 1px solid rgba(203, 203, 203, 1);
        width: 800px;
        height: 216px;
        position: relative;
        color: rgba(71, 71, 71, 1);
        font-family: PingFang-Regular;
        font-size: 15px;
    }

    #listTitle {
        position: absolute;
        top: 60px;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 24px;
    }

    input {
        width: 18px;
        height: 18px;
        margin-top: 132px;
        margin-right: 80px;
    }

    .select{
        position: relative;
        top: -5px;
        width: 50px;
        left: -65px;
    }
</style>