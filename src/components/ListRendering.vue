<template>
    <div>
        <div>
            <h3>List Rendering</h3>
        </div>
        <div>
            <ul v-for="food in foods" :key="food">
                <li>{{ food }} </li>
            </ul>
            <ul v-for="(food, index) in foods" :key="food">
                <li>{{ index + 1 }} {{ food }} </li>
            </ul>
        </div>
        <div>
            <h3>v-for with object</h3>
            <div>
                <ul v-for="(value, key) in users" :key="key">
                    <li> {{ key }} : {{ value }}</li>
                </ul>
            </div>
        </div>
        <div>
            <h3>v-for destructuring</h3>
            <ul v-for="({ id, name, address }) in Student" :key="key">
                <li v-if="name === 'John'"> {{ id }} {{ name }} {{ address }}</li>
            </ul>
            <ul v-for="student in Student" :key="student.key">
                <li> {{ student.id }} {{ student.name }} {{ student.address }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
const foods = reactive([
    'rice',
    'noodle',
    'pizza'
])
const users = ({
    name: 'John',
    age: 18,
})
const { name, age: tuoi } = users;
console.log(name, tuoi);
const Student = reactive([
    {
        id: 1,
        name: 'John',
        address: 'My Dinh'
    },
    {
        id: 2,
        name: 'mary',
        address: 'Nam tu liem'
    },
    {
        id: 3,
        name: 'Edie',
        address: 'Dong da'
    },
])
</script>

<style scoped></style>