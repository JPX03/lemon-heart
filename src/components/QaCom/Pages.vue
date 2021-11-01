<template>
    <div>
        <el-pagination small layout="prev, pager, next" :total="48" id="pages" page-size='6' background
            @current-change='changePage' :current-page.sync="curPage">111
        </el-pagination>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                curPage,
            }
        },
        methods: {
            changePage() {
                this.$emit('changePage',this.curPage);
            },
        }
    }
</script>

<style lang="less" scoped>

</style>