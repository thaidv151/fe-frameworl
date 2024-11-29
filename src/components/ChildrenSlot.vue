<template>
    <div>
        <div class="">
            <button @click="sendMessage">Gửi thông báo</button>
        </div>
    </div>
</template>

<script setup>
const emits = defineEmits(['update-message'])
const sendMessage = () => {
    emits('update-message', 'Thay đổi trạng thái thành công');
}
</script>

<style lang="scss" scoped></style>