<template>
    <div>
        <div>
            <h1>Conditional Rendering</h1>
            <!-- <p v-if="isActive">system is active</p>
            <p v-else>system is unActive</p> -->
            <!-- <p v-show="isActive">system is an active</p>
            <p v-show="!isActive">system is an unActive</p> -->

            <p>Bài tậ<p></p></p>
            <p v-show="isVisible">Thông báo 1</p>
            <p v-show="!isVisible">Thông báo 2</p>
            <button class="btn btn-success" @click="handleChangeStatus">Change Status</button>
        </div>
        <div>
            <p v-if="user.age > 30">{{ user.name }} la trung nien</p>
            <p v-else-if="user.age >= 18">{{ user.name }} la thanh nien</p>
            <p v-else>{{ user.name }} la thieu nien</p>
        </div>
    </div>
</template>

<script setup>

import { reactive, ref } from 'vue';


const isActive = ref(false);
const handleChangeStatus = () => {
    isVisible.value = !isVisible.value;
}
const isVisible = ref(false);
const user = reactive({
    name: "John Doe",
    age: 18,
})

</script>

<style lang="scss" scoped></style>