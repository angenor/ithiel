<template>
  <section class="trending-courses py-16 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          {{ $t('trendingCourses.title') }}
        </h2>
        
        <!-- Filter Buttons -->
        <div class="flex flex-wrap gap-4 mb-8">
          <button 
            v-for="filter in filters" 
            :key="filter.key"
            @click="activeFilter = filter.key"
            :class="[
              'px-6 py-2 border-2 font-medium transition-colors duration-300',
              activeFilter === filter.key 
                ? 'border-gray-900 dark:border-gray-700 bg-gray-900 dark:bg-gray-700 text-white' 
                : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-gray-900 dark:hover:border-gray-700 hover:bg-gray-900 dark:hover:bg-gray-700 hover:text-white'
            ]"
          >
            {{ $t(`trendingCourses.filters.${filter.key}`) }}
          </button>
        </div>
      </div>

      <!-- Carousel Container -->
      <div class="relative">
        <!-- Navigation Buttons -->
        <button 
          @click="prevSlide"
          :disabled="currentSlide === 0"
          :class="[
            'absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white dark:bg-gray-800 shadow-lg rounded-full flex items-center justify-center transition-all duration-300',
            currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl hover:scale-105'
          ]"
        >
          <svg class="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          @click="nextSlide"
          :disabled="currentSlide >= maxSlides"
          :class="[
            'absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white dark:bg-gray-800 shadow-lg rounded-full flex items-center justify-center transition-all duration-300',
            currentSlide >= maxSlides ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl hover:scale-105'
          ]"
        >
          <svg class="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Courses Carousel -->
        <div class="overflow-hidden">
          <div 
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * slideWidth}%)` }"
          >
            <div 
              v-for="course in filteredCourses" 
              :key="course.id"
              class="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-3"
            >
              <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <!-- Course Image -->
                <div class="relative aspect-video overflow-hidden">
                  <img 
                    :src="course.image" 
                    :alt="course.title"
                    class="w-full h-full object-cover"
                  />
                  <div v-if="course.badge" class="absolute top-3 left-3">
                    <span class="px-2 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded">
                      {{ $t(`trendingCourses.badges.${course.badge}`) }}
                    </span>
                  </div>
                </div>

                <!-- Course Content -->
                <div class="p-4">
                  <!-- Course Title -->
                  <h3 class="font-semibold text-gray-900 dark:text-white text-sm mb-2 line-clamp-2 leading-5">
                    {{ course.title }}
                  </h3>

                  <!-- Instructor -->
                  <p class="text-gray-600 dark:text-gray-300 text-sm mb-2">
                    {{ course.instructor }}
                  </p>

                  <!-- Rating -->
                  <div class="flex items-center mb-2">
                    <span class="text-yellow-500 text-sm font-bold mr-1">
                      {{ course.rating }}
                    </span>
                    <div class="flex">
                      <svg 
                        v-for="star in 5" 
                        :key="star"
                        class="w-4 h-4"
                        :class="star <= Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'"
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <span class="text-gray-500 text-xs ml-1">
                      ({{ course.reviewCount.toLocaleString() }})
                    </span>
                  </div>

                  <!-- Price -->
                  <div class="flex items-center">
                    <span class="text-lg font-bold text-gray-900 dark:text-white">
                      €{{ course.currentPrice }}
                    </span>
                    <span v-if="course.originalPrice" class="text-sm text-gray-500 line-through ml-2">
                      €{{ course.originalPrice }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pagination Dots -->
        <div class="flex justify-center mt-8 space-x-2">
          <button 
            v-for="dot in totalDots" 
            :key="dot"
            @click="currentSlide = dot - 1"
            :class="[
              'w-3 h-3 rounded-full transition-colors duration-300',
              currentSlide === dot - 1 ? 'bg-udemy-purple' : 'bg-gray-300 hover:bg-gray-400'
            ]"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const activeFilter = ref('all')
const currentSlide = ref(0)

const filters = [
  { key: 'all' },
  { key: 'popular' },
  { key: 'topRated' },
  { key: 'new' }
]

const courses = [
  {
    id: 1,
    title: "Vue.js 3 - The Complete Guide",
    instructor: "Maximilian Schwarzmüller",
    rating: 4.8,
    reviewCount: 45123,
    currentPrice: 89.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    badge: "new",
    category: 'popular'
  },
  {
    id: 2,
    title: "Advanced CSS and Sass: Flexbox, Grid, Animations",
    instructor: "Jonas Schmedtmann",
    rating: 4.7,
    reviewCount: 78945,
    currentPrice: 74.99,
    originalPrice: 179.99,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    badge: "bestseller",
    category: 'topRated'
  },
  {
    id: 3,
    title: "Docker & Kubernetes: The Practical Guide",
    instructor: "Maximilian Schwarzmüller",
    rating: 4.6,
    reviewCount: 34567,
    currentPrice: 94.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: 'new'
  },
  {
    id: 4,
    title: "TypeScript for JavaScript Developers",
    instructor: "Stephen Grider",
    rating: 4.5,
    reviewCount: 23456,
    currentPrice: 84.99,
    originalPrice: 169.99,
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: 'popular'
  },
  {
    id: 5,
    title: "GraphQL with React: The Complete Developers Guide",
    instructor: "Stephen Grider",
    rating: 4.6,
    reviewCount: 56789,
    currentPrice: 79.99,
    originalPrice: 189.99,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    badge: "bestseller",
    category: 'topRated'
  },
  {
    id: 6,
    title: "Microservices with Node.js and React",
    instructor: "Stephen Grider",
    rating: 4.7,
    reviewCount: 43210,
    currentPrice: 99.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: 'new'
  }
]

const filteredCourses = computed(() => {
  if (activeFilter.value === 'all') {
    return courses
  }
  return courses.filter(course => course.category === activeFilter.value)
})

const slidesPerView = ref(4)
const slideWidth = computed(() => 100 / slidesPerView.value)
const maxSlides = computed(() => Math.max(0, filteredCourses.value.length - slidesPerView.value))
const totalDots = computed(() => maxSlides.value + 1)

const nextSlide = () => {
  if (currentSlide.value < maxSlides.value) {
    currentSlide.value++
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

const updateSlidesPerView = () => {
  if (window.innerWidth >= 1280) {
    slidesPerView.value = 4
  } else if (window.innerWidth >= 1024) {
    slidesPerView.value = 3
  } else if (window.innerWidth >= 768) {
    slidesPerView.value = 2
  } else {
    slidesPerView.value = 1
  }
  currentSlide.value = 0
}

onMounted(() => {
  updateSlidesPerView()
  window.addEventListener('resize', updateSlidesPerView)
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.aspect-video {
  aspect-ratio: 16 / 9;
}

.bg-udemy-purple {
  background-color: #A435F0;
}
</style>