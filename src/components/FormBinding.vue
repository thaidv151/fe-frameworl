<template>
    <div>
        <div>
            <h3>Form Binding</h3>
            <form action="" >
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" v-model="email" id="">
                </div>
                <p>{{email }}</p>
                <div class="form-group">
                    <!-- multi text -->
                    <label for="contact">Contact</label>
                    <textarea placeholder="Please enter contact"  v-model="contact" id=""></textarea>
                </div>
                <p>{{ contact }}</p>
                <!-- checkbox -->
                <div class="form-group">
                    <label for="term">Term</label>
                    <input type="checkbox" v-model="term">
                </div>
                <p>{{ term }}</p>
                <!-- mutil checkbox -->
                <div class="form-group">
                    <label for="html">html</label>
                    <input type="checkbox" value="html"  name="html" v-model="courseName" >
                </div>
                <div class="form-group">
                    <label for="css">css</label>
                    <input type="checkbox" value="css" name="css" v-model="courseName">
                </div>
                <p>{{ courseName }}</p>
                <!-- select option -->
                <div class="form-group">
                    <label for="course">Course</label>
                    <select name="course" id="course" v-model="course">
                        <option value="">Chon di</option>
                        <option value="html">html</option>
                        <option value="css">css</option>
                        <option value="php">php</option>
                        <option value="js">js</option>
                    </select>
                </div>
                <p>{{ course }}</p>
                <!-- radio -->
                <div class="form-group">
                    <label for="gender">gender</label>
                    <label for="male">Male</label>
                    <input type="radio" value="male" v-model="gender">
                    <label for="female">Female</label>
                    <input type="radio" value="female" v-model="gender">
                </div>
                <p>{{ gender }}</p>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const course = ref('');
const term = ref(false);
const contact= ref('')
const email = ref('');
const courseName = ref([]);
const gender = ref('')
</script>

<style scoped>

</style>