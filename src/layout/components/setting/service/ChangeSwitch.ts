import { useConfigures } from "@/store/configures";
import { storeToRefs } from "pinia";
import { LocalStorage } from "@/utils/storage";

export const ChangeSwitch = (model) => {

	const storeConfigures = useConfigures()
	const { config: setting } = storeToRefs(storeConfigures)

	switch (model) {
		case 'isIsDark':
			const body = document.documentElement as HTMLElement;
			if ( setting.value.isIsDark ) {
				body.setAttribute('data-theme', 'dark')
			} else {
				body.setAttribute('data-theme', '')
			}
			break
	}

	LocalStorage.set('Configures', setting.value);
}
