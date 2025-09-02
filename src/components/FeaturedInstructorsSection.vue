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
          v-for="(instructor, index) in instructors" 
          :key="instructor.id"
          class="instructor-card bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          :style="{ 'animation-delay': `${index * 0.2}s` }"
        >
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

<style scoped>
/* Animation des cartes d'instructeurs */
.instructor-card {
  opacity: 0;
  transform: translateY(50px) rotateX(15deg);
  animation: flipInUp 0.8s ease-out forwards;
  transform-origin: center bottom;
  perspective: 1000px;
}

@keyframes flipInUp {
  0% {
    opacity: 0;
    transform: translateY(50px) rotateX(15deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotateX(0deg);
  }
}

/* Animation au hover pour les cartes d'instructeurs */
.instructor-card:hover {
  transform: translateY(-10px) rotateY(5deg);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* Animation pour les photos d'instructeurs */
.instructor-card img {
  transition: all 0.4s ease;
  border: 3px solid transparent;
}

.instructor-card:hover img {
  transform: scale(1.1) rotateZ(-3deg);
  border: 3px solid #A435F0;
  box-shadow: 0 10px 20px rgba(164, 53, 240, 0.3);
}

/* Animation pour les badges */
.instructor-card .absolute span {
  transform: scale(0);
  animation: bounceIn 0.5s ease-out forwards;
  animation-delay: 0.3s;
}

@keyframes bounceIn {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

/* Animation des statistiques */
.instructor-card .space-y-2 > div {
  opacity: 0;
  transform: translateX(-20px);
  animation: slideInLeft 0.6s ease-out forwards;
}

.instructor-card .space-y-2 > div:nth-child(1) {
  animation-delay: 0.4s;
}

.instructor-card .space-y-2 > div:nth-child(2) {
  animation-delay: 0.5s;
}

.instructor-card .space-y-2 > div:nth-child(3) {
  animation-delay: 0.6s;
}

@keyframes slideInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Animation du bouton */
.instructor-card button {
  position: relative;
  overflow: hidden;
  transform: translateY(20px);
  opacity: 0;
  animation: slideUpFade 0.6s ease-out forwards;
  animation-delay: 0.7s;
}

@keyframes slideUpFade {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.instructor-card button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
  transition: left 0.4s ease;
  z-index: -1;
}

.instructor-card button:hover::before {
  left: 0;
}

.instructor-card button:hover {
  color: white;
  border-color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

/* Optimisations responsives */
@media (max-width: 768px) {
  .instructor-card {
    animation-duration: 0.6s;
    transform: translateY(30px) rotateX(10deg);
  }
  
  .instructor-card:hover {
    transform: translateY(-5px) rotateY(2deg);
    transition-duration: 0.3s;
  }
  
  .instructor-card:hover img {
    transform: scale(1.05) rotateZ(-2deg);
  }
}

@media (max-width: 480px) {
  .instructor-card {
    animation-duration: 0.5s;
    transform: translateY(20px) rotateX(5deg);
  }
  
  .instructor-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .instructor-card:hover img {
    transform: scale(1.03);
    border: 2px solid #A435F0;
  }
  
  .instructor-card .space-y-2 > div {
    animation-duration: 0.4s;
  }
  
  .instructor-card button {
    animation-duration: 0.4s;
  }
}

@media (prefers-reduced-motion: reduce) {
  .instructor-card {
    animation: none;
    opacity: 1;
    transform: none;
  }
  
  .instructor-card:hover {
    transform: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .instructor-card:hover img {
    transform: none;
    border: 2px solid #A435F0;
  }
  
  .instructor-card .absolute span,
  .instructor-card .space-y-2 > div,
  .instructor-card button {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>

<script setup>
const instructors = [
  {
    id: 1,
    name: "Colt Steele",
    specialization: "Full Stack Development",
    students: 750000,
    courses: 15,
    rating: 4.6,
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
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