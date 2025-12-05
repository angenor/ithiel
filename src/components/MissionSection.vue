<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16 lg:mb-20">
        <span class="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 mb-4">
          <font-awesome-icon icon="fa-solid fa-compass" class="w-3.5 h-3.5 mr-2" />
          {{ t('mission.badge') }}
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {{ t('mission.title') }}
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {{ t('mission.subtitle') }}
        </p>
      </div>

      <!-- Mission & Vision Cards -->
      <div class="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-16 lg:mb-20">
        <!-- Mission Card -->
        <div class="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-10 shadow-lg shadow-gray-200/50 dark:shadow-black/20 border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/60 dark:hover:shadow-black/30 hover:-translate-y-1">
          <!-- Background Pattern -->
          <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-50 dark:from-amber-900/20 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-70 transition-opacity"></div>

          <!-- Icon -->
          <div class="relative mb-6">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
              <font-awesome-icon icon="fa-solid fa-bullseye" class="w-6 h-6 text-white" />
            </div>
          </div>

          <!-- Content -->
          <div class="relative">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {{ t('mission.mission.title') }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-4">
              {{ t('mission.mission.description') }}
            </p>
            <span class="inline-flex items-center text-sm font-semibold text-amber-600 dark:text-amber-400">
              <font-awesome-icon icon="fa-solid fa-sparkles" class="w-4 h-4 mr-2" />
              {{ t('mission.mission.tagline') }}
            </span>
          </div>
        </div>

        <!-- Vision Card -->
        <div class="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-10 shadow-lg shadow-gray-200/50 dark:shadow-black/20 border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/60 dark:hover:shadow-black/30 hover:-translate-y-1">
          <!-- Background Pattern -->
          <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 dark:from-blue-900/20 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-70 transition-opacity"></div>

          <!-- Icon -->
          <div class="relative mb-6">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <font-awesome-icon icon="fa-solid fa-eye" class="w-6 h-6 text-white" />
            </div>
          </div>

          <!-- Content -->
          <div class="relative">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {{ t('mission.vision.title') }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {{ t('mission.vision.description') }}
            </p>
          </div>
        </div>
      </div>

      <!-- Experience Senghor Section -->
      <div class="relative rounded-3xl overflow-hidden">
        <!-- Background Image -->
        <div class="absolute inset-0">
          <img
            src="/images/bg/covers_image.jpg"
            alt="L'expérience Senghor"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-gray-900/40"></div>
        </div>

        <!-- Content -->
        <div class="relative px-8 py-16 lg:px-16 lg:py-20">
          <div class="max-w-2xl">
            <!-- Badge -->
            <span class="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm text-white border border-white/20 mb-6">
              <font-awesome-icon icon="fa-solid fa-graduation-cap" class="w-3.5 h-3.5 mr-2 text-amber-400" />
              {{ t('mission.experience.badge') }}
            </span>

            <!-- Title -->
            <h3 class="text-3xl lg:text-4xl font-bold text-white mb-4">
              {{ t('mission.experience.title') }}
            </h3>

            <!-- Description -->
            <p class="text-lg text-white/80 leading-relaxed mb-8">
              {{ t('mission.experience.description') }}
            </p>

            <!-- Features -->
            <div class="flex flex-wrap gap-4 mb-8">
              <div class="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10">
                <font-awesome-icon icon="fa-solid fa-briefcase" class="w-4 h-4 text-amber-400" />
                <span class="text-sm text-white">{{ t('mission.experience.features.immersion') }}</span>
              </div>
              <div class="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10">
                <font-awesome-icon icon="fa-solid fa-lightbulb" class="w-4 h-4 text-amber-400" />
                <span class="text-sm text-white">{{ t('mission.experience.features.creativity') }}</span>
              </div>
              <div class="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10">
                <font-awesome-icon icon="fa-solid fa-users" class="w-4 h-4 text-amber-400" />
                <span class="text-sm text-white">{{ t('mission.experience.features.network') }}</span>
              </div>
            </div>

            <!-- CTA Button -->
            <a
              href="/a-propos/experience"
              class="group inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-white font-semibold rounded-full transition-all duration-300 hover:bg-amber-600 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-1"
            >
              <span>{{ t('mission.experience.cta') }}</span>
              <font-awesome-icon icon="fa-solid fa-arrow-right" class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <!-- Decorative Stats -->
          <div class="hidden lg:flex absolute right-16 top-1/2 -translate-y-1/2 flex-col gap-6">
            <div class="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10">
              <div class="text-4xl font-bold text-amber-400 mb-1">54+</div>
              <div class="text-sm text-white/70">{{ t('mission.experience.stats.countries') }}</div>
            </div>
            <div class="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10">
              <div class="text-4xl font-bold text-amber-400 mb-1">5000+</div>
              <div class="text-sm text-white/70">{{ t('mission.experience.stats.graduates') }}</div>
            </div>
            <div class="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10">
              <div class="text-4xl font-bold text-amber-400 mb-1">30+</div>
              <div class="text-sm text-white/70">{{ t('mission.experience.stats.years') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
