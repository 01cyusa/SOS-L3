<template>
  <div class="flex items-center justify-center min-h-screen bg-green-100 px-4">
    <div class="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
      <h2 class="text-3xl font-bold text-green-700 mb-6 text-center">{{ $t('auth.login.title') }}</h2>
      <p class="text-sm text-gray-600 mb-8 text-center">
        {{ $t('auth.login.subtitle') }}
      </p>

      <form @submit.prevent="handleSubmit" class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2" for="email">
            {{ $t('auth.login.emailLabel') }}
          </label>
          <input
            id="email"
            v-model="email"
            type="email"
            :placeholder="$t('auth.login.emailPlaceholder')"
            required
            class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2" for="password">
            {{ $t('auth.login.passwordLabel') }}
          </label>
          <input
            id="password"
            v-model="password"
            type="password"
            :placeholder="$t('auth.login.passwordPlaceholder')"
            required
            class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-green-700 text-white py-3 rounded-xl hover:bg-green-600 transition-colors font-semibold"
        >
          {{ $t('auth.login.signInButton') }}
        </button>
      </form>

      <p v-if="message" :class="messageClass" class="mt-6 text-center text-sm">
        {{ message }}
      </p>

      <p class="text-center text-sm mt-6 text-gray-600">
        {{ $t('auth.login.noAccountText') }}
        <router-link to="/register" class="text-green-600 hover:underline font-semibold">
          {{ $t('auth.login.registerLink') }}
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const router = useRouter()
const { t } = useI18n()
const email = ref('')
const password = ref('')
const message = ref('')
const status = ref('')

const messageClass = computed(() => {
  return status.value === 'success' ? 'text-green-700' : 'text-red-600'
})

const handleSubmit = () => {
  message.value = ''
  status.value = ''

  if (!email.value || !password.value) {
    message.value = t('auth.login.errorBothFields')
    status.value = 'error'
    return
  }

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!validEmail.test(email.value)) {
    message.value = t('auth.login.errorInvalidEmail')
    status.value = 'error'
    return
  }

  // Simulate successful login and navigate to dashboard
  message.value = t('auth.login.successMessage')
  status.value = 'success'
  setTimeout(() => {
    message.value = ''
    router.push('/dashboard')
  }, 800)
}
</script>