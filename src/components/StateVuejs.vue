<template>
    <!-- <div>
        count: {{ count }}
        <button class="btn btn-success" @click="increment">Increment</button>
    </div> -->
    <!-- <div>
        Notification : {{ notification }}
        <button @click="change">{{  notification === "Offline" ? "Online" : "Offline" }}</button>
    </div> -->

    <div class="container my-5">
        <h1 class="alert alert-success">Thông tin</h1>
        <ul class="list-group">
            <li class="list-group-item">Tên khoá học {{ courseName }}</li>
            <li class="list-group-item">Cấp độ {{ courseLevel }}</li>
            <li class="list-group-item">Thời gian {{ courseTime }}</li>
            <li class="list-group-item">  {{ courseActive == true ? `btn btn-success` : `btn btn-warning` }} Trạng thái {{ courseActive ? "Đang mở" : "Đang đóng" }}</li>
        </ul>
    </div>


</template>

<script setup>
import { ref } from 'vue';

const courseName = ref("Frameword Vue 3")
const courseLevel = ref("Nâng cao");
const courseTime = ref(30)
const courseActive = ref(true)
// let notification = ref("Offline");

// const change = () => {
    
//     if(notification.value === "Offline" ){
//         notification.value = "Online"
//     }else{
//         notification.value = "Offline";
//     }
    

    


// }


</script>

<style lang="scss" scoped></style>