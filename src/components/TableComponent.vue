<template>
    <div>
        <table class="table table-striped">
            {{ msg }}
            <thead>
                <tr>

                    <th>Id</th>
                    <th>Name</th>
                    <th>mssv</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="{ id, name, mssv } in sinhVien">

                    <td>{{ id }}</td>
                    <td>{{ name }}</td>
                    <td>{{ mssv }}</td>
                    <td>
                        <button @click="handleDelete(id)" class="btn btn-danger">Delete</button>
                        <button class="btn btn-primary">Edit</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>

// defineProps(['sinhVien', 'msg']);


defineProps({
    sinhVien : [
        {
            id: Number,
            name: String,
            mssv: String
        }
    ],
    msg: String,

});
//defineEmit hàm truyền lên file parent
// định nghĩa hàm 
const emit = defineEmits(['deleteStudent']);

const handleDelete = (id) => {  
// Chạy hàm
//emit(tên hàm khởi tạo, giắ trị truyền đi)
   emit("deleteStudent", id);
}
</script>

<style lang="scss" scoped></style>