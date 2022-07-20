<template>
    <el-header class="p-0 w-full" :height="setHeaderHeight"  style="background: #c8a3b5" >
        <div class="h-12 border-solid border-b-1">top</div>
        <div>1</div>
    </el-header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const setHeaderHeight = computed(() => {
    return '84px';
    // return '50px';
});
</script>
