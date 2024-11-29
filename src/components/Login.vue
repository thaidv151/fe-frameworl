<template>
    <div class="col-sm-5">
        <form @submit.prevent="loginUser" v-if="isLoggedln" class="form-group" action="">
            <input class="form-control" type="text" id="username" placeholder="Tên đăng nhập">
            <input class="form-control" type="text"  id="password" placeholder="Mật khẩu">
            <button type="submit" class="btn btn-success">Login</button>
            
        </form>
        <p v-else class="alert alert-success">Chào {{ users.username }} bạn đến với website
            <button class="btn btn-warning" @click="logoutUser">Logout</button>
        </p>
    </div>
</template>

<script setup>

import { reactive, ref } from 'vue';

const isLoggedln = ref(true);
const users = reactive({
    username: "thaidv",
    password: "123123",
});
const logoutUser = () => {
    isLoggedln.value = !isLoggedln.value;
}

const loginUser = () => {
    const username = document.querySelector('#username')
    const password = document.querySelector('#password')
    if(username.value === users.username){
        if(password.value === users.password){
            isLoggedln.value = !isLoggedln.value;
        }
    }
}


</script>

<style lang="scss" scoped></style>