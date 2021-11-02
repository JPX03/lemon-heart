<template>
    <div>
        <el-pagination small layout="prev, pager, next" :total="totalPage" id="pages" page-size='6' background
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
                totalPage: {},
            }
        },
        methods: {
            changePage() {
                this.$emit('changePage', this.curPage);
            },
            async getTotalPage() {
                await request({
                    method: 'post',
                    url: '/question/listQuestionByPage',
                }).then(({
                    data: res
                }) => {
                    console.log(res);
                    this.totalPage = res.data.total;
                })
            },
        },
        created() {
            this.getTotalPage();
        },
    }
</script>

<style lang="less" scoped>

</style>