<template>
    <component :is="defaults" />
</template>

<script lang="ts" setup >
import { defineAsyncComponent } from 'vue'


const defaults = defineAsyncComponent(()=>import('./defaults/index.vue'))
console.log(111)
</script>

<style scoped>

</style>
