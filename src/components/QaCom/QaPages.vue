<template>
    <div>
        <el-pagination layout="prev, pager, next" :total="totalPage" id="pages" page-size='6' background
            @current-change='changePage' :current-page.sync="curPage">
        </el-pagination>
    </div>
</template>

<script>
    import request from '@/utils/request.js'
    export default {
        name: 'Pages',
        data() {
            return {
                curPage: {},
            }
        },
        props: {
            totalPage: {},
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