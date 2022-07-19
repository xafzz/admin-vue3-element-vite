<template>
    <el-config-provider :size="getGlobalComponentSize">
        <transition>
            <router-view/>
        </transition>
    </el-config-provider>
</template>

<script setup lang="ts">
import {onMounted, onUnmounted, watchEffect, onBeforeMount,computed} from 'vue'


const getGlobalComponentSize = computed(()=>{

})
// 设置初始化，防止刷新时恢复默认
onBeforeMount(() => {
    console.log('设置初始化')
});

// 页面加载时
onMounted(() => {
    console.log('页面加载时')
})

// 页面销毁时
onUnmounted(() => {
    console.log('页面销毁时')
})
watchEffect(()=>{
    console.log(66)
})

</script>


<style lang="less" scoped>

</style>
