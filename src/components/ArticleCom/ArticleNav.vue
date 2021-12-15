<template>
    <div id="container1">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="全部" name="first"></el-tab-pane>
            <el-tab-pane label="心理科普" name="second"></el-tab-pane>
            <el-tab-pane label="职场技能" name="third"></el-tab-pane>
            <el-tab-pane label="婚恋情感" name="fourth"></el-tab-pane>
            <el-tab-pane label="家庭关系" name="fifth"></el-tab-pane>
            <el-tab-pane label="自我觉察" name="sixth"></el-tab-pane>
            <el-tab-pane label="人际社交" name="seventh"></el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        name: 'AriticleNav',
        data() {
            return {
                activeName: 'first',
            };
        },
        methods: {
            handleClick(tab) {
                this.$emit('changeKind', tab._props.label);
            }
        }
    }
</script>

<style lang="less">
    #contaienr1 {
        width: 1160px;

        .tab() {
            color: rgba(97, 97, 97, 1);
            font-family: PingFang-Regular;
            font-size: 18px;
            line-height: 130.765629%;
            margin-right: 1px;
        }

        #tab-first {
            .tab();
        }

        #tab-second {
            .tab();
        }

        #tab-third {
            .tab();
        }

        #tab-fourth {
            .tab();
        }

        #tab-fifth {
            .tab();
        }

        #tab-sixth {
            .tab();
        }

        #tab-seventh {
            .tab();
        }
    }
</style>