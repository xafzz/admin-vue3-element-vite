<template>
    <el-container class=" w-full h-full">
        <div class="left">left</div>
        <el-container class="flex-center">
            <header>头部</header>
            <el-scrollbar>
                <app-main></app-main>
            </el-scrollbar>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import AppMain from '@/layout/main.vue'

</script>
