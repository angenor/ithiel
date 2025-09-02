<script setup>
import { ref, onMounted } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import HeroSection from '../components/HeroSection.vue'
import FeaturedCoursesSection from '../components/FeaturedCoursesSection.vue'
import PopularCategoriesSection from '../components/PopularCategoriesSection.vue'
import TrendingCoursesSection from '../components/TrendingCoursesSection.vue'
import FeaturedInstructorsSection from '../components/FeaturedInstructorsSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import UdemyBusinessSection from '../components/UdemyBusinessSection.vue'
import AppFooter from '../components/AppFooter.vue'

const sectionsVisible = ref({
  featured: false,
  trending: false,
  instructors: false,
  testimonials: false
})

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionName = entry.target.getAttribute('data-section')
        if (sectionName && sectionsVisible.value[sectionName] !== undefined) {
          sectionsVisible.value[sectionName] = true
        }
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  })

  // Observer les sections avec un léger délai pour permettre au DOM de se charger
  setTimeout(() => {
    document.querySelectorAll('[data-section]').forEach(section => {
      observer.observe(section)
    })
  }, 100)
})
</script>

<template>
  <div class="min-h-screen">
    <AppHeader />
    
    <main>
      <HeroSection />
      <div 
        data-section="featured"
        :class="['section-animate', { 'section-visible': sectionsVisible.featured }]"
      >
        <FeaturedCoursesSection />
      </div>
      <div 
        data-section="trending"
        :class="['section-animate', { 'section-visible': sectionsVisible.trending }]"
      >
        <TrendingCoursesSection />
      </div>
      <div 
        data-section="instructors"
        :class="['section-animate', { 'section-visible': sectionsVisible.instructors }]"
      >
        <FeaturedInstructorsSection />
      </div>
      <div 
        data-section="testimonials"
        :class="['section-animate', { 'section-visible': sectionsVisible.testimonials }]"
      >
        <TestimonialsSection />
      </div>
      <UdemyBusinessSection />
    </main>
    
    <AppFooter />
  </div>
</template>

<style scoped>
/* Animation de base pour les sections */
.section-animate {
  opacity: 0;
  transform: translateY(60px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform, opacity;
}

.section-animate.section-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Animations différentiées par section */
.section-animate[data-section="featured"] {
  transition-delay: 0.1s;
}

.section-animate[data-section="trending"] {
  transform: translateY(60px) scale(0.95);
  transition-delay: 0.2s;
}

.section-animate[data-section="trending"].section-visible {
  transform: translateY(0) scale(1);
}

.section-animate[data-section="instructors"] {
  transform: translateY(60px) rotateX(10deg);
  transition-delay: 0.15s;
}

.section-animate[data-section="instructors"].section-visible {
  transform: translateY(0) rotateX(0deg);
}

.section-animate[data-section="testimonials"] {
  transform: translateY(60px);
  transition-delay: 0.3s;
}

/* Animation au hover pour améliorer l'interactivité */
.section-animate.section-visible:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}

/* Amélioration des performances avec GPU acceleration */
.section-animate {
  transform: translate3d(0, 60px, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

.section-animate.section-visible {
  transform: translate3d(0, 0, 0);
}

/* Animation spécifique pour les sections avec perspective 3D */
.section-animate[data-section="instructors"] {
  transform: translate3d(0, 60px, 0) rotateX(10deg);
  transform-style: preserve-3d;
}

.section-animate[data-section="instructors"].section-visible {
  transform: translate3d(0, 0, 0) rotateX(0deg);
}

.section-animate[data-section="trending"] {
  transform: translate3d(0, 60px, 0) scale(0.95);
}

.section-animate[data-section="trending"].section-visible {
  transform: translate3d(0, 0, 0) scale(1);
}

/* Media queries pour les animations responsives */
@media (max-width: 768px) {
  .section-animate {
    transform: translate3d(0, 30px, 0);
    transition-duration: 0.6s;
  }
  
  .section-animate[data-section="trending"] {
    transform: translate3d(0, 30px, 0) scale(0.98);
  }
  
  .section-animate[data-section="instructors"] {
    transform: translate3d(0, 30px, 0) rotateX(5deg);
  }
  
  .section-animate.section-visible:hover {
    transform: translateY(-2px);
  }
}

@media (max-width: 480px) {
  .section-animate {
    transform: translate3d(0, 20px, 0);
    transition-duration: 0.5s;
  }
  
  .section-animate[data-section="trending"],
  .section-animate[data-section="instructors"] {
    transform: translate3d(0, 20px, 0);
  }
  
  .section-animate.section-visible:hover {
    transform: translateY(0);
  }
}

/* Optimisation pour les appareils à faible performance */
@media (prefers-reduced-motion: reduce) {
  .section-animate {
    transition: opacity 0.3s ease;
    transform: none;
  }
  
  .section-animate.section-visible:hover {
    transform: none;
  }
}
</style>
