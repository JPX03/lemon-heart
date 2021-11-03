<template>
    <div>
        <el-pagination layout="prev, pager, next" background :total="totalPage"  :page-size='pageSize'
            @current-change='changePage' :current-page.sync="pageNo">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name:'Paging',
        props: {
            totalPage: {},
            pageSize:{},
            pageNo:{},
        },
        methods: {
            changePage() {
                this.$emit('changePage', this.pageNo);
            },
        }
    }
</script>

<style lang="less" scoped>

</style>