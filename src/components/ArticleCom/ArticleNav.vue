<template>
    <div id="container1">
        <template id="container2">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="全部" name="first"></el-tab-pane>
                <el-tab-pane label="心理科普" name="second"></el-tab-pane>
                <el-tab-pane label="人际关系" name="third"></el-tab-pane>
                <el-tab-pane label="自我情绪" name="fourth"></el-tab-pane>
                <el-tab-pane label="恋爱关系" name="fifth"></el-tab-pane>
                <el-tab-pane label="学业工作" name="sixth"></el-tab-pane>
                <el-tab-pane label="家庭关系" name="seventh"></el-tab-pane>
            </el-tabs>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'AriticleNav',
        data() {
            return {
                activeName: 'first'
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

<style lang="less" scoped>
    #contaienr1 {
        width: 1150px;
        color: rgba(97, 97, 97, 1);
        font-family: PingFang SC;
        font-size: 20px;
        line-height: 130.765629%;
        overflow: hidden;
    }
</style>