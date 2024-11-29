<template>
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>title</th>
                    <th>author</th>
                    <th>year</th>
                    <th>cover</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ bookDetail.id }}</td>
                    <td>{{ bookDetail.title }} </td>
                    <td>{{ bookDetail.author }}</td>
                    <td>{{ bookDetail.year }}</td>
                    <td>{{ bookDetail.cover }}</td>
                </tr>
            </tbody>
        </table>
        <RouterLink class="btn btn-light" :to="'/'">Cancel</RouterLink>
    </div>
</template>

<script setup>
import instanceAxios from '@/utils/configAxios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const bookDetail = ref({})
const { params } = useRoute();



const fetchDetailBook = async () => {
    const getBookDetailResponse = await instanceAxios.get(`books/${params.id}`);
    bookDetail.value = getBookDetailResponse.data;
    

}
onMounted(() => {
    fetchDetailBook()
})
</script>

<style lang="scss" scoped></style>