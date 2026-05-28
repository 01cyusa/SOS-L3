import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Components/Home.vue'
import About from '../Components/About.vue'
import Contact from '../Components/Contact.vue'
import Service from '../Components/Service.vue'
import Gallery from '../Components/Gallery.vue'
import Destination from '../Components/Destination.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/service', name: 'Service', component: Service },
    { path: '/gallery', name: 'Gallery', component: Gallery },
    { path: '/destination', name: 'Destination', component: Destination },
    { path: '/contact', name: 'Contact', component: Contact },
  ],
})

export default router
