<template>
  <div class="flex items-center justify-center min-h-screen bg-green-100 px-4">
    <div class="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
      <h2 class="text-3xl font-bold text-green-700 mb-2 text-center">{{ $t('auth.register.title') }}</h2>
      <p class="text-sm text-gray-600 mb-6 text-center">
        {{ $t('auth.register.subtitle') }}
      </p>

      <form @submit.prevent="handleRegister" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2" for="fullname">
            {{ $t('auth.register.fullNameLabel') }}
          </label>
          <input
            id="fullname"
            v-model="fullname"
            type="text"
            :placeholder="$t('auth.register.fullNamePlaceholder')"
            required
            class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2" for="email">
            {{ $t('auth.register.emailLabel') }}
          </label>
          <input
            id="email"
            v-model="email"
            type="email"
            :placeholder="$t('auth.register.emailPlaceholder')"
            required
            class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2" for="phone">
            {{ $t('auth.register.phoneLabel') }}
          </label>
          <input
            id="phone"
            v-model="phone"
            type="tel"
            :placeholder="$t('auth.register.phonePlaceholder')"
            required
            class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2" for="age">
            {{ $t('auth.register.ageLabel') }}
          </label>
          <input
            id="age"
            v-model.number="age"
            type="number"
            :placeholder="$t('auth.register.agePlaceholder')"
            min="18"
            max="120"
            required
            class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2" for="gender">
            {{ $t('auth.register.genderLabel') }}
          </label>
          <input
            id="gender"
            v-model="gender"
            type="text"
            :placeholder="$t('auth.register.genderPlaceholder')"
            class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2" for="country">
            {{ $t('auth.register.countryLabel') }}
          </label>
          <input
            id="country"
            v-model="country"
            type="text"
            :placeholder="$t('auth.register.countryPlaceholder')"
            class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2" for="password">
            {{ $t('auth.register.passwordLabel') }}
          </label>
          <input
            id="password"
            v-model="password"
            type="password"
            :placeholder="$t('auth.register.passwordPlaceholder')"
            required
            class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2" for="confirm-password">
            {{ $t('auth.register.confirmPasswordLabel') }}
          </label>
          <input
            id="confirm-password"
            v-model="confirmPassword"
            type="password"
            :placeholder="$t('auth.register.confirmPasswordPlaceholder')"
            required
            class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-green-700 text-white py-3 rounded-xl hover:bg-green-600 transition-colors font-semibold"
        >
          {{ $t('auth.register.createButton') }}
        </button>
      </form>

      <p v-if="message" :class="messageClass" class="mt-6 text-center text-sm">
        {{ message }}
      </p>

      <p class="text-center text-sm mt-4 text-gray-600">
        {{ $t('auth.register.haveAccountText') }}
        <router-link to="/login" class="text-green-600 hover:underline font-semibold">
          {{ $t('auth.register.signInLink') }}
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const fullname = ref('')
const email = ref('')
const phone = ref('')
const age = ref('')
const gender = ref('')
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
    message.value = t('auth.register.errorAllFields')
    status.value = 'error'
    return
  }

  if (age.value < 18) {
    message.value = t('auth.register.errorAge')
    status.value = 'error'
    return
  }

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!validEmail.test(email.value)) {
    message.value = t('auth.register.errorInvalidEmail')
    status.value = 'error'
    return
  }

  if (password.value !== confirmPassword.value) {
    message.value = t('auth.register.errorPasswordMatch')
    status.value = 'error'
    return
  }

  if (password.value.length < 6) {
    message.value = t('auth.register.errorPasswordLength')
    status.value = 'error'
    return
  }

  message.value = t('auth.register.successMessage')
  status.value = 'success'

  // Clear form and redirect after 2 seconds
  setTimeout(() => {
    window.location.hash = '#/login'
  }, 2000)
}
</script>
