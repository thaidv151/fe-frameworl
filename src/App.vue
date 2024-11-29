<script setup>
import { ref } from 'vue';
import HomeView from './views/HomeView.vue';
// import ListBook from './components/asm2/ListBook.vue';
// import Lifecycle from './components/Lifecycle.vue';
// import ParentSlot from './components/ParentSlot.vue';

// import HomeView from './views/HomeView.vue';


// const isShow = ref(true)

const changeStatus = () =>{
    isShow.value = !isShow.value;
}
</script>

<template>

    <div class="container">
        <RouterView></RouterView>
       
    </div>
</template>

<style scoped></style>
