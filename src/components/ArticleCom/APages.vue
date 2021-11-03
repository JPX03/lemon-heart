<template>
    <div>
        <el-pagination layout="prev, pager, next" :total="totalPage" background :page-size='pageSize'
            @current-change='changePage' :current-page.sync="pageNo">
        </el-pagination>
    </div>
</template>

<script>
    name: 'APages'
    export default {
        data() {
            return {
               
            }
        },
        props: {
            totalPage: {},
            pageSize:{},
            pageNo:{},
        },
        methods: {
            changePage() {
                console.log(this.pageNo);
                this.$emit('changePage', this.pageNo);
            },
        }
    }
</script>

<style lang="less" scoped>

</style>