<template>
    <div>
        <el-pagination small layout="prev, pager, next" :total="48" id="pages" page-size='6' background
            @current-change='changePage' :current-page.sync="curPage">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: 'Pages',
        data() {
            return {
                curPage,
            }
        },
        methods: {
            changePage() {
                this.$emit('changePage', this.curPage);
            },
        }
    }
</script>

<style lang="less" scoped>

</style>