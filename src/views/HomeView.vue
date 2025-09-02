<script setup>
import AppHeader from '../components/AppHeader.vue'
import HeroSection from '../components/HeroSection.vue'
import FeaturedCoursesSection from '../components/FeaturedCoursesSection.vue'
import PopularCategoriesSection from '../components/PopularCategoriesSection.vue'
import TrendingCoursesSection from '../components/TrendingCoursesSection.vue'
import FeaturedInstructorsSection from '../components/FeaturedInstructorsSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import UdemyBusinessSection from '../components/UdemyBusinessSection.vue'
import AppFooter from '../components/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen">
    <AppHeader />
    
    <main>
      <HeroSection />
      <FeaturedCoursesSection />
      <!-- <PopularCategoriesSection /> -->
      <TrendingCoursesSection />
      <FeaturedInstructorsSection />
      <TestimonialsSection />
      <UdemyBusinessSection />
    </main>
    
    <AppFooter />
  </div>
</template>
