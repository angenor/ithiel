<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const founders = [
  {
    name: 'Léopold Sédar Senghor',
    role: 'history.founders.senghor.role',
    icon: 'fa-solid fa-feather-pointed'
  },
  {
    name: 'Maurice Druon',
    role: 'history.founders.druon.role',
    icon: 'fa-solid fa-pen-nib'
  },
  {
    name: 'Boutros Boutros-Ghali',
    role: 'history.founders.boutros.role',
    icon: 'fa-solid fa-globe'
  },
  {
    name: 'René-Jean Dupuy',
    role: 'history.founders.dupuy.role',
    icon: 'fa-solid fa-scale-balanced'
  }
]
</script>

<template>
  <section id="history" class="relative py-20 lg:py-32 bg-white dark:bg-gray-950 transition-colors duration-300 overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Gradient Mesh -->
      <div class="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-transparent to-blue-50/30 dark:from-amber-900/5 dark:via-transparent dark:to-blue-900/5"></div>

      <!-- Grid Pattern -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <!-- Decorative Elements -->
      <div class="absolute top-20 right-1/4 w-64 h-64 bg-amber-200/20 dark:bg-amber-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 left-1/4 w-80 h-80 bg-blue-200/20 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16 lg:mb-20">
        <span class="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 mb-4">
          <font-awesome-icon icon="fa-solid fa-landmark" class="w-3.5 h-3.5 mr-2" />
          {{ t('history.badge') }}
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {{ t('history.title') }}
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {{ t('history.subtitle') }}
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Timeline Line -->
        <div class="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 via-amber-500 to-blue-500 transform -translate-x-1/2"></div>

        <!-- Section 1: Projet des années 70/80 -->
        <div class="relative mb-16 lg:mb-24">
          <!-- Timeline Node -->
          <div class="hidden lg:flex absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 items-center justify-center shadow-lg shadow-amber-500/30 z-10">
            <font-awesome-icon icon="fa-solid fa-seedling" class="w-5 h-5 text-white" />
          </div>

          <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
            <!-- Left Content -->
            <div class="lg:text-right lg:pr-16">
              <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-gray-100 dark:border-gray-700/50 shadow-xl shadow-gray-200/50 dark:shadow-none">
                <!-- Mobile Timeline Node -->
                <div class="lg:hidden flex items-center gap-4 mb-6">
                  <div class="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
                    <font-awesome-icon icon="fa-solid fa-seedling" class="w-4 h-4 text-white" />
                  </div>
                  <span class="text-sm font-semibold text-amber-600 dark:text-amber-400">1989</span>
                </div>

                <div class="hidden lg:block mb-4">
                  <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300">
                    {{ t('history.genesis.date') }}
                  </span>
                </div>

                <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {{ t('history.genesis.title') }}
                </h3>

                <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {{ t('history.genesis.description') }}
                </p>

                <!-- Key Points -->
                <div class="space-y-3">
                  <div class="flex items-start gap-3 lg:flex-row-reverse lg:text-right">
                    <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center">
                      <font-awesome-icon icon="fa-solid fa-handshake" class="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    </div>
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('history.genesis.point1') }}</p>
                  </div>
                  <div class="flex items-start gap-3 lg:flex-row-reverse lg:text-right">
                    <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center">
                      <font-awesome-icon icon="fa-solid fa-bullseye" class="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    </div>
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('history.genesis.point2') }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Content - Founders -->
            <div class="mt-8 lg:mt-0 lg:pl-16">
              <div class="mb-6">
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {{ t('history.founders.title') }}
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  {{ t('history.founders.subtitle') }}
                </p>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div
                  v-for="founder in founders"
                  :key="founder.name"
                  class="group bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-4 border border-gray-100 dark:border-gray-700/50 hover:border-amber-300 dark:hover:border-amber-600 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10"
                >
                  <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-500/20 dark:from-amber-400/10 dark:to-orange-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <font-awesome-icon :icon="founder.icon" class="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h5 class="font-semibold text-gray-900 dark:text-white text-sm mb-1">{{ founder.name }}</h5>
                  <p class="text-xs text-gray-500 dark:text-gray-400">{{ t(founder.role) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 2: Projet USenghor -->
        <div class="relative">
          <!-- Timeline Node -->
          <div class="hidden lg:flex absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 items-center justify-center shadow-lg shadow-blue-500/30 z-10">
            <font-awesome-icon icon="fa-solid fa-university" class="w-5 h-5 text-white" />
          </div>

          <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
            <!-- Left Content - Empty on desktop for alternating layout -->
            <div class="hidden lg:block lg:pr-16"></div>

            <!-- Right Content -->
            <div class="lg:pl-16">
              <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-gray-100 dark:border-gray-700/50 shadow-xl shadow-gray-200/50 dark:shadow-none">
                <!-- Mobile Timeline Node -->
                <div class="lg:hidden flex items-center gap-4 mb-6">
                  <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <font-awesome-icon icon="fa-solid fa-university" class="w-4 h-4 text-white" />
                  </div>
                  <span class="text-sm font-semibold text-blue-600 dark:text-blue-400">{{ t('history.usenghor.since') }}</span>
                </div>

                <div class="hidden lg:block mb-4">
                  <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                    {{ t('history.usenghor.since') }}
                  </span>
                </div>

                <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {{ t('history.usenghor.title') }}
                </h3>

                <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {{ t('history.usenghor.description') }}
                </p>

                <!-- Milestones -->
                <div class="space-y-4 mb-8">
                  <div class="flex items-center gap-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                    <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
                      <font-awesome-icon icon="fa-solid fa-door-open" class="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p class="text-sm font-semibold text-gray-900 dark:text-white">{{ t('history.usenghor.milestone1.title') }}</p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">{{ t('history.usenghor.milestone1.desc') }}</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                    <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
                      <font-awesome-icon icon="fa-solid fa-award" class="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p class="text-sm font-semibold text-gray-900 dark:text-white">{{ t('history.usenghor.milestone2.title') }}</p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">{{ t('history.usenghor.milestone2.desc') }}</p>
                    </div>
                  </div>
                </div>

                <!-- Current Leadership -->
                <div class="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <font-awesome-icon icon="fa-solid fa-users-gear" class="w-4 h-4 text-blue-500" />
                    {{ t('history.leadership.title') }}
                  </h4>
                  <div class="grid grid-cols-2 gap-4">
                    <div class="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl">
                      <div class="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                        <font-awesome-icon icon="fa-solid fa-user-tie" class="w-5 h-5 text-white" />
                      </div>
                      <p class="text-sm font-semibold text-gray-900 dark:text-white">{{ t('history.leadership.rector.name') }}</p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">{{ t('history.leadership.rector.title') }}</p>
                      <p class="text-xs text-blue-600 dark:text-blue-400 mt-1">{{ t('history.leadership.rector.since') }}</p>
                    </div>
                    <div class="text-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl">
                      <div class="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                        <font-awesome-icon icon="fa-solid fa-crown" class="w-5 h-5 text-white" />
                      </div>
                      <p class="text-sm font-semibold text-gray-900 dark:text-white">{{ t('history.leadership.president.name') }}</p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">{{ t('history.leadership.president.title') }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Notable Leader Highlight -->
        <div class="mt-16 lg:mt-24">
          <div class="relative bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden">
            <!-- Background Pattern -->
            <div class="absolute inset-0 opacity-10">
              <div class="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[length:20px_20px]"></div>
            </div>

            <div class="relative px-8 py-12 lg:px-16 lg:py-16">
              <div class="max-w-3xl mx-auto text-center">
                <div class="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm text-white border border-white/20 mb-6">
                  <font-awesome-icon icon="fa-solid fa-star" class="w-3.5 h-3.5 mr-2 text-amber-400" />
                  {{ t('history.legacy.badge') }}
                </div>

                <h3 class="text-2xl lg:text-3xl font-bold text-white mb-4">
                  {{ t('history.legacy.title') }}
                </h3>

                <p class="text-white/80 leading-relaxed mb-6">
                  {{ t('history.legacy.description') }}
                </p>

                <div class="flex flex-wrap justify-center gap-4">
                  <div class="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10">
                    <font-awesome-icon icon="fa-solid fa-globe-africa" class="w-4 h-4 text-amber-400" />
                    <span class="text-sm text-white">{{ t('history.legacy.tag1') }}</span>
                  </div>
                  <div class="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10">
                    <font-awesome-icon icon="fa-solid fa-graduation-cap" class="w-4 h-4 text-amber-400" />
                    <span class="text-sm text-white">{{ t('history.legacy.tag2') }}</span>
                  </div>
                  <div class="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10">
                    <font-awesome-icon icon="fa-solid fa-handshake-angle" class="w-4 h-4 text-amber-400" />
                    <span class="text-sm text-white">{{ t('history.legacy.tag3') }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Add any component-specific styles here */
</style>
