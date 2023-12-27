import { createRouter, createWebHistory } from 'vue-router'
import PostDetailView from '../views/PostDetailView.vue';
import PostListView from '../views/PostListView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PostListView
    },
    {
      path: '/post/:id',
      name: 'postShow',
      component: PostDetailView
    }
  ]
})

export default router
