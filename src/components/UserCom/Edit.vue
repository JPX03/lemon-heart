<template>
    <div id="container">
        <img src="@/assets/pictures/Group_15.png" id="logo">
        <div id="close" @click="close"><i class="el-icon-close"></i></div>
        <div id="title1">柠檬心理</div>
        <div id="title2">编辑昵称</div>
        <input id="inp" type="text" placeholder="昵称" v-model="newUserName">
        <div id="wrong" v-show="isWrong">错误信息提醒:{{}}</div>
        <div id="sure" @click="sure">确定</div>
    </div>
</template>

<script>
    import request from '@/utils/request.js'
    export default {
        name: 'Edit',
        data() {
            return {
                newUserName: '',
                isWrong: false,
                userId:this.cookie.getCookie('userId'),
            }
        },
        methods: {
            close() {
                this.$emit('closeEdit', false)
            },
            sure() {
                request({
                    methods: 'post',
                    url: '/user/updateName',
                    params: {
                        id: this.userId,
                        newName: this.newUserName,
                    }
                }).then((response) => {
                    console.log(response);
                    let loginInfo = {
                        userName: this.newUserName,
                        userId: this.userId,
                    }
                    this.cookie.clearCookie('UserName');
                    this.cookie.clearCookie('UserId');
                    this.cookie.setCookie(loginInfo, 7);
                    this.close();
                    location.reload();
                });
            }
        }
    }
</script>

<style lang="less" scoped>
    #container {
        position: relative;
        width: 500px;
        height: 490px;
        border-radius: 8px;
        border: 1px solid rgba(0, 0, 0, 1);
        box-sizing: border-box;
        background: rgba(255, 255, 255, 1);
    }

    #close {
        position: absolute;
        left: 435px;
        top: 38px;
        font-size: 30px;
        color: rgba(203, 203, 203, 1);
    }

    #close :hover {
        cursor: pointer;
        ;
    }

    #logo {
        position: absolute;
        left: 30px;
        top: 33px;
        width: 51px;
        height: 44px;
    }

    #title1 {
        position: absolute;
        left: 92px;
        top: 42px;
        color: rgba(0, 0, 0, 1);
        font-family: Alibaba PuHuiTi;
        font-weight: 300;
        font-size: 24px;
        letter-spacing: 18%;
    }

    #title2 {
        position: absolute;
        left: 36px;
        top: 128px;
        color: rgba(71, 71, 71, 1);
        font-family: PingFang-SC;
        font-size: 24px;
    }

    #inp {
        position: absolute;
        left: 36px;
        top: 185px;
        width: 428px;
        height: 60px;
        border: 0.6px solid rgba(0, 0, 0, 1);
        box-sizing: border-box;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 18px;
    }

    #wrong {
        position: absolute;
        left: 36px;
        top: 263px;
        color: rgba(235, 87, 87, 1);
        font-family: PingFang-Regular;
        font-size: 16px;
    }

    #sure {
        position: absolute;
        left: 36px;
        top: 360px;
        width: 428px;
        height: 56px;
        border: 1px solid rgba(97, 97, 97, 1);
        box-sizing: border-box;
        background: rgba(51, 51, 51, 1);
        color: rgba(255, 255, 255, 1);
        font-family: PingFang-Regular;
        font-size: 18px;
        text-align: center;
        line-height: 56px;
    }
</style>