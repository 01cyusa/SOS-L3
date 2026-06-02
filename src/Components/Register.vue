<template>
  <div class="flex items-center justify-center min-h-screen bg-green-100 px-4">
    <div class="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
      <h2 class="text-3xl font-bold text-green-700 mb-2 text-center">Register</h2>
      <p class="text-sm text-gray-600 mb-6 text-center">
        Join us and start your journey today
      </p>

      <form @submit.prevent="handleRegister" class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2" for="fullname">
            Full Name
          </label>
          <input
            id="fullname"
            v-model="fullname"
            type="text"
            placeholder="Enter your full name"
            required
            class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2" for="email">
            Email Address
          </label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="Please Enter Your Password"
            required
            class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2" for="phone">
            Phone Number
          </label>
          <input
            id="phone"
            v-model="phone"
            type="tel"
            placeholder="Please Enter Your Phone Number"
            required
            class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2" for="age">
            Age
          </label>
          <input
            id="age"
            v-model.number="age"
            type="number"
            placeholder="Enter your age"
            min="18"
            max="120"
            required
            class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>
           <div>
          <label class="block text-sm font-medium text-gray-700 mb-2" for="Gender">
            Gender
          </label>
          <input
            id="country"
            v-model="Gender"
            type="text"
            placeholder="Please Enter your Gender"
            class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2" for="country">
            Country
          </label>
          <input
            id="country"
            v-model="country"
            type="text"
            placeholder="Please Enter your country"
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
            placeholder="Create a password"
            required
            class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2" for="confirm-password">
            Confirm Password
          </label>
          <input
            id="confirm-password"
            v-model="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            required
            class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-green-700 text-white py-3 rounded-xl hover:bg-green-600 transition-colors font-semibold"
        >
          Create Account
        </button>
      </form>

      <p v-if="message" :class="messageClass" class="mt-6 text-center text-sm">
        {{ message }}
      </p>

      <p class="text-center text-sm mt-4 text-gray-600">
        Already have an account?
        <router-link to="/login" class="text-green-600 hover:underline font-semibold">
          Sign in
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const fullname = ref('')
const email = ref('')
const phone = ref('')
const age = ref('')
const country = ref('')
const password = ref('')
const confirmPassword = ref('')
const message = ref('')
const status = ref('')

const messageClass = computed(() => {
  return status.value === 'success'
    ? 'text-green-700'
    : 'text-red-600'
})

const handleRegister = () => {
  message.value = ''
  status.value = ''

  if (!fullname.value || !email.value || !phone.value || !age.value || !password.value || !confirmPassword.value) {
    message.value = 'Please fill in all required fields.'
    status.value = 'error'
    return
  }

  if (age.value < 18) {
    message.value = 'You must be at least 18 years old to register.'
    status.value = 'error'
    return
  }

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!validEmail.test(email.value)) {
    message.value = 'Please enter a valid email address.'
    status.value = 'error'
    return
  }

  if (password.value !== confirmPassword.value) {
    message.value = 'Passwords do not match.'
    status.value = 'error'
    return
  }

  if (password.value.length < 6) {
    message.value = 'Password must be at least 6 characters.'
    status.value = 'error'
    return
  }

  message.value = 'Registration successful! Redirecting to login...'
  status.value = 'success'

  // Clear form and redirect after 2 seconds
  setTimeout(() => {
    window.location.hash = '#/login'
  }, 2000)
}
</script>
