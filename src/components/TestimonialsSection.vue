<template>
  <section class="testimonials py-16 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ $t('testimonials.title') }}
        </h2>
      </div>

      <!-- Testimonials Carousel -->
      <div class="relative mb-12">
        <!-- Navigation Buttons -->
        <button 
          @click="prevTestimonial"
          class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white dark:bg-gray-800 shadow-lg rounded-full flex items-center justify-center hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <svg class="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          @click="nextTestimonial"
          class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white dark:bg-gray-800 shadow-lg rounded-full flex items-center justify-center hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <svg class="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Testimonial Cards -->
        <div class="overflow-hidden">
          <div 
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentTestimonial * 100}%)` }"
          >
            <div 
              v-for="(testimonial, index) in testimonials" 
              :key="testimonial.id"
              class="testimonial-slide w-full flex-shrink-0"
              :style="{ 'animation-delay': `${index * 0.3}s` }"
            >
              <div class="max-w-4xl mx-auto">
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 md:p-12">
                  <!-- Quote Icon -->
                  <div class="text-center mb-6">
                    <svg class="w-12 h-12 mx-auto text-udemy-purple opacity-20" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8c-3.3 0-6 2.7-6 6v10h6V14h-2c0-2.2 1.8-4 4-4V8zm12 0c-3.3 0-6 2.7-6 6v10h6V14h-2c0-2.2 1.8-4 4-4V8z"/>
                    </svg>
                  </div>

                  <!-- Testimonial Text -->
                  <blockquote class="text-lg md:text-xl text-gray-700 dark:text-gray-200 text-center mb-8 leading-relaxed italic">
                    "{{ testimonial.quote }}"
                  </blockquote>

                  <!-- Student Info -->
                  <div class="flex items-center justify-center">
                    <!-- Student Photo -->
                    <img 
                      :src="testimonial.photo" 
                      :alt="testimonial.name"
                      class="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    
                    <!-- Student Details -->
                    <div class="text-center">
                      <p class="font-semibold text-gray-900 dark:text-white">
                        {{ testimonial.name }}
                      </p>
                      <p class="text-gray-600 dark:text-gray-300 text-sm">
                        {{ testimonial.title }}
                      </p>
                      <div v-if="testimonial.company" class="flex items-center justify-center mt-2">
                        <img 
                          :src="testimonial.companyLogo" 
                          :alt="testimonial.company"
                          class="h-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pagination Dots -->
        <div class="flex justify-center mt-8 space-x-2">
          <button 
            v-for="(testimonial, index) in testimonials" 
            :key="testimonial.id"
            @click="currentTestimonial = index"
            :class="[
              'w-3 h-3 rounded-full transition-colors duration-300',
              currentTestimonial === index ? 'bg-udemy-purple' : 'bg-gray-300 hover:bg-gray-400'
            ]"
          ></button>
        </div>
      </div>

      <!-- Company Logos -->
      <div class="border-t pt-12">
        <p class="text-center text-gray-600 dark:text-gray-300 mb-8">
          {{ $t('testimonials.trustedBy') }}
        </p>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
          <img 
            v-for="company in companies" 
            :key="company.name"
            :src="company.logo" 
            :alt="company.name"
            class="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentTestimonial = ref(0)

const testimonials = [
  {
    id: 1,
    quote: "Ithiel has completely transformed my career. The courses are comprehensive, well-structured, and taught by industry experts. I was able to transition from a complete beginner to landing my dream job as a full-stack developer.",
    name: "Sarah Chen",
    title: "Full Stack Developer",
    company: "Google",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  },
  {
    id: 2,
    quote: "The quality of instruction on Ithiel is outstanding. I've taken multiple courses to upskill in data science and machine learning. The practical projects and real-world examples made all the difference in my learning journey.",
    name: "Michael Rodriguez",
    title: "Data Scientist",
    company: "Microsoft",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
  },
  {
    id: 3,
    quote: "As a busy professional, I love that I can learn at my own pace. The mobile app allows me to continue learning during my commute. Ithiel has helped me stay current with the latest technologies and advance in my career.",
    name: "Emma Thompson",
    title: "Product Manager",
    company: "Amazon",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
  }
]

const companies = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" }
]

const nextTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.length
}

const prevTestimonial = () => {
  currentTestimonial.value = currentTestimonial.value === 0 
    ? testimonials.length - 1 
    : currentTestimonial.value - 1
}

// Auto-rotate testimonials every 5 seconds
onMounted(() => {
  setInterval(nextTestimonial, 5000)
})
</script>

<style scoped>
.text-udemy-purple {
  color: #A435F0;
}

.bg-udemy-purple {
  background-color: #A435F0;
}

/* Animation des témoignages */
.testimonial-slide {
  opacity: 0;
  transform: translateY(60px) scale(0.9);
  animation: floatInUp 1s ease-out forwards;
}

@keyframes floatInUp {
  0% {
    opacity: 0;
    transform: translateY(60px) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Animation de la carte de témoignage */
.testimonial-slide .bg-white {
  position: relative;
  transform: rotateX(5deg);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
}

.testimonial-slide .bg-white:hover {
  transform: rotateX(0deg) translateY(-5px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
}

/* Animation de l'icône quote */
.testimonial-slide svg {
  opacity: 0;
  transform: scale(0) rotate(45deg);
  animation: rotateIn 0.8s ease-out forwards;
  animation-delay: 0.3s;
}

@keyframes rotateIn {
  0% {
    opacity: 0;
    transform: scale(0) rotate(45deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

/* Animation du texte */
.testimonial-slide blockquote {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease-out forwards;
  animation-delay: 0.5s;
  position: relative;
}

.testimonial-slide blockquote::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #A435F0, #667eea);
  animation: expandWidth 1.2s ease-out forwards;
  animation-delay: 0.8s;
}

@keyframes expandWidth {
  to {
    width: 100%;
  }
}

/* Animation de la photo et infos étudiant */
.testimonial-slide .flex.items-center img {
  opacity: 0;
  transform: scale(0) rotate(-180deg);
  animation: spinIn 0.8s ease-out forwards;
  animation-delay: 0.7s;
}

@keyframes spinIn {
  0% {
    opacity: 0;
    transform: scale(0) rotate(-180deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

.testimonial-slide .text-center {
  opacity: 0;
  transform: translateX(30px);
  animation: slideInRight 0.6s ease-out forwards;
  animation-delay: 0.9s;
}

@keyframes slideInRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Animation des logos d'entreprises */
.grid.grid-cols-2 img {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
  animation: bounceInUp 0.6s ease-out forwards;
}

.grid.grid-cols-2 img:nth-child(1) { animation-delay: 0.1s; }
.grid.grid-cols-2 img:nth-child(2) { animation-delay: 0.2s; }
.grid.grid-cols-2 img:nth-child(3) { animation-delay: 0.3s; }
.grid.grid-cols-2 img:nth-child(4) { animation-delay: 0.4s; }
.grid.grid-cols-2 img:nth-child(5) { animation-delay: 0.5s; }
.grid.grid-cols-2 img:nth-child(6) { animation-delay: 0.6s; }

@keyframes bounceInUp {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.8);
  }
  60% {
    opacity: 1;
    transform: translateY(-5px) scale(1.05);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Animation des boutons de navigation */
.absolute button {
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.95);
}

.absolute button:hover {
  transform: translateY(-50%) scale(1.15);
  background: rgba(164, 53, 240, 0.9);
  color: white;
  box-shadow: 0 15px 30px rgba(164, 53, 240, 0.4);
}

/* Animation des points de pagination */
.space-x-2 button {
  transform: scale(1);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.space-x-2 button:hover {
  transform: scale(1.4);
  box-shadow: 0 5px 15px rgba(164, 53, 240, 0.4);
}

/* Optimisations responsives */
@media (max-width: 768px) {
  .testimonial-slide {
    animation-duration: 0.8s;
    transform: translateY(40px) scale(0.95);
  }
  
  .testimonial-slide .bg-white:hover {
    transform: rotateX(0deg) translateY(-3px);
  }
  
  .testimonial-slide svg {
    animation-duration: 0.6s;
  }
  
  .testimonial-slide blockquote {
    animation-duration: 0.6s;
  }
  
  .grid.grid-cols-2 img {
    animation-duration: 0.4s;
  }
}

@media (max-width: 480px) {
  .testimonial-slide {
    animation-duration: 0.6s;
    transform: translateY(30px) scale(0.97);
  }
  
  .testimonial-slide .bg-white {
    transform: rotateX(2deg);
    padding: 1.5rem;
  }
  
  .testimonial-slide .bg-white:hover {
    transform: rotateX(0deg) translateY(-2px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
  
  .testimonial-slide svg {
    animation-duration: 0.5s;
  }
  
  .testimonial-slide blockquote {
    animation-duration: 0.5s;
    font-size: 1rem;
  }
  
  .testimonial-slide .flex.items-center img {
    animation-duration: 0.6s;
    width: 3rem;
    height: 3rem;
  }
  
  .absolute button:hover {
    transform: translateY(-50%) scale(1.08);
  }
  
  .space-x-2 button:hover {
    transform: scale(1.2);
  }
}

@media (prefers-reduced-motion: reduce) {
  .testimonial-slide {
    animation: none;
    opacity: 1;
    transform: none;
  }
  
  .testimonial-slide .bg-white {
    transform: none;
  }
  
  .testimonial-slide .bg-white:hover {
    transform: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .testimonial-slide svg,
  .testimonial-slide blockquote,
  .testimonial-slide .flex.items-center img,
  .testimonial-slide .text-center,
  .grid.grid-cols-2 img {
    animation: none;
    opacity: 1;
    transform: none;
  }
  
  .testimonial-slide blockquote::before {
    animation: none;
    width: 100%;
  }
  
  .absolute button:hover,
  .space-x-2 button:hover {
    transform: none;
  }
}
</style>