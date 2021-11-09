<template>
    <div id="theDesContainer">
        <div id="num">{{num}}</div>
        <div id="theDesName">{{title}}</div>
        <div class="theDesText">
            {{text1}}
        </div>
        <div class="theDesTextTitle">
            {{text2}}
        </div>
        <div class="theDesText">
            {{text3}}
        </div>
        <div class="theDesTextTitle">
            {{text4}}
        </div>
        <div class="theDesText">
            {{text5}}
        </div>
        <div class="theDesTextTitle">
            {{text6}}
        </div>
        <div class="theDesText">
            {{text7}}
        </div>
        <div class="theDesTextTitle">
            {{text8}}
        </div>
        <div class="theDesText">
            {{text9}}
        </div>
         <div class="theDesTextTitle">
            {{text10}}
        </div>
        <div class="theDesText">
            {{text11}}
        </div>
         <div class="theDesTextTitle">
            {{text12}}
        </div>
        <div class="theDesText">
            {{text13}}
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            num:'',
            title:'',
            text1:'',
            text2:'',
            text3:'',
            text4:'',
            text5:'',
            text6:'',
            text7:'',
            text8:'',
            text9:'',
            text10:'',
            text11:'',
            text12:'',
            text13:'',
            showLine1:{
                default:true,
            },
            showLine2:{
                default:true,
            }
        }
    }
</script>

<style lang="less" scoped>
    #theDesContainer {
        width: 1000px;
        position: relative;
    }

    #num {
        color: rgba(203, 203, 203, 1);
        font-family: PingFangSC-Heavy;
        font-size: 43px;
        position: absolute;
    }

    #theDesName {
        position: absolute;
        top: 5px;
        color: rgba(97, 97, 97, 1);
        font-family: PingFang-Regular;
        font-size: 31px;
        left: 100px;
    }

    .theDesText {
        position: relative;
        left: 315px;
        color: #767676;
        font-family: PingFangSC-regular;
        font-size: 18px;
        line-height: 200%;
        margin-bottom: 40px;
    }

    .theDesTextTitle {
        position: relative;
        left: 315px;
        color: rgba(71, 71, 71, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 22px;
        line-height: 200%;
        margin-bottom: 5px;
    }


</style>