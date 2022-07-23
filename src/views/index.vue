<template>
    <div>
	    <el-icon size="80" color="#ce1d1d"><Setting /></el-icon>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        <el-button type="danger" @click="add()">+{{msg.name}}</el-button>

        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>

        <router-link to="/test"><el-button>跳转页面</el-button></router-link>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
        {{num}}<br>
	    <router-link to="/test"><el-button>跳转页面</el-button></router-link>
        {{num}}<br>
        {{num}}<br>
    </div>
</template>

<script setup lang="ts">
import { reactive,ref,watchEffect,onBeforeMount } from 'vue'
const msg = reactive({
    name:1
})

onBeforeMount(()=>{
    console.log(1111)
})

let num = ref(1)

function add(){
    num.value++
}

watchEffect(()=>{
    console.log(333)
})


</script>
