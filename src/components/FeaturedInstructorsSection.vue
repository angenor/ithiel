<template>
  <section class="featured-instructors py-16 bg-white dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ $t('featuredInstructors.title') }}
        </h2>
      </div>

      <!-- Instructors Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="instructor in instructors" 
          :key="instructor.id"
          class="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        
          <!-- Instructor Photo -->
          <div class="relative mb-4">
            <img 
              :src="instructor.photo" 
              :alt="instructor.name"
              class="w-24 h-24 mx-auto rounded-full object-cover"
            />
            <div v-if="instructor.badge" class="absolute -top-2 -right-2">
              <span class="px-2 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">
                {{ $t(`featuredInstructors.badges.${instructor.badge}`) }}
              </span>
            </div>
          </div>

          <!-- Instructor Name -->
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {{ instructor.name }}
          </h3>

          <!-- Specialization -->
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ instructor.specialization }}
          </p>

          <!-- Statistics -->
          <div class="space-y-2 mb-4">
            <div class="flex justify-center items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
                <span>{{ instructor.students.toLocaleString() }} {{ $t('featuredInstructors.students') }}</span>
              </div>
            </div>
            
            <div class="flex justify-center items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>{{ instructor.courses }} {{ $t('featuredInstructors.courses') }}</span>
              </div>
            </div>

            <!-- Rating -->
            <div class="flex justify-center items-center">
              <div class="flex items-center">
                <span class="text-yellow-500 text-sm font-bold mr-1">
                  {{ instructor.rating }}
                </span>
                <div class="flex">
                  <svg 
                    v-for="star in 5" 
                    :key="star"
                    class="w-4 h-4"
                    :class="star <= Math.floor(instructor.rating) ? 'text-yellow-400' : 'text-gray-300'"
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span class="text-gray-500 text-sm ml-1">
                  {{ $t('featuredInstructors.instructorRating') }}
                </span>
              </div>
            </div>
          </div>

          <!-- View Profile Button -->
          <button class="w-full px-4 py-2 border-2 border-gray-900 dark:border-gray-600 text-gray-900 dark:text-gray-200 font-medium hover:bg-gray-900 dark:hover:bg-gray-600 hover:text-white transition-colors duration-300">
            {{ $t('featuredInstructors.viewProfile') }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const instructors = [
  {
    id: 1,
    name: "Dr. Angela Yu",
    specialization: "iOS & Web Development",
    students: 875000,
    courses: 5,
    rating: 4.7,
    photo: "https://images.unsplash.com/photo-1494790108755-2616b36a59b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    badge: "topInstructor"
  },
  {
    id: 2,
    name: "Jonas Schmedtmann",
    specialization: "Web Development",
    students: 1200000,
    courses: 8,
    rating: 4.8,
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    badge: "topInstructor"
  },
  {
    id: 3,
    name: "Jose Portilla",
    specialization: "Data Science & Python",
    students: 950000,
    courses: 12,
    rating: 4.6,
    photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    badge: "topInstructor"
  },
  {
    id: 4,
    name: "Maximilian Schwarzmüller",
    specialization: "Web & Mobile Development",
    students: 1500000,
    courses: 45,
    rating: 4.7,
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    badge: "topInstructor"
  },
  {
    id: 5,
    name: "Colt Steele",
    specialization: "Full Stack Development",
    students: 750000,
    courses: 15,
    rating: 4.6,
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 6,
    name: "Stephen Grider",
    specialization: "JavaScript & React",
    students: 820000,
    courses: 28,
    rating: 4.5,
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
]
</script>