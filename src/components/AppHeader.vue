<template>
  <header class="main-header bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 h-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <div class="text-2xl font-bold text-udemy-purple">
            Udemy
          </div>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-8 flex-1 max-w-4xl mx-8">
          <!-- Search Bar -->
          <div class="flex-1 max-w-2xl">
            <div class="relative">
              <input
                type="text"
                :placeholder="$t('header.searchPlaceholder')"
                class="w-full px-4 py-3 pl-12 border-2 border-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-full focus:outline-none focus:ring-2 focus:ring-udemy-purple focus:border-transparent"
              />
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center">
                <svg class="w-5 h-5 text-gray-400 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Navigation Links -->
          <div class="flex items-center space-x-6">
            <div class="group relative">
              <button class="text-gray-700 dark:text-gray-200 hover:text-udemy-purple font-medium">
                {{ $t('header.categories') }}
              </button>
            </div>
            <a href="#" class="text-gray-700 dark:text-gray-200 hover:text-udemy-purple font-medium">
              {{ $t('header.teachOnUdemy') }}
            </a>
            <a href="#" class="text-gray-700 dark:text-gray-200 hover:text-udemy-purple font-medium">
              {{ $t('header.myLearning') }}
            </a>
          </div>
        </nav>

        <!-- Right side - Auth & Cart -->
        <div class="hidden lg:flex items-center space-x-4">
          <!-- Theme Toggle -->
          <ThemeToggle />
          
          <!-- Cart -->
          <button class="relative p-2 text-gray-700 dark:text-gray-200 hover:text-udemy-purple">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6m0 0h-.9m15.5 6v0a1.5 1.5 0 01-1.5 1.5H9m12 0H9m0 0a1.5 1.5 0 01-1.5-1.5V15" />
            </svg>
          </button>

          <!-- Auth Buttons -->
          <button class="px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-udemy-purple font-medium border border-gray-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
            {{ $t('header.login') }}
          </button>
          <button class="px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600 font-medium">
            {{ $t('header.signup') }}
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="lg:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-udemy-purple focus:outline-none focus:ring-2 focus:ring-udemy-purple"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-show="mobileMenuOpen" class="lg:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700">
      <div class="px-4 py-4 space-y-4">
        <!-- Mobile Search -->
        <div class="relative">
          <input
            type="text"
            :placeholder="$t('header.searchPlaceholder')"
            class="w-full px-4 py-3 pl-12 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-udemy-purple"
          />
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <!-- Mobile Navigation Links -->
        <div class="space-y-3">
          <a href="#" class="block text-gray-700 dark:text-gray-200 hover:text-udemy-purple font-medium">
            {{ $t('header.categories') }}
          </a>
          <a href="#" class="block text-gray-700 dark:text-gray-200 hover:text-udemy-purple font-medium">
            {{ $t('header.teachOnUdemy') }}
          </a>
          <a href="#" class="block text-gray-700 dark:text-gray-200 hover:text-udemy-purple font-medium">
            {{ $t('header.myLearning') }}
          </a>
        </div>

        <!-- Mobile Auth Buttons -->
        <div class="space-y-3 pt-4 border-t">
          <!-- Theme Toggle for Mobile -->
          <div class="flex justify-center mb-3">
            <ThemeToggle />
          </div>
          <button class="w-full px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-udemy-purple font-medium border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 rounded">
            {{ $t('header.login') }}
          </button>
          <button class="w-full px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600 font-medium rounded">
            {{ $t('header.signup') }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

const mobileMenuOpen = ref(false)
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
</style>