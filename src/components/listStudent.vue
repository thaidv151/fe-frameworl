<template>
    <div>
        <div v-if="listStudents.length == ''">
            Không có học sinh nào
        </div>
        <div v-for="student in listStudents" :key="value" class="card">
            <div>
                id: {{ student.id }}
            </div>
            <div class="card-title">
                Tên: {{ student.name }}
            </div>
            <div class="card-text">
                Mã số sinh viên: {{ student.mssv }}
            </div>
            <div class="card-text">
                Lớp học: {{ student.className }}
            </div>
            <div>
                <button @click="deleteArr(student.id)">Xoá</button> 
            </div>
        </div>
        <div class="col-4">
            <form @submit.prevent="addStudent" action="">
                <div>
                    <label for="">ID</label>
                    <input class="form-control" type="text" v-model="newObj.id">
                </div>
                <div>
                    <label for="">Tên</label>
                    <input class="form-control" type="text" v-model="newObj.name">
                </div>
                <div>
                    <label for="">Mã số sinh viên</label>
                    <input class="form-control" type="text" v-model="newObj.mssv">
                </div>
                <div>
                    <select v-model="newObj.className">
                        <option value="Front-end Framework">Front-end Framework</option>
                        <option value="Dự án 1">Dự án 1</option>
                    </select>
                </div>

                <button class="btn btn-primary" type="submit">Thêm</button>

            </form>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const listStudents = reactive([
    {
        id: 0,
        name: 'Đỗ Văn THái',
        mssv: 'PH05988',
        className: 'Front-end Framework',
    },
    {
        id: 1,
        name: 'Lê Văn Lâm',
        mssv: 'PH50394',
        className: 'Front-end Framework',
    },
    {
        id: 2,
        name: 'Phạm Quang Đế',
        mssv: 'PH50943',
        className: 'Front-end Framework',
    }
]);


const newObj = reactive({
    id: '',
    name: '',
    mssv: '',
    className: '',
})

const addStudent = () => {
    listStudents.push(newObj);

};
const deleteArr = (id) => {
    if (confirm('bạn có xác nhận xoá')) {
        for (let i = 0; i < listStudents.length; i++) {
            if (listStudents[i].id === id) {
                listStudents.splice(i, 1);
            }
        }
    }
}






</script>

<style scoped></style>