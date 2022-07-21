
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EducationView from '@/views/EducationView.vue'
import VideoView from '@/views/VideoView.vue'
import MusicView from '@/views/MusicView.vue'
import SportView from '@/views/SportView.vue'
import ContactView from '@/views/ContactView.vue'
import NewsView from '@/views/NewsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/category/education',
      name: 'education',
      component: EducationView
    },
    {
      path: '/category/music',
      name: 'Music',
      component: MusicView
    },
    {
      path: '/category/video',
      name: 'Video',
      component: VideoView
    },
    {
      path: '/category/news',
      name: 'News',
      component: NewsView
    },
    {
      path: '/category/sport',
      name: 'Sport',
      component: SportView
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView
    },

    
  ]
})

export default router
