<template>
  <section class="hero-section relative bg-gradient-to-r from-gray-800 to-gray-600 overflow-hidden" style="height: calc(100vh - 5rem)">
    <!-- Background Image with Parallax -->
    <div ref="backgroundRef" class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 transform scale-110 transition-transform duration-700 ease-out" 
         style="background-image: url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')">
    </div>
    
    <!-- Animated Overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 animate-fade-in"></div>
    
    <!-- Floating Particles -->
    <div class="absolute inset-0 overflow-hidden">
      <div v-for="i in 20" :key="i" 
           class="absolute w-2 h-2 bg-white/10 rounded-full animate-float"
           :style="getParticleStyle(i)">
      </div>
    </div>
    
    <!-- Content -->
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
      <div class="flex items-center h-full">
        <div class="max-w-2xl">
          <!-- Title with Animation -->
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg transform transition-all duration-1000 ease-out animate-slide-up-fade-in">
            {{ $t('hero.title') }}
          </h1>
          
          <!-- Subtitle with Delayed Animation -->
          <p class="text-xl text-gray-200 mb-8 drop-shadow-md transform transition-all duration-1000 ease-out animate-slide-up-fade-in-delayed">
            {{ $t('hero.subtitle') }}
          </p>
          
          <!-- Modern Search Bar with Advanced Animation -->
          <div class="mb-8 animate-slide-up-fade-in-delayed-2">
            <div class="relative max-w-xl group hero-search-container">
              <div class="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none transition-all duration-300 group-focus-within:text-udemy-purple">
                <svg class="w-6 h-6 text-gray-400 group-focus-within:text-udemy-purple transition-all duration-300 group-focus-within:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              
              <input
                ref="searchInput"
                type="text"
                v-model="heroSearchQuery"
                @focus="isHeroSearchFocused = true"
                @blur="isHeroSearchFocused = false"
                @input="onHeroSearchInput"
                :placeholder="$t('hero.searchPlaceholder')"
                class="w-full px-6 py-4 pl-14 pr-12 text-lg border-0 rounded-2xl focus:outline-none focus:ring-4 focus:ring-udemy-purple/30 shadow-lg dark:bg-gray-800/90 dark:text-white dark:placeholder-gray-300 bg-white/95 text-gray-900 placeholder-gray-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus:shadow-2xl focus:-translate-y-2 transform backdrop-blur-md hero-search-input"
                :class="{ 'ring-4 ring-udemy-purple/30 shadow-2xl': isHeroSearchFocused }"
              />
              
              <!-- Clear button with animation -->
              <div class="absolute inset-y-0 right-0 pr-5 flex items-center">
                <button
                  v-show="heroSearchQuery"
                  @click="clearHeroSearch"
                  class="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-200 hover:scale-110 active:scale-95 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700/50 backdrop-blur-sm"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <!-- Enhanced search suggestions dropdown with glassmorphism -->
              <transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 transform -translate-y-4 scale-95"
                enter-to-class="opacity-100 transform translate-y-0 scale-100"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 transform translate-y-0 scale-100"
                leave-to-class="opacity-0 transform -translate-y-4 scale-95"
              >
                <div
                  v-show="isHeroSearchFocused && heroSearchQuery"
                  class="absolute top-full left-0 right-0 mt-4 bg-white/95 dark:bg-gray-800/95 rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/50 backdrop-blur-md z-50 overflow-hidden"
                >
                  <div class="p-6">
                    <div class="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium">{{ $t('common.search') }} suggestions</div>
                    <div class="space-y-3">
                      <a href="#" class="flex items-center px-4 py-3 rounded-xl hover:bg-gray-50/80 dark:hover:bg-gray-700/50 transition-all duration-200 hover:translate-x-2 group backdrop-blur-sm">
                        <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-udemy-purple to-purple-600 rounded-full flex items-center justify-center mr-4">
                          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <div class="flex-grow">
                          <div class="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-udemy-purple transition-colors">Vue.js Masterclass</div>
                          <div class="text-sm text-gray-500 dark:text-gray-400">Développement web • 127 cours</div>
                        </div>
                        <div class="flex-shrink-0">
                          <svg class="w-5 h-5 text-gray-400 group-hover:text-udemy-purple transition-all duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </a>
                      <a href="#" class="flex items-center px-4 py-3 rounded-xl hover:bg-gray-50/80 dark:hover:bg-gray-700/50 transition-all duration-200 hover:translate-x-2 group backdrop-blur-sm">
                        <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                          </svg>
                        </div>
                        <div class="flex-grow">
                          <div class="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-udemy-purple transition-colors">JavaScript Moderne</div>
                          <div class="text-sm text-gray-500 dark:text-gray-400">Programmation • 89 cours</div>
                        </div>
                        <div class="flex-shrink-0">
                          <svg class="w-5 h-5 text-gray-400 group-hover:text-udemy-purple transition-all duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </a>
                      <a href="#" class="flex items-center px-4 py-3 rounded-xl hover:bg-gray-50/80 dark:hover:bg-gray-700/50 transition-all duration-200 hover:translate-x-2 group backdrop-blur-sm">
                        <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                        </div>
                        <div class="flex-grow">
                          <div class="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-udemy-purple transition-colors">Design UI/UX</div>
                          <div class="text-sm text-gray-500 dark:text-gray-400">Design • 156 cours</div>
                        </div>
                        <div class="flex-shrink-0">
                          <svg class="w-5 h-5 text-gray-400 group-hover:text-udemy-purple transition-all duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
          
          <!-- Popular Categories with Staggered Animation -->
          <div class="flex flex-wrap gap-3 items-center animate-slide-up-fade-in-delayed-3">
            <span class="text-white/90 text-sm font-medium transform transition-all duration-500 hover:scale-105">
              {{ $t('hero.popularTopics') }}:
            </span>
            <button 
              v-for="(category, index) in popularCategories" 
              :key="category"
              class="px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm font-medium rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg active:scale-95 animate-slide-up-stagger"
              :style="{ animationDelay: `${index * 100 + 800}ms` }"
              @mouseenter="handleCategoryHover"
            >
              {{ $t(`hero.categories.${category}`) }}
            </button>
          </div>
        </div>
      </div>
    </div>
    
    
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow cursor-pointer group" @click="scrollToNextSection">
      <div class="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center transition-all duration-300 group-hover:border-white/80 group-hover:scale-110 group-active:scale-95">
        <div class="w-1 h-3 bg-white/70 rounded-full mt-2 animate-scroll-indicator transition-all duration-300 group-hover:bg-white/90"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const popularCategories = [
  'technology',
  'business', 
  'design',
  'marketing',
  'personalDevelopment'
]

const isSearchFocused = ref(false)
const isHeroSearchFocused = ref(false)
const heroSearchQuery = ref('')
const backgroundRef = ref(null)
const searchInput = ref(null)

const handleCategoryHover = () => {
  // Subtle haptic feedback or sound effect could be added here
}

const clearHeroSearch = () => {
  heroSearchQuery.value = ''
}

const onHeroSearchInput = (event) => {
  heroSearchQuery.value = event.target.value
}

const getParticleStyle = (index) => {
  const size = Math.random() * 3 + 1
  return {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 10}s`,
    animationDuration: `${10 + Math.random() * 20}s`,
    width: `${size}px`,
    height: `${size}px`,
  }
}

const handleScroll = () => {
  if (backgroundRef.value) {
    const scrolled = window.pageYOffset
    const rate = scrolled * -0.5
    backgroundRef.value.style.transform = `scale(1.1) translateY(${rate}px)`
  }
}

const scrollToNextSection = () => {
  const heroHeight = window.innerHeight - 80 // 5rem = 80px (header height)
  window.scrollTo({
    top: heroHeight,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.h-400 {
  height: 25rem;
}

/* Fade in animation */
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide up and fade in animations */
@keyframes slide-up-fade-in {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Floating particles animation */
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-20px) rotate(90deg);
  }
  50% {
    transform: translateY(-10px) rotate(180deg);
  }
  75% {
    transform: translateY(-15px) rotate(270deg);
  }
}

/* Bounce slow animation for scroll indicator */
@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0) translateX(-50%);
  }
  50% {
    transform: translateY(-10px) translateX(-50%);
  }
}

/* Scroll indicator animation */
@keyframes scroll-indicator {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(15px);
    opacity: 0.5;
  }
  100% {
    transform: translateY(30px);
    opacity: 0;
  }
}

/* Animation classes */
.animate-fade-in {
  animation: fade-in 1.5s ease-out;
}

.animate-slide-up-fade-in {
  animation: slide-up-fade-in 1s ease-out 0.3s both;
}

.animate-slide-up-fade-in-delayed {
  animation: slide-up-fade-in 1s ease-out 0.6s both;
}

.animate-slide-up-fade-in-delayed-2 {
  animation: slide-up-fade-in 1s ease-out 0.9s both;
}

.animate-slide-up-fade-in-delayed-3 {
  animation: slide-up-fade-in 1s ease-out 1.2s both;
}

.animate-slide-up-stagger {
  animation: slide-up-fade-in 0.6s ease-out both;
  opacity: 0;
  transform: translateY(20px);
}

.animate-float {
  animation: float linear infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 2s infinite;
}

.animate-scroll-indicator {
  animation: scroll-indicator 2s infinite;
}

/* Enhanced hover effects */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

/* Glassmorphism effect for search bar */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

/* Custom focus ring */
.focus\:ring-4:focus {
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.3);
}

/* Smooth transitions for all interactive elements */
* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom gradient overlay with animation */
.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, 
    rgba(59, 130, 246, 0.1) 0%, 
    transparent 25%, 
    transparent 75%, 
    rgba(147, 51, 234, 0.1) 100%);
  animation: gradient-shift 8s ease-in-out infinite;
  pointer-events: none;
}

@keyframes gradient-shift {
  0%, 100% {
    opacity: 0.3;
    transform: translateX(0);
  }
  50% {
    opacity: 0.6;
    transform: translateX(20px);
  }
}

/* Responsive animation adjustments */
@media (prefers-reduced-motion: reduce) {
  .animate-slide-up-fade-in,
  .animate-slide-up-fade-in-delayed,
  .animate-slide-up-fade-in-delayed-2,
  .animate-slide-up-fade-in-delayed-3,
  .animate-slide-up-stagger,
  .animate-float,
  .animate-bounce-slow,
  .animate-scroll-indicator,
  .animate-fade-in {
    animation: none;
    opacity: 1;
    transform: none;
  }
}

/* Hero Search Bar Advanced Styling */
.hero-search-container {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-search-container:hover {
  transform: translateY(-2px);
}

.hero-search-input {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-search-input:focus {
  transform: translateY(-3px);
  box-shadow: 0 25px 50px rgba(164, 53, 240, 0.25), 0 0 0 1px rgba(164, 53, 240, 0.1);
}

.hero-search-input:hover:not(:focus) {
  transform: translateY(-1px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

/* Hero search glow effect - more prominent */
@keyframes hero-search-glow {
  0% {
    box-shadow: 0 0 0 0 rgba(164, 53, 240, 0.8);
  }
  70% {
    box-shadow: 0 0 0 8px rgba(164, 53, 240, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(164, 53, 240, 0);
  }
}

.hero-search-input:focus {
  animation: hero-search-glow 0.8s ease-out;
}

/* Enhanced ripple effect for hero search */
.hero-search-container::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(164, 53, 240, 0.15) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  transition: all 0.8s ease-out;
  pointer-events: none;
  z-index: -1;
}

.hero-search-container:focus-within::before {
  width: 300%;
  height: 300%;
}

/* Glassmorphism enhancement for dropdown */
.hero-search-container .backdrop-blur-md {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

/* Purple accent for suggestions */
.text-udemy-purple {
  color: #A435F0;
}

.from-udemy-purple {
  --tw-gradient-from: #A435F0;
}

/* Enhanced hover effects for suggestion items */
.group:hover .group-hover\\:text-udemy-purple {
  color: #A435F0;
}

.group:hover .group-hover\\:translate-x-1 {
  transform: translateX(0.25rem);
}

/* Advanced glassmorphism for search suggestions */
@supports (backdrop-filter: blur(20px)) {
  .hero-search-container .backdrop-blur-md {
    background: rgba(255, 255, 255, 0.85);
  }
  
  .dark .hero-search-container .backdrop-blur-md {
    background: rgba(31, 41, 55, 0.85);
  }
}

/* Fallback for browsers without backdrop-filter */
@supports not (backdrop-filter: blur(20px)) {
  .hero-search-container .backdrop-blur-md {
    background: rgba(255, 255, 255, 0.98);
  }
  
  .dark .hero-search-container .backdrop-blur-md {
    background: rgba(31, 41, 55, 0.98);
  }
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .animate-float {
    animation-duration: 15s;
  }
  
  .animate-slide-up-fade-in,
  .animate-slide-up-fade-in-delayed,
  .animate-slide-up-fade-in-delayed-2,
  .animate-slide-up-fade-in-delayed-3 {
    animation-duration: 0.8s;
  }
  
  .hero-search-input {
    font-size: 16px; /* Prevents zoom on iOS */
  }
  
  .hero-search-container:hover,
  .hero-search-input:hover:not(:focus),
  .hero-search-input:focus {
    transform: none; /* Disable transform on mobile for better performance */
  }
}
</style>