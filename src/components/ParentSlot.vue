<template>
    <div>
        <h4>
            Parent Component
        </h4>
        <div class="alert alert-info text-center">
            <p>{{ message }}</p>
        </div>
       <ChildrenSlot @update-message="updateMessage"/>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ChildrenSlot from './ChildrenSlot.vue';

    const message = ref('Chưa có thông báo mới');

    const updateMessage = (newMessage) => {
        message.value = newMessage;
    }
</script>

<style lang="scss" scoped>

</style>