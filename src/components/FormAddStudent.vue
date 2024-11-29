<template>
    <div class="col-4">
        <form @submit.prevent="addStudent()" action="">
            <div>
                <label for="">ID</label>
                <input class="form-control" type="text" :value="id_student" @input="id_student = $event.target.value"
                    id="">
            </div>
            <div>
                <label for="">Tên</label>
                <input class="form-control" type="text" :value="name_student"
                    @input="name_student = $event.target.value" id="">
            </div>
            <div>
                <label for="">Mã số sinh viên</label>
                <input class="form-control" type="text" :value="mssv_student"
                    @input="mssv_student = $event.target.value" id="">
            </div>
            <div>
                <select :value="className" @change="className = $event.target.value" id="">
                    <option value="Front-end Framework">Front-end Framework</option>
                    <option value="Dự án 1">Dự án 1</option>
                </select>
            </div>
            <button class="btn btn-primary" @click="addStudent()" type="submit">Thêm</button>

        </form>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
const listStudent = ref([]);
const id_student = ref('');
const name_student = ref('');
const mssv_student = ref('');
const className = ref('');

const addStudent = () => {
    const arrStudent = {
        id: id_student.value,
        name: name_student.value,
        mssv: mssv_student.value,
        className: className.value,
    }

    listStudent.value.push(arrStudent);
    id_student.value = '';
    name_student.value = '';
    mssv_student.value = '';
    className.value = '';
    console.log(listStudent);
}


</script>

<style lang="scss" scoped></style>