<template>
	<el-container class=" w-full h-full">
		<!--  w-16  -->
		<sidebar class="overflow-x-hidden w-56"></sidebar>
		<!-- 结构保持不变 -->
		<el-container class="bg-slate-100 flex-col" :class="{ 'layout-back-top': !isFixedHeader }">
			<navbar v-if="isFixedHeader"></navbar>
			<el-scrollbar ref="layoutScrollRef" :class="{ 'layout-back-top': isFixedHeader }">
				<navbar v-if="!isFixedHeader"></navbar>
				<app-main></app-main>
			</el-scrollbar>
		</el-container>
	</el-container>
</template>

<script setup lang="ts">
import AppMain from '@/layout/components/main.vue'
import Sidebar from './Sidebar/index.vue'
import Navbar from './Navbar/index.vue'
import { computed } from "vue";
import { useConfigures } from "@/store/configures";
import { storeToRefs } from "pinia";

//配置
const storeConfigures = useConfigures()
const { config: globalSetting } = storeToRefs(storeConfigures)

//顶栏固定
const isFixedHeader = computed(() => {
	return globalSetting.value.isFixedHeader;
});

</script>
