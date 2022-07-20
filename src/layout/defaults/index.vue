<template>
    <el-container class=" w-full h-full">
        <!--  w-16  -->
        <sidebar class="overflow-x-hidden w-56"></sidebar>
        <el-container class="bg-slate-200 flex-col" >
            <navbar></navbar>
            <el-scrollbar  class="pt-3.5 pl-3.5">
                <app-main></app-main>
            </el-scrollbar>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import AppMain from '@/layout/main.vue'
import Sidebar from './Sidebar/index.vue'
import Navbar from './Navbar/index.vue'

</script>
