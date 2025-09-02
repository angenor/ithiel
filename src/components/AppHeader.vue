<template>
  <header class="main-header shadow-sm sticky top-0 z-50 h-20 animate-slide-down backdrop-blur-md bg-white/90 dark:bg-gray-900/95">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo with Animation -->
        <div class="flex-shrink-0 animate-fade-in-scale">
          <div class="text-2xl font-bold text-udemy-purple hover:scale-105 transition-all duration-300 cursor-pointer">
            Ithiel
          </div>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-8 flex-1 max-w-4xl mx-8 animate-fade-in-delayed">
          <!-- Search Bar with Enhanced Animation -->
          <div class="flex-1 max-w-2xl">
            <div class="relative group">
              <input
                ref="searchInput"
                type="text"
                :placeholder="$t('header.searchPlaceholder')"
                class="w-3/4 group-hover:w-full px-4 py-3 pl-12 border-2 border-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-full focus:outline-none focus:ring-2 focus:ring-udemy-purple focus:border-transparent transition-all duration-500 ease-in-out hover:shadow-lg focus:shadow-xl focus:-translate-y-1 transform focus:w-full focus:scale-105"
                @focus="handleSearchFocus"
                @blur="handleSearchBlur"
              />
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center transition-all duration-500 ease-in-out"
                   :class="{ 
                     'text-udemy-purple scale-110 rotate-12': isSearchFocused, 
                     'text-gray-400 dark:text-gray-300 scale-100 rotate-0': !isSearchFocused 
                   }">
                <svg class="w-5 h-5 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <!-- Search glow effect -->
              <div class="absolute inset-0 rounded-full bg-gradient-to-r from-udemy-purple/20 to-purple-600/20 opacity-0 blur-md transition-all duration-500 ease-in-out scale-95"
                   :class="{ 'opacity-100 scale-110': isSearchFocused }"></div>
              <!-- Ripple effect on focus -->
              <div v-if="isSearchFocused" class="absolute inset-0 rounded-full border-2 border-udemy-purple/30 animate-ping"></div>
            </div>
          </div>

          <!-- Navigation Links with Enhanced Hover -->
          <div class="flex items-center space-x-6">
            <div class="group relative">
              <button class="text-gray-700 dark:text-gray-200 hover:text-udemy-purple font-medium transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden">
                {{ $t('header.categories') }}
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-udemy-purple transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>
            <a href="#" class="text-gray-700 dark:text-gray-200 hover:text-udemy-purple font-medium transition-all duration-300 hover:scale-105 active:scale-95 relative group overflow-hidden">
              {{ $t('header.teachOnUdemy') }}
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-udemy-purple transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" class="text-gray-700 dark:text-gray-200 hover:text-udemy-purple font-medium transition-all duration-300 hover:scale-105 active:scale-95 relative group overflow-hidden">
              {{ $t('header.myLearning') }}
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-udemy-purple transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </nav>

        <!-- Right side - Auth & Cart with Staggered Animation -->
        <div class="hidden lg:flex items-center space-x-4 animate-fade-in-delayed-2">
          <!-- Language Switcher with hover animation -->
          <div class="transform transition-all duration-300 hover:scale-105">
            <LanguageSwitcher />
          </div>
          
          <!-- Theme Toggle with hover animation -->
          <div class="transform transition-all duration-300 hover:scale-105">
            <ThemeToggle />
          </div>
          
          <!-- Cart with bounce animation -->
          <button class="relative p-2 text-gray-700 dark:text-gray-200 hover:text-udemy-purple transition-all duration-300 hover:scale-110 active:scale-95 hover:rotate-6">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6m0 0h-.9m15.5 6v0a1.5 1.5 0 01-1.5 1.5H9m12 0H9m0 0a1.5 1.5 0 01-1.5-1.5V15" />
            </svg>
            <!-- Cart badge with pulse animation -->
            <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">3</span>
          </button>

          <!-- Auth Buttons with Enhanced Styling -->
          <button class="px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-udemy-purple font-medium border border-gray-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md active:scale-95">
            {{ $t('header.login') }}
          </button>
          <button class="px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600 font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 relative overflow-hidden group">
            <span class="relative z-10">{{ $t('header.signup') }}</span>
            <span class="absolute inset-0 bg-gradient-to-r from-udemy-purple to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
          </button>
        </div>

        <!-- Mobile menu button with Animation -->
        <div class="lg:hidden animate-fade-in-delayed">
          <button
            @click="toggleMobileMenu"
            class="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-udemy-purple focus:outline-none focus:ring-2 focus:ring-udemy-purple transition-all duration-300 hover:scale-110 active:scale-95"
            :class="{ 'rotate-90': mobileMenuOpen }"
          >
            <svg class="w-6 h-6 transition-transform duration-300" :class="{ 'rotate-45': mobileMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu with Slide Animation -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-show="mobileMenuOpen" class="lg:hidden bg-white/95 dark:bg-gray-900/95 border-t dark:border-gray-700 backdrop-blur-md">
        <div class="px-4 py-4 space-y-4">
          <!-- Mobile Search with Animation -->
          <div class="relative animate-slide-in-mobile">
            <input
              type="text"
              :placeholder="$t('header.searchPlaceholder')"
              class="w-full px-4 py-3 pl-12 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-udemy-purple transition-all duration-300 hover:shadow-md focus:shadow-lg"
            />
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center">
              <svg class="w-5 h-5 text-gray-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <!-- Mobile Navigation Links with Staggered Animation -->
          <div class="space-y-3">
            <a href="#" class="block text-gray-700 dark:text-gray-200 hover:text-udemy-purple font-medium transition-all duration-300 hover:translate-x-2 hover:scale-105 animate-slide-in-mobile-stagger" style="animation-delay: 100ms;">
              {{ $t('header.categories') }}
            </a>
            <a href="#" class="block text-gray-700 dark:text-gray-200 hover:text-udemy-purple font-medium transition-all duration-300 hover:translate-x-2 hover:scale-105 animate-slide-in-mobile-stagger" style="animation-delay: 200ms;">
              {{ $t('header.teachOnUdemy') }}
            </a>
            <a href="#" class="block text-gray-700 dark:text-gray-200 hover:text-udemy-purple font-medium transition-all duration-300 hover:translate-x-2 hover:scale-105 animate-slide-in-mobile-stagger" style="animation-delay: 300ms;">
              {{ $t('header.myLearning') }}
            </a>
          </div>

          <!-- Mobile Auth Buttons with Animation -->
          <div class="space-y-3 pt-4 border-t animate-slide-in-mobile-stagger" style="animation-delay: 400ms;">
            <!-- Language Switcher and Theme Toggle for Mobile -->
            <div class="flex justify-center gap-4 mb-3">
              <div class="transform transition-all duration-300 hover:scale-105">
                <LanguageSwitcher />
              </div>
              <div class="transform transition-all duration-300 hover:scale-105">
                <ThemeToggle />
              </div>
            </div>
            <button class="w-full px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-udemy-purple font-medium border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-all duration-300 hover:scale-105 active:scale-95">
              {{ $t('header.login') }}
            </button>
            <button class="w-full px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600 font-medium rounded transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden group">
              <span class="relative z-10">{{ $t('header.signup') }}</span>
              <span class="absolute inset-0 bg-gradient-to-r from-udemy-purple to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </button>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import ThemeToggle from './ThemeToggle.vue'
import LanguageSwitcher from './LanguageSwitcher.vue'

const mobileMenuOpen = ref(false)
const isSearchFocused = ref(false)
const searchInput = ref(null)

const handleSearchFocus = () => {
  isSearchFocused.value = true
}

const handleSearchBlur = () => {
  isSearchFocused.value = false
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<style scoped>
.text-udemy-purple {
  color: #A435F0;
}
.ring-udemy-purple {
  --tw-ring-color: #A435F0;
}
.hover\:text-udemy-purple:hover {
  color: #A435F0;
}

/* Custom Udemy Purple Colors */
.from-udemy-purple\/20 {
  --tw-gradient-from: rgba(164, 53, 240, 0.2);
}
.to-purple-600\/20 {
  --tw-gradient-to: rgba(147, 51, 234, 0.2);
}
.from-udemy-purple {
  --tw-gradient-from: #A435F0;
}
.border-udemy-purple\/30 {
  border-color: rgba(164, 53, 240, 0.3);
}

/* Header slide down animation */
@keyframes slide-down {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Fade in animations with scale */
@keyframes fade-in-scale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Mobile slide in animations */
@keyframes slide-in-mobile {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-in-mobile-stagger {
  from {
    opacity: 0;
    transform: translateX(-15px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Animation classes */
.animate-slide-down {
  animation: slide-down 0.6s ease-out;
}

.animate-fade-in-scale {
  animation: fade-in-scale 0.8s ease-out 0.2s both;
}

.animate-fade-in-delayed {
  animation: fade-in 0.8s ease-out 0.4s both;
}

.animate-fade-in-delayed-2 {
  animation: fade-in 0.8s ease-out 0.6s both;
}

.animate-slide-in-mobile {
  animation: slide-in-mobile 0.4s ease-out;
}

.animate-slide-in-mobile-stagger {
  animation: slide-in-mobile-stagger 0.4s ease-out both;
  opacity: 0;
}

/* Enhanced search animations */
.group:hover input:not(:focus) {
  transform: translateX(8px);
}

/* Custom ping animation for ripple effect */
@keyframes ping {
  75%, 100% {
    transform: scale(1.2);
    opacity: 0;
  }
}

.animate-ping {
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}

/* Smooth transitions for search width changes */
input[type="text"] {
  transition-property: width, transform, box-shadow, border-color, background-color, color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Mobile responsiveness */
@media (max-width: 1024px) {
  .animate-fade-in-delayed,
  .animate-fade-in-delayed-2,
  .animate-fade-in-scale {
    animation-duration: 0.5s;
  }
}

/* Accessibility: Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  .animate-slide-down,
  .animate-fade-in-scale,
  .animate-fade-in-delayed,
  .animate-fade-in-delayed-2,
  .animate-slide-in-mobile,
  .animate-slide-in-mobile-stagger,
  .animate-ping {
    animation: none;
    opacity: 1;
    transform: none;
  }
  
  * {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}

/* Backdrop blur fallback */
@supports not (backdrop-filter: blur(12px)) {
  .backdrop-blur-md {
    background-color: rgba(255, 255, 255, 0.98);
  }
  .dark .backdrop-blur-md {
    background-color: rgba(17, 24, 39, 0.98);
  }
}
</style>