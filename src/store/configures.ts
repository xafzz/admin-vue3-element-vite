import { defineStore } from "pinia";
import { stateConfigures, configuresState } from './interface'

export const useConfigures = defineStore('configures', {
	state: () : stateConfigures => ({
		config: {
			isDrawer: true,
			/**
			 * 全局主题
			 */
			// 默认 primary 主题颜色
			primary: '#409eff',
			// icon 颜色
			iconColor: '#ffffff',
			// 是否开启深色模式
			isIsDark: false,

			/**
			 * 界面设置
			 */
			// 是否开启固定 Header
			isFixedHeader: false,
		}
	}),
	actions: {
		setConfigures(data : configuresState) {
			this.config = data
		}
	}
})
