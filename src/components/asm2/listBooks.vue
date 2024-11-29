<template>
    <div>
        <table class="table table striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>title</th>
                    <th>author</th>
                    <th>year</th>
                    <th>cover</th>
                    <th>Active</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="{ id, title, author, year, cover } in ListBooks">
                    <td>{{ id }}</td>
                    <td>{{ title }}</td>
                    <td>{{ author }}</td>
                    <td>{{ year }}</td>
                    <td>{{ cover }}</td>
                    <td>
                        <button class="btn btn-danger" @click="handkeDeleteBook(id)">delete</button>
                        <button class="btn btn-warning" @click="handleEditBook(id)">edit</button>
                        <RouterLink class="btn btn-success" :to='{ name: "detailBook", params: { id } }'>Detail
                        </RouterLink>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div>
        <button @click="handleFormAddBook()">Thêm sách</button>
    </div>
    <form v-if="isShowFormAddBook" action="" @submit.prevent="insertBook">
        <div>
            <label for="">title</label>
            <p class="text-danger" v-if="error.title">{{ error.title }}</p>
            <input class="form-control" v-model="newBook.title" type="text" name="" id="">
        </div>
        <div>
            <label for="">author</label>
            <p class="text-danger" v-if="error.author">{{ error.author }}</p>
            <input class="form-control" v-model="newBook.author" type="text" name="" id="">
        </div>
        <div>
            <label for="">year</label>
            <p class="text-danger" v-if="error.year">{{ error.year }}</p>
            <input class="form-control" v-model="newBook.year" type="text" name="" id="">
        </div>
        <div>
            <label for="">cover</label>
            <p class="text-danger" v-if="error.cover">{{ error.cover }}</p>
            <input class="form-control" v-model="newBook.cover" type="text" name="" id="">
        </div>
        <button type="submit">Submit</button>
    </form>
    <FormEditBook v-if="isShowFormEdit" :bookId="bookId" @updateBook="handleUpdateBook" />
</template>

<script setup>
import instanceAxios from '@/utils/configAxios';
import { onMounted, ref } from 'vue';
import DetailBook from './DetailBook.vue';
import FormEditBook from './FormEditBook.vue';
import { Flashlight } from 'lucide-vue-next';

const ListBooks = ref([]);
const handleUpdateBook = async (book) => {
    const updateBookResponse = await instanceAxios.put(`books/${book.id}`, book);
    isShowFormEdit.value = false;
    fetchBook();
}
const fetchBook = async () => {
    const getBookResponse = await instanceAxios.get(`books`);
    console.log(getBookResponse.data);
    ListBooks.value = getBookResponse.data;
}
onMounted(() => {
    fetchBook();
})
const isShowFormAddBook = ref(false);
const newBook = ref({
    title: '',
    author: '',
    year: '',
    cover: '',
})
const handleFormAddBook = () => {
    isShowFormAddBook.value = true;
}
const error = ref({
    title: '',
    cover: '',
    author: '',
    year: '',
});

const insertBook = async () => {

    if (!newBook.value.title) {
        error.value.title = 'Không để trống title';
    }
    if (!newBook.value.author) {
        error.value.author = 'Không để trống author';
    }
    if (!newBook.value.year) {
        error.value.year = 'Năm phải không để trống';
    }else if (isNaN(Number(newBook.value.year))) {
        error.value.year = 'Năm phải là số';
    }
    const httpRegex = /^(http|https):\/\/+[\www\d]+\.[\w]+(\/[\w\d]+)?/;

    if (!httpRegex.test(newBook.value.cover)) {
        error.value.cover = 'Đương dẫn không hợp lệ';
    }
    if (
        error.value.title === '' &&
        error.value.author === '' &&
        error.value.year === '' &&
        error.value.cover === '' 
    )  {
        const inserBookResponse = await instanceAxios.post(`books`, newBook.value);
        fetchBook();
        newBook.value.title = '';
        newBook.value.author = '';
        newBook.value.year = '';
        newBook.value.cover = '';
        isShowFormAddBook.value = false
    }
}
const handkeDeleteBook = async (id) => {
    if (confirm('Bạn có xác nhận xoá')) {
        const deleteResponse = await instanceAxios.delete(`books/${id}`);
        fetchBook();
    }
}
const bookId = ref('');
const isShowFormEdit = ref(false);
const handleEditBook = (id) => {
    isShowFormEdit.value = true;
    bookId.value = id;
}

</script>

<style lang="scss" scoped></style>