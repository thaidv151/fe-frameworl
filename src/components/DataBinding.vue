<template>
    <div>
        <p :class="active">{{ name }}</p>
        <input  type="text" v-model="name" :style="style">
    </div>
    
</template>

<script setup>
import { reactive, ref } from 'vue';

    const active = ref('active');

    const name = ref("DVT");
    const style = reactive({
        color: 'red',
        background: 'aqua',
        fontSize: '20px'
    })
</script>

<style scoped>
    .active{
        color: red;
    }
</style>