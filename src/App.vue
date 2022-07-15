<template>
  <div>
      {{num}}
      <el-button type="primary" @click="add()">+{{msg.name}}</el-button>
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
