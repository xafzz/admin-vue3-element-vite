<template>
    <div>
	    <el-icon size="20" color="#ffffff"><Setting /></el-icon>
        {{num}}
        <el-button type="danger" @click="add()">+{{msg.name}}</el-button>


        <router-link to="/"><el-button>跳转页面</el-button></router-link>
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
