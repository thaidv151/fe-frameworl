import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import StudentDetail from '@/components/StudentDetail.vue'
import DetailBook from '@/components/asm2/DetailBook.vue'
import ListBooks from '@/components/asm2/listBooks.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListBooks
    },
    {
      path: '/about',
      name: 'about',

      component: AboutView
    },
    {
      path: '/students/:id',
      name: 'studentDetail',
      component: StudentDetail
    },
    {
      path: '/detailBook/:id',
      name: 'detailBook',
      component: DetailBook
    },
  
  ]
})

export default router
