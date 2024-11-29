<template>
  <div>
    <div>
  
      <table class="table table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>mssv</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="{ id, name, mssv } in students">

                    <td>{{ id }}</td>
                    <td>{{ name }}</td>
                    <td>{{ mssv }}</td>
                    <td>
                        <button @click="deleteStudent(id)" class="btn btn-danger">Delete</button>
                        <button class="btn btn-primary" @click="handleEdit(id)">Edit</button>
                        <RouterLink class="btn btn-primary" :to='`/students/${id}`'>Detail</RouterLink>
                        <RouterLink class="btn btn-primary" :to='{name: "studentDetail", params: {id}}'>Detail - 2</RouterLink>
                    </td>
                </tr>
            </tbody>
        </table>
        
        <FormEditModel :editIdSelected="editIdSelected" :isShowModal="isShowModal"/>
        <FormModel/>
    </div>
  </div>
</template>

<script setup>
import instanceAxios from '@/utils/configAxios';


import { onMounted, reactive, ref } from 'vue';
import FormEditModel from '@/components/FormEditModel.vue';
import FormModel from '@/components/FormModel.vue';
const students = ref([

]);
const isShowModal = ref(false);


const fetchStudent = async () => {
  const data  = await instanceAxios.get('students');
  students.value = data.data

}

onMounted(() => {
  fetchStudent();
})
const handleCreateStudent = async (student) => {
  const studentResponse = await instanceAxios.post(`students`, student);
  students.value = [...students.value, studentResponse.data];

  // fetchStudent();
}

const deleteStudent = (id) => {
  // console.log(id);
  const deleteStudentResponse = instanceAxios.delete(`students/${id}`);
  students.value = students.value.filter(student => student.id !== id);


}
const editIdSelected = ref('');
const handleEdit = (id) => {
  editIdSelected.value = id;
  isShowModal.value = true;
  console.log(editIdSelected.value);
}

// const message = ref('Hello world');
</script>

<style lang="scss" scoped></style>