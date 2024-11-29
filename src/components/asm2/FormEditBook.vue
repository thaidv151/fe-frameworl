<template>
    <div>
        <form action="" @submit.prevent="updateBook">
            <div>
                <label for="">title</label>
                <p class="text-danger" v-if="error.title">{{ error.title }}</p>
                <input class="form-control" v-model="book.title" type="text" name="" id="">
            </div>
            <div>
                <label for="">author</label>
                <p class="text-danger" v-if="error.author">{{ error.author }}</p>
                <input class="form-control" v-model="book.author" type="text" name="" id="">
            </div>
            <div>
                <label for="">year</label>
                <p class="text-danger" v-if="error.year">{{ error.year }}</p>
                <input class="form-control" v-model="book.year" type="text" name="" id="">
            </div>
            <div>
                <label for="">cover</label>
                <p class="text-danger" v-if="error.cover">{{ error.cover }}</p>
                <input class="form-control" v-model="book.cover" type="text" name="" id="">
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script setup>
import instanceAxios from '@/utils/configAxios';
import { onMounted, ref } from 'vue';
const error = ref({
    title: '',
    cover: '',
    author: '',
    year: '',
});

const book = ref({});
const { bookId } = defineProps(['bookId']);
console.log(bookId);
const fetchBookEdit = async () => {
    const getBookEditResponse = await instanceAxios.get(`books/${bookId}`);

    book.value = getBookEditResponse.data;
}
const emit = defineEmits(['updateBook']);
const updateBook = () => {
    if (book.value.title === '') {
        error.value.title = 'Không để trống title';
    }
    if (!book.value.author === '') {
        error.value.author = 'Không để trống author';
    }
    if (!book.value.year === '') {
        error.value.year = 'Năm phải không để trống';
    } else if (isNaN(Number(book.value.year))) {
        error.value.year = 'Năm phải là số';
    }
    const httpRegex = /^(http|https):\/\/+[\www\d]+\.[\w]+(\/[\w\d]+)?/;

    if (!httpRegex.test(book.value.cover)) {
        error.value.cover = 'Đương dẫn không hợp lệ';
    }

    if (
        error.value.title === '' &&
        error.value.author === '' &&
        error.value.year === '' &&
        error.value.cover === '' 
    ) {
        emit('updateBook', book.value);
    }
}
onMounted(() => {
    fetchBookEdit()
})
</script>

<style lang="scss" scoped></style>