<template>
    <div>
        <el-pagination  layout="prev, pager, next" :total="totalPage"  background page-size='6'>
        </el-pagination>
    </div>
</template>

<script>
    name:'APages'
    export default {
        props:{
            totalPage:{},
        }
    }
</script>

<style lang="less" scoped>

</style>