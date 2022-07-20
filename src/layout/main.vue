<template>
    <div class="h-full bg-white">
        <router-view v-slot="{ Component }">
            <transition name="lightSpeedInRight" mode="out-in">
                <keep-alive>
                    <component :is="Component" />
                </keep-alive>
            </transition>
        </router-view>
    </div>
</template>

<script setup lang="ts">
import {onMounted} from 'vue'
import {CircularLoading} from '@/utils/loading';
// 页面加载前
onMounted(() => {
    CircularLoading.done();
});
</script>
