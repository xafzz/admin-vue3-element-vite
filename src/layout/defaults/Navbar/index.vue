<template>
    <el-header class="layout-header p-0 w-full" :height="setHeaderHeight">
        <div class="h-12 border-solid border-b-1">top</div>
        <div>1</div>
    </el-header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useConfigures } from "@/store/configures";
import { storeToRefs } from "pinia";
const setHeaderHeight = computed(() => {
    return '84px';
    // return '50px';
});
//配置
const storeConfigures = useConfigures()
const { config: getConfig } = storeToRefs(storeConfigures)

</script>
