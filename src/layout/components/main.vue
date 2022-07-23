<template>
		<div class="h-full layout-main pt-3.5 pl-3.5">
			<router-view v-slot="{ Component }">
				<transition name="lightSpeedInRight" mode="out-in">
					<keep-alive>
						<component :is="Component" :key="routeKey"/>
					</keep-alive>
				</transition>
			</router-view>
			<!-- 配置在单独组件 -->
			<el-backtop target=".layout-back-top .el-scrollbar__wrap" :right="50" :bottom="60"></el-backtop>
			<!-- 右侧设置 -->
			<app-setting></app-setting>
		</div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, watch, computed, getCurrentInstance } from 'vue'
import { useRoute, useRouter, onBeforeRouteUpdate, RouteRecordRaw } from 'vue-router';
import { storeToRefs } from 'pinia';
import { CircularLoading } from '@/utils/loading';
import { useKeepAliveRoutes } from "@/store/keepAliveRoutes";
import { useConfigures } from "@/store/configures";
import AppSetting from '@/layout/components/setting/index.vue'

const { proxy } = <any>getCurrentInstance();

const route = useRoute();
//缓存路由
const storeKeepAliveRoutes = useKeepAliveRoutes()
//配置
const storeConfigures = useConfigures()

const { keepAliveRoute, cacheViews } = storeToRefs(storeKeepAliveRoutes)
const { config: globalSetting } = storeToRefs(storeConfigures)

onBeforeMount(() => {
	console.log(1113143)
})

const routeKey = computed(() => {
	return route.fullPath
})

const getKeepAliveInclude = computed(() => {

})

watch(
	() => route.fullPath,
	(a, b) => {
		console.log('route------->', 33333, route.meta, b)
	}
)

// 页面加载前
onMounted(() => {
	console.log(323, route)
	CircularLoading.done();
});


</script>
