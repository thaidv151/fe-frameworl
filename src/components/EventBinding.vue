<template>
    <div>
        <p>count : {{ count }}</p>
        <button @click="count++">Increment</button>
        <button @click="Increment(1)">Increment</button>
        <button @click="Increment(2)">Increment + 2</button>
        <button @click="Increment(5)">Increment + 5</button>
        <!-- method event parameter -->


    </div>
    <div>
        <button @click.stop="console.log('Button1')">button1
            <button @click.stop="console.log('Button2')">Button2</button>
        </button>
    </div>
    <div>
        <form action="">
            <label for="">Username</label>
            <input type="text" v-model="username">
            <button type="submit" @click.prevent="console.log(username)">Ok</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

    const Increment = (value) => {
        count.value += value;
    }
    const count = ref(0)
</script>

<style lang="scss" scoped>

</style>