<template>
	<component :is="defaults"/>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, watch } from 'vue'
import { useRoute, useRouter, onBeforeRouteUpdate, RouteRecordRaw } from 'vue-router';

const defaults = defineAsyncComponent(() => import('./defaults/index.vue'))
console.log(111)

const route = useRoute()

watch(
	() => route.name,
	(a, b) => {
		console.log('route------->', 44444, a, b)
	}
)

</script>

<style scoped>

</style>
