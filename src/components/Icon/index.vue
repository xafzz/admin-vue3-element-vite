<script lang="ts">
import { h, resolveComponent, defineComponent } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default defineComponent({
	props: {
		icon: {
			type: String,
			default: ''
		},
		size: {
			type: Number
		},
		color: {
			type: String,
			default: '#ffffff'
		}
	},
	render() {
		console.log(444,ElementPlusIconsVue[this.icon].name)
		return [
			'<el-icon {...this.$attrs}>',
			h(resolveComponent( ElementPlusIconsVue[this.icon].name)),
		'</el-icon>'
		]
 }
})
</script>
