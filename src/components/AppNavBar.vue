<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navItems = [
  { key: 'home', route: '/' },
  { key: 'news', route: '/actualites' },
  { key: 'projects', route: '/projets' },
  { key: 'network', route: '/reseau' },
  { key: 'training', route: '/formations' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const toggleLanguage = () => {
  locale.value = locale.value === 'fr' ? 'en' : 'fr'
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out"
    :class="[
      isScrolled
        ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-black/5'
        : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="/" class="flex items-center group">
            <img
              src="/images/logos/logo-web-noir-petit.png"
              alt="Université Senghor"
              class="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              :class="{ 'brightness-0 invert': !isScrolled }"
            />
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-1">
          <a
            v-for="item in navItems"
            :key="item.key"
            :href="item.route"
            class="relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full group"
            :class="[
              isScrolled
                ? 'text-gray-700 hover:text-amber-600'
                : 'text-white/90 hover:text-white'
            ]"
          >
            <span class="relative z-10">{{ t(`nav.${item.key}`) }}</span>
            <span
              class="absolute inset-0 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
              :class="[
                isScrolled
                  ? 'bg-amber-50'
                  : 'bg-white/10'
              ]"
            ></span>
          </a>
        </div>

        <!-- Right Section -->
        <div class="hidden lg:flex items-center space-x-4">
          <!-- Language Toggle -->
          <button
            @click="toggleLanguage"
            class="flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-full transition-all duration-300"
            :class="[
              isScrolled
                ? 'text-gray-600 hover:bg-gray-100'
                : 'text-white/80 hover:bg-white/10'
            ]"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <span>{{ locale.toUpperCase() }}</span>
          </button>

          <!-- CTA Button -->
          <a
            href="/inscription"
            class="relative overflow-hidden px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 group"
            :class="[
              isScrolled
                ? 'bg-amber-500 text-white hover:bg-amber-600 shadow-lg shadow-amber-500/25'
                : 'bg-white text-gray-900 hover:bg-amber-400 hover:text-white'
            ]"
          >
            <span class="relative z-10">{{ t('nav.apply') }}</span>
            <span class="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="lg:hidden p-2 rounded-lg transition-colors duration-300"
          :class="[
            isScrolled
              ? 'text-gray-700 hover:bg-gray-100'
              : 'text-white hover:bg-white/10'
          ]"
        >
          <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
    >
      <div
        v-if="isMobileMenuOpen"
        class="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100"
      >
        <div class="px-4 py-6 space-y-2">
          <a
            v-for="item in navItems"
            :key="item.key"
            :href="item.route"
            class="block px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-amber-50 hover:text-amber-600 transition-all duration-200"
          >
            {{ t(`nav.${item.key}`) }}
          </a>
          <div class="pt-4 mt-4 border-t border-gray-100">
            <a
              href="/inscription"
              class="block w-full px-4 py-3 text-center bg-amber-500 text-white font-semibold rounded-xl hover:bg-amber-600 transition-all duration-200"
            >
              {{ t('nav.apply') }}
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>
