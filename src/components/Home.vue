<template>
    <div>
        <div class="lunbo">
            <img src='@/assets/pictures/lunbo1.png' />
        </div>
        <div class="Catalogue">
            <div class="data">
                <div class="month">10<span class="month1">月</span></div>
                <div class="day">20<span class="day1">日</span></div>
                <img src="@/assets/pictures/data.png">
            </div>
            <div class="text1">生活没有你想的那么糟</div>
            <div class="block1">
                <span class="num">01</span>
                <span class="link1">
                    <router-link to='/Article'>心理科普</router-link>
                </span>
                <span class="line1"></span>
                <div class="test1">
                    <div class="test">平和心态是最好的治愈方式</div>
                    <div class="test">反容貌焦虑：长相不那么出众就“不配”自信吗？</div>
                    <div class="test">你所不知道的另类心理毒瘾：暴食症 </div>
                    <div class="test">......</div>
                </div>
            </div>
            <div class="block2">
                <span class="num">02</span>
                <span class="link1">
                    <router-link to='/Article'>常见问题</router-link>
                </span>
                <span class="line1"></span>
                <div class="test1">
                    <div class="test">如何处理好同学关系</div>
                    <div class="test">如何在挫折中保持积极心态</div>
                    <div class="test">怎样快速脱离失恋的痛苦</div>
                    <div class="test">......</div>
                </div>
            </div>
            <div class="block3">
                <span class="num">03</span>
                <span class="link1">
                    <router-link to='/Qa'>健康问答</router-link>
                </span>
                <span class="line1"></span>
                <div class="test1">
                    <div class="test">我该怎么接纳孤独，享受孤独，更好地与它相处？</div>
                    <div class="test">18岁男生，大学想家每天难过，而且哭很多次怎么办？</div>
                    <div class="test">很介意女友的过去，无法释怀，但又很爱她不想离开她？</div>
                    <div class="test">......</div>
                </div>
            </div>
            <div class="block4">
                <span class="num">04</span>
                <span class="link1">
                    <router-link to='/Test'>心理测试</router-link>
                </span>
                <span class="line1"></span>
                <div class="test1">
                    <div class="test">测一测你的压力</div>
                    <div class="test">想知道你的内在人格吗</div>
                    <div class="test">测一测你的自卑感</div>
                    <div class="test">......</div>
                </div>
            </div>
        </div>
        <div class="Epilogue">
            <div class="words">
                <div class="words1">心灵需要慰藉，就像花草需要水分</div>
                <router-link to='/Article'>阅读精品文章</router-link>
                <i class="el-icon-arrow-right"></i>
            </div>
            <img src="@/assets/pictures/threecolors.png">
        </div>
        <div class="Foots">
            <div class="lemon-logo">
                <router-link to="/Home">
                    <img src="../assets/pictures/Group_15.png" alt="">
                </router-link>

            </div>
            <div class="bottom-text">
                <router-link to="/Home">柠檬心理</router-link>
            </div>
            <div class="box1">
                <div>
                    <router-link to="/Article">精选文章</router-link>
                </div>
                <div>
                    <router-link to="/Article">心理科普</router-link>
                </div>
                <div>
                    <router-link to="/Article">人际社交</router-link>
                </div>
                <div>
                    <router-link to="/Article">恋爱关系</router-link>
                </div>
            </div>
            <div class="box2">
                <div>
                    <router-link to="/Qa">心理问答</router-link>
                </div>
                <div>
                    <router-link to="/Qa">精彩问答</router-link>
                </div>
                <div>
                    <router-link to="/Qa">邀请解答</router-link>
                </div>
            </div>
            <div class="box3">
                <div>
                    <router-link to="/Test">心理测试</router-link>
                </div>
                <div>
                    <router-link to="/Test">焦虑度测试</router-link>
                </div>
                <div>
                    <router-link to="/Test">自卑度测试</router-link>
                </div>
                <div>
                    <router-link to="/Test">人格测试</router-link>
                </div>
            </div>
            <class class="box4">
                <div>
                    <router-link to="/Book">心理图书</router-link>
                </div>
                <div>
                    <router-link to="/Book">推荐图书</router-link>
                </div>
            </class>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    .lunbo {
        width: 1920px;
        height: 661px;
        border-bottom: 0.6px solid rgba(0, 0, 0, 1);
        background-color: white;
    }

    .lunbo img {
        width: 100%;
        height: 100%;
    }

    .Catalogue {
        width: 1920px;
        height: 2003px;
        position: relative;
        border: 1px solid rgba(203, 203, 203, 1);
    }

    .data {
        position: absolute;
        top: 34px;
        left: 881px;
        right: 906px;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 48px;
    }

    .month {
        position: absolute;
        top: 26px;
        left: 31px;
        right: 31px;
    }

    .month1 {
        font-size: 24px;
    }

    .day {
        position: absolute;
        top: 85px;
        left: 56px;
        right: 6px;
    }

    .day1 {
        font-size: 24px;
    }

    .data img {
        width: 100%;
        height: 100%;
    }

    .text1 {
        position: absolute;
        width: 650px;
        top: 195px;
        left: 827px;
        right: 826px;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 18px;
        letter-spacing: 8.6px;
    }

    .Epilogue {
        width: 1920px;
        height: 851px;
    }

    .Epilogue img {
        width: 100%;
        height: 100%;
    }

    .words {
        color: rgba(71, 71, 71, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 48px;
        line-height: 130.765629%;
        position: relative;
        top: 350px;
        left: 600px;
        width: 720px;
        height: 63px;
        text-align: center;
    }


    .words a {
        color: rgba(71, 71, 71, 1);
        font-family: PingFang SC;
        font-size: 24px;
        line-height: 130.765629%;
        text-decoration: underline;
    }

    .el-icon-arrow-right {
        font-size: 24px;
        line-height: 130.765629%;
        text-align: center;
    }

    .block1 {
        position: absolute;
        top: 425px;
        left: 320px;
        width: 880px;
        height: 200px;
    }

    .block2 {
        position: absolute;
        top: 868px;
        left: 960px;
        width: 880px;
        height: 200px;
    }

    .block3 {
        position: absolute;
        top: 1231px;
        left: 320px;
        width: 880px;
        height: 200px;
    }

    .block4 {
        position: absolute;
        top: 1572px;
        left: 960px;
        width: 880px;
        height: 200px;
    }

    .num {
        color: rgba(203, 203, 203, 1);
        font-family: PingFangSC-Heavy;
        font-size: 48px;
    }

    .link1 a {
        position: absolute;
        left: 80px;
        top: 9px;
        color: rgba(71, 71, 71, 1);
        font-family: PingFang SC;
        font-size: 36px;
        text-decoration: underline;
    }

    .line1 {
        position: absolute;
        background-color: black;
        height: 200px;
        width: 1px;
        left: 240px;
    }

    .test1 {
        position: absolute;
        left: 250px;
        top: 0px;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 24px;
        line-height: 130.765629%;
    }

    .test {
        margin-bottom: 22px;
    }

    .Foots-up-img {
        z-index: 1;
    }

    .Foots {
        width: 1920px;
        height: 460px;
        background-color: rgba(177, 243, 243, 1);
        ;
        position: relative;
        top: -40px;
    }

    .lemon-logo img {
        width: 51px;
        position: absolute;
        top: 185.6px;
        left: 175.9px;
    }

    .bottom-text {
        position: absolute;
        color: rgba(0, 0, 0, 1);
        font-family: Alibaba PuHuiTi;
        font-weight: 300;
        font-size: 24px;
        letter-spacing: 18%;
        left: 232px;
        top: 197px;
    }

    .bottom-text a {
        color: rgba(0, 0, 0, 1);
        font-family: Alibaba PuHuiTi;
        font-weight: 300;
        font-size: 24px;
        letter-spacing: 18%;
    }

    .box1 {
        position: absolute;
        left: 573px;
        top: 140px;
    }

    .box1 a {
        display: inline-block;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 18px;
        line-height: 130.765629%;
        margin-bottom: 36px;
    }

    .box2 {
        position: absolute;
        top: 140px;
        left: 857px;
    }

    .box2 a {
        display: inline-block;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 18px;
        line-height: 130.765629%;
        margin-bottom: 36px;
    }

    .box3 {
        position: absolute;
        top: 140px;
        left: 1141px;
    }

    .box3 a {
        display: inline-block;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 18px;
        line-height: 130.765629%;
        margin-bottom: 36px;
    }

    .box4 {
        position: absolute;
        top: 140px;
        left: 1425px;
    }

    .box4 a {
        display: inline-block;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 18px;
        line-height: 130.765629%;
        margin-bottom: 36px;
    }
</style>