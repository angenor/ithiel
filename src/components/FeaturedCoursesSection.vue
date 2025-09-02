<template>
  <section class="featured-courses py-16 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ $t('featuredCourses.title') }}
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {{ $t('featuredCourses.subtitle') }}
        </p>
      </div>

      <!-- Courses Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div 
          v-for="course in courses" 
          :key="course.id"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
        >
          <!-- Course Image -->
          <div class="relative aspect-video overflow-hidden">
            <img 
              :src="course.image" 
              :alt="course.title"
              class="w-full h-full object-cover"
            />
            <div v-if="course.badge" class="absolute top-3 left-3">
              <span class="px-2 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded">
                {{ $t(`featuredCourses.badges.${course.badge}`) }}
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
              <div class="flex items-center">
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

      <!-- View More Button -->
      <div class="text-center">
        <button class="px-8 py-3 border-2 border-gray-900 dark:border-gray-700 text-gray-900 dark:text-gray-200 font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-gray-700 transition-colors duration-300">
          {{ $t('featuredCourses.viewMore') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const courses = [
  {
    id: 1,
    title: "The Complete JavaScript Course 2024: From Zero to Expert!",
    instructor: "Jonas Schmedtmann",
    rating: 4.7,
    reviewCount: 178542,
    currentPrice: 84.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    badge: "bestseller"
  },
  {
    id: 2,
    title: "Python for Data Science and Machine Learning Bootcamp",
    instructor: "Jose Portilla",
    rating: 4.6,
    reviewCount: 145231,
    currentPrice: 74.99,
    originalPrice: 189.99,
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    badge: "bestseller"
  },
  {
    id: 3,
    title: "The Complete Web Developer Course 3.0",
    instructor: "Rob Percival",
    rating: 4.5,
    reviewCount: 89754,
    currentPrice: 79.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 4,
    title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    instructor: "Maximilian Schwarzmüller",
    rating: 4.6,
    reviewCount: 156892,
    currentPrice: 89.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    badge: "bestseller"
  },
  {
    id: 5,
    title: "AWS Certified Solutions Architect - Associate 2024",
    instructor: "Stephane Maarek",
    rating: 4.7,
    reviewCount: 98765,
    currentPrice: 94.99,
    originalPrice: 189.99,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 6,
    title: "Complete Digital Marketing Course - 12 Courses in 1",
    instructor: "Daragh Walsh",
    rating: 4.4,
    reviewCount: 67543,
    currentPrice: 69.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 7,
    title: "The Complete Node.js Developer Course (3rd Edition)",
    instructor: "Andrew Mead",
    rating: 4.7,
    reviewCount: 87654,
    currentPrice: 84.99,
    originalPrice: 179.99,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    badge: "bestseller"
  },
  {
    id: 8,
    title: "Adobe Photoshop CC – Essentials Training Course",
    instructor: "Daniel Walter Scott",
    rating: 4.6,
    reviewCount: 45678,
    currentPrice: 54.99,
    originalPrice: 149.99,
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
]
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
</style>