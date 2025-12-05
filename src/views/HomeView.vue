<script setup>
import AppNavBar from '@/components/AppNavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import MissionSection from '@/components/MissionSection.vue'
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
    <AppNavBar />
    <HeroSection />
    <MissionSection />
  </div>
</template>
