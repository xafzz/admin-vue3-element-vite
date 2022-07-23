<template>
    <el-config-provider :size="getGlobalComponentSize">
        <router-view/>
    </el-config-provider>
</template>

<script setup lang="ts">
import {onMounted, onUnmounted, watchEffect, onBeforeMount, computed, watch} from 'vue'
import {useRoute} from "vue-router";
import { LocalStorage } from '@/utils/storage'
import { useConfigures } from "@/store/configures";
import { storeToRefs } from "pinia";


const route = useRoute()
const storeConfigures = useConfigures()
const { config: globalSetting } = storeToRefs(storeConfigures)

watch(
    () => route.name,
    (a,b) =>{
        console.log('route------->',55555,a,b)
    }
)


const getGlobalComponentSize = computed(()=>{

})
// 设置初始化，防止刷新时恢复默认
onBeforeMount(() => {
	const LocalStorageConfigures = LocalStorage.get('Configures')
	if( LocalStorageConfigures ){
		globalSetting.value = LocalStorageConfigures

		const body = document.documentElement as HTMLElement;
		if (LocalStorageConfigures.isIsDark) body.setAttribute('data-theme', 'dark');

	}else{
		LocalStorage.set('Configures', globalSetting.value);
	}
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
