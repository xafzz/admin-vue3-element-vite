<script lang="ts">
import { h, resolveComponent, defineComponent } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default defineComponent({
	props: {
		icon: {
			type: String,
			default: ''
		},
		color: {
			type: String,
			default: '#ffffff'
		}
	},
	render() {
		return h(
			'el-icon',
			{
				class: 'el-icon',
				style: '--color:' + this.color
			},
			[
				h(resolveComponent(ElementPlusIconsVue[this.icon].name))
			]
		)
	}
})
</script>
