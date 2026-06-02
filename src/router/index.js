import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../Components/Home.vue'
import About from '../Components/About.vue'
import Contact from '../Components/Contact.vue'
import Service from '../Components/Service.vue'
import Gallery from '../Components/Gallery.vue'
import Destination from '../Components/Destination.vue'
import Province from '../Components/Province.vue'
import Videos from '../Components/Videos.vue'
import GalleryImages from '../Components/GalleryImages.vue'
import Login from '../Components/Login.vue'
import Register from '../Components/Register.vue'
import Dashboard from '../Components/Dashboard.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: Home, alias: '/home' },
    { path: '/about', name: 'About', component: About },
    { path: '/login', name: 'Login', component: Login },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/register', name: 'Register', component: Register },
    { path: '/service', name: 'Service', component: Service, alias: '/services' },
    { path: '/gallery', name: 'Gallery', component: Gallery },
    { path: '/gallery/images', name: 'GalleryImages', component: GalleryImages },
    { path: '/videos', name: 'Videos', component: Videos },
    { path: '/destination', name: 'Destination', component: Destination },
    { path: '/province/:province', name: 'Province', component: Province },
    { path: '/contact', name: 'Contact', component: Contact },
  ],
})

export default router
