<template>
	<div class="layout-setting">
		<div
			@click="handleDrawer"
			class="rounded-l fixed w-11 h-11 top-1/4 items-center justify-center flex cursor-pointer right-0"
			:style="{'background-color':getConfig.primary }"
		>
			<el-icon icon="Setting" :color="getConfig.iconColor" class="text-2xl"/>
		</div>
		<el-drawer custom-class="setting-drawer" :title="$t('layout.drawerTitle')" v-model="getConfig.isDrawer"
		           :before-close="handleDrawer" size="256px">
			<el-scrollbar>
				<div class="items" v-for="(item,keys) in handSetting" :key="keys">
					<el-divider>{{ item.name }}</el-divider>
					<div class="item flex items-center justify-between mb-1.5 py-2" v-for="(val,key) in item.child" :key="key">
						<div class="item-label text-xs font-normal">{{ val.name }}</div>
						<div class="item-value">
							<el-color-picker v-if="val.type === 'color-picker'" v-model="getConfig[val.model]" size="default"
							                 @change="ColorPickerChange(val.model)"></el-color-picker>

							<el-switch v-if="val.type === 'switch'" v-model="getConfig[val.model]" size="small"
							           @change="ChangeSwitch(val.model)"></el-switch>
						</div>
					</div>
				</div>

			</el-scrollbar>


		</el-drawer>
	</div>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance, reactive } from "vue";
import { storeToRefs } from "pinia";
import { useI18n } from 'vue-i18n';
import { ColorPickerChange } from '@/layout/components/setting/service/ColorPickerChange'
import { ChangeSwitch } from '@/layout/components/setting/service/ChangeSwitch'
import ElIcon from '@/components/Icon/index.vue'

const { t } = useI18n()
const { proxy } = <any>getCurrentInstance();
//配置
import { useConfigures } from "@/store/configures";
import { LocalStorage } from "@/utils/storage";

const storeConfigures = useConfigures()
const { config: setting } = storeToRefs(storeConfigures)
//获取配置项
const getConfig = computed(() => {
	return setting.value
})
//关闭打开drawer
const handleDrawer = () => {
	console.log(111,document.documentElement,document.documentElement.style.cssText)
	setting.value.isDrawer = !setting.value.isDrawer
	LocalStorage.set('Configures', setting.value);
}

const handSetting = reactive([
	{
		name: '全局主题',
		child: [
			{ type: 'color-picker', name: t('layout.themeColor'), model: 'primary', mark: 'themeColor' },
			{ type: 'switch', name: t('layout.isIsDark'), model: 'isIsDark', mark: 'themeColor' },
		]
	},
	{
		name: '顶栏设置',
		child:[

		]
	},
	// { name: '菜单设置', child: [] },
	// { name: '界面设置', child: [] },
	// { name: '界面显示', child: [] },
	// { name: '其他设置', child: [] },
])

</script>

<style lang="less" scoped>
.layout-setting {
	:deep(.el-drawer__header) {
		padding: 0 15px !important;
		height: 48px;
		display: flex;
		align-items: center;
		margin-bottom: 0 !important;
		border-bottom: 1px solid var(--el-border-color);
		color: var(--el-text-color-primary);

		span {
			font-size: 14px;
		}

		button {
			margin-top: -6px;
		}
	}

	:deep(.el-drawer__body) {
		padding-top: 11px;
	}
}
</style>
