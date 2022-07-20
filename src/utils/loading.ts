import { nextTick } from 'vue';
import '@/theme/loading.less';

/**
 * 页面全局 Loading
 * @method start 创建 loading
 * @method done 移除 loading
 */
export const CircularLoading = {
	// 创建 loading
	start: () => {
		const docBody: Element = document.body;
		const createDiv = <HTMLElement>document.createElement('div');
        createDiv.setAttribute('class', 'loading-loading');
        createDiv.innerHTML = '<div class="loading-circular"><div class="loading-circular-warp"></div></div>';
        docBody.insertBefore(createDiv, docBody.childNodes[0]);
		window.circularLoading = true;
	},
	// 移除 loading
	done: () => {
		nextTick(() => {
			window.circularLoading = false;
			const el = <HTMLElement>document.querySelector('.loading-loading');
			el?.parentNode?.removeChild(el);
		});
	},
};
