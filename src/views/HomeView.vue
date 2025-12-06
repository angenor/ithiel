<script setup>
import AppNavBar from '@/components/AppNavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import MissionSection from '@/components/MissionSection.vue'
import HistorySection from '@/components/HistorySection.vue'
import GovernanceSection from '@/components/GovernanceSection.vue'
import CampusSection from '@/components/CampusSection.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
    <AppNavBar />
    <HeroSection />
    <MissionSection />
    <HistorySection />
    <GovernanceSection />
    <CampusSection />
    <AppFooter />
  </div>
</template>
