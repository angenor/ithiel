<template>
  <section class="hero-section relative h-screen bg-gradient-to-r from-gray-800 to-gray-600 overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" 
         style="background-image: url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')">
    </div>
    
    <!-- Overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
    
    <!-- Content -->
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
      <div class="flex items-center h-full">
        <div class="max-w-2xl">
          <!-- Title -->
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
            {{ $t('hero.title') }}
          </h1>
          
          <!-- Subtitle -->
          <p class="text-xl text-gray-200 mb-8 drop-shadow-md">
            {{ $t('hero.subtitle') }}
          </p>
          
          <!-- Search Bar -->
          <div class="mb-8">
            <div class="relative max-w-xl">
              <input
                type="text"
                :placeholder="$t('hero.searchPlaceholder')"
                class="w-full px-6 py-4 pl-14 text-lg border-0 rounded-lg focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg dark:bg-gray-800 dark:text-white dark:placeholder-gray-300 bg-gray-100 text-gray-900 placeholder-gray-500"
              />
              <div class="absolute inset-y-0 left-0 pl-5 flex items-center">
                <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          <!-- Popular Categories -->
          <div class="flex flex-wrap gap-3 items-center">
            <span class="text-white/90 text-sm font-medium">{{ $t('hero.popularTopics') }}:</span>
            <button 
              v-for="category in popularCategories" 
              :key="category"
              class="px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm font-medium rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40"
            >
              {{ $t(`hero.categories.${category}`) }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const popularCategories = [
  'technology',
  'business', 
  'design',
  'marketing',
  'personalDevelopment'
]
</script>

<style scoped>
.h-400 {
  height: 25rem;
}
</style>