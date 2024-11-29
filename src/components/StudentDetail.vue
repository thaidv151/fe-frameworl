<template>
    <div>
        <h3>Student details</h3>
        <div>
            <div> {{ student.name }}</div>
            <div> {{ student.mssv }}</div>
        </div>
    </div>
</template>

<script setup>

import instanceAxios from '@/utils/configAxios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

    const { params } = useRoute(); 
    const student = ref({});

    onMounted(() => {
        fetchStudent()
    })
    const fetchStudent = async () => {
        const fetchStudentResponse = await instanceAxios.get(`students/${params.id}`);
       student.value = fetchStudentResponse.data;
    }
    
</script>

<style lang="scss" scoped>

</style>