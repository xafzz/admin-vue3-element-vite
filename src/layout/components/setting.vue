<template>
	<div
		@click="handleDrawer"
		class="rounded-l fixed w-11 h-11 top-1/4 items-center justify-center flex cursor-pointer right-0"
		:style="{'background-color':getConfig.primary}"
	>
		<icon icon="Setting" class=" text-white text-2xl" />
	</div>
	<el-drawer v-model="getConfig.isDrawer" :title="$t('layout.drawerTitle')" :before-close="handleDrawer" size="256px">


		jjjj
	</el-drawer>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance } from "vue";
import { storeToRefs } from "pinia";
import Icon from '@/components/Icon/index.vue'

const { proxy } = <any>getCurrentInstance();
//配置
import { useConfigures } from "@/store/configures";
import { LocalStorage } from "@/utils/storage";

const storeConfigures = useConfigures()
const { config: setting } = storeToRefs(storeConfigures)

const getConfig = computed(() => {
	console.log(222)
	return setting.value
})


const handleDrawer = () => {
	setting.value.isDrawer = !setting.value.isDrawer
	LocalStorage.set('Configures', setting.value);
}
</script>
