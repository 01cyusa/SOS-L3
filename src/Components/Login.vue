<template>
  <div class="flex items-center justify-center min-h-screen bg-green-100 px-4">
    <div class="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
      <h2 class="text-3xl font-bold text-green-700 mb-6 text-center">Log In</h2>
      <p class="text-sm text-gray-600 mb-8 text-center">
        Sign in to access your account and continue exploring the site.
      </p>

      <form @submit.prevent="handleSubmit" class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2" for="email">
            Email address
          </label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="Please Enter Your Email"
            required
            class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2" for="password">
            Password
          </label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="Please Enter your password"
            required
            class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-green-700 text-white py-3 rounded-xl hover:bg-green-600 transition-colors font-semibold"
        >
          Sign in
        </button>
      </form>

      <p v-if="message" :class="messageClass" class="mt-6 text-center text-sm">
        {{ message }}
      </p>

      <p class="text-center text-sm mt-6 text-gray-600">
        Don't have an account?
        <router-link to="/register" class="text-green-600 hover:underline font-semibold">
          Register
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const email = ref('')
const password = ref('')
const message = ref('')
const status = ref('')

const messageClass = computed(() => {
  return status.value === 'success'
    ? 'text-green-700'
    : 'text-red-600'
})

const handleSubmit = () => {
  message.value = ''
  status.value = ''

  if (!email.value || !password.value) {
    message.value = 'Please enter both email and password.'
    status.value = 'error'
    return
  }

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!validEmail.test(email.value)) {
    message.value = 'Please enter a valid email address.'
    status.value = 'error'
    return
  }

  message.value = 'Login successful. Redirecting...'
  status.value = 'success'
  setTimeout(() => {
    message.value = ''
  }, 3000)
}
</script>