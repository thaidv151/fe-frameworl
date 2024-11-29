<template>
    <div>
        <div>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
               EditStudent
            </button>

            <!-- Modal -->
            <div class="modal fade" :class=" isShowModal ? 'show' : '' " :style="isShowModal ? { display:'block' } : { display:'none' }" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">

                    <div class="modal-content">
                        <form action="" @submit.prevent="handleSubmit">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Model Create Student</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="">Name</label>
                                    <input type="text" id="name" class="form-control" v-model="student.name">
                                </div>
                                <div class="form-group">
                                    <label for="">Mssv</label>
                                    <input type="text" id="mssv" class="form-control" v-model="student.mssv">
                                </div>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="a">Close</button>
                                <button type="submit" class="btn btn-primary">Save changes</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';



const student = ref({
    name: '',
    mssv: ''
});
defineProps(['isShowModal']);

</script>

<style lang="scss" scoped></style>