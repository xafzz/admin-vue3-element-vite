import { LocalStorage } from "@/utils/storage";
import { useConfigures } from "@/store/configures";
import { storeToRefs } from "pinia";

export const ColorPickerChange = () => {

	const storeConfigures = useConfigures()
	const { config: setting } = storeToRefs(storeConfigures)

	LocalStorage.set('Configures', setting.value);
}
