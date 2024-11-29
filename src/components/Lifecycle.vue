<template>
    <div>
        <div>
            <h3>{{ message }}</h3>
            <button @click="handleChange" class="btn btn-primary">
                Change message
            </button>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, onUpdated, ref } from 'vue';
const message = ref('Hello world')
const handleChange = () => {
    message.value = 'Life cycle'
}
console.log('created');

onMounted(() => {
    console.log('onMouseted');
})

onUpdated(() => {
    console.log('updated');
})

onUnmounted(() => {
    console.log('unMounted');
})
</script>

<style lang="scss" scoped>

</style>