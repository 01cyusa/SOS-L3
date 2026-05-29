import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import fr from './locales/fr.json'
import rw from './locales/rw.json'

const messages = { en, fr, rw }

const i18n = createI18n({
	legacy: true,
	locale: 'en',
	fallbackLocale: 'en',
	messages
})

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
