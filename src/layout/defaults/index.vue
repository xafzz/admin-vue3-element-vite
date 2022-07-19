<template>
    <el-container class=" w-full h-full">
        <div class="left">left</div>
        <el-container class="flex-center">
            <header>头部</header>
            <el-scrollbar>
                <router-view/>
            </el-scrollbar>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { NextLoading } from '@/utils/loading';
// 页面加载前
onMounted(() => {
    NextLoading.done();
});
</script>

<style lang="less" scoped>
.layout-container{
    width: 100%;
    height: 100%;
}
</style>
