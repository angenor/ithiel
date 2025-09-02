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
          
          <!-- Search Bar with Floating Animation -->
          <div class="mb-8 animate-slide-up-fade-in-delayed-2">
            <div class="relative max-w-xl group">
              <input
                ref="searchInput"
                type="text"
                :placeholder="$t('hero.searchPlaceholder')"
                class="w-full px-6 py-4 pl-14 text-lg border-0 rounded-lg focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg dark:bg-gray-800 dark:text-white dark:placeholder-gray-300 bg-gray-100 text-gray-900 placeholder-gray-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus:shadow-2xl focus:-translate-y-2 transform"
                @focus="isSearchFocused = true"
                @blur="isSearchFocused = false"
              />
              <div class="absolute inset-y-0 left-0 pl-5 flex items-center transition-all duration-300"
                   :class="{ 'text-blue-500 scale-110': isSearchFocused, 'text-gray-400': !isSearchFocused }">
                <svg class="w-6 h-6 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <!-- Floating label effect -->
              <div class="absolute -top-2 left-4 bg-gray-100 dark:bg-gray-800 px-2 text-xs text-gray-500 opacity-0 transform scale-95 transition-all duration-200"
                   :class="{ 'opacity-100 scale-100': isSearchFocused }">
                {{ $t('hero.searchLabel') }}
              </div>
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
    
    <!-- Scroll Indicator -->
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
const backgroundRef = ref(null)
const searchInput = ref(null)

const handleCategoryHover = () => {
  // Subtle haptic feedback or sound effect could be added here
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
}
</style>