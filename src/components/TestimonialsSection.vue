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
              v-for="testimonial in testimonials" 
              :key="testimonial.id"
              class="w-full flex-shrink-0"
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
    quote: "Udemy has completely transformed my career. The courses are comprehensive, well-structured, and taught by industry experts. I was able to transition from a complete beginner to landing my dream job as a full-stack developer.",
    name: "Sarah Chen",
    title: "Full Stack Developer",
    company: "Google",
    photo: "https://images.unsplash.com/photo-1494790108755-2616b36a59b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  },
  {
    id: 2,
    quote: "The quality of instruction on Udemy is outstanding. I've taken multiple courses to upskill in data science and machine learning. The practical projects and real-world examples made all the difference in my learning journey.",
    name: "Michael Rodriguez",
    title: "Data Scientist",
    company: "Microsoft",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
  },
  {
    id: 3,
    quote: "As a busy professional, I love that I can learn at my own pace. The mobile app allows me to continue learning during my commute. Udemy has helped me stay current with the latest technologies and advance in my career.",
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
</style>