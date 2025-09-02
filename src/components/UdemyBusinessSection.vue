<template>
  <section class="udemy-business py-16 bg-gray-100 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Side - Image -->
        <div class="order-2 lg:order-1">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Udemy Business Team Learning"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <!-- Right Side - Content -->
        <div class="order-1 lg:order-2">
          <div class="mb-6">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {{ $t('udemyBusiness.title') }}
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {{ $t('udemyBusiness.subtitle') }}
            </p>
            <p class="text-gray-700 dark:text-gray-300 mb-8">
              {{ $t('udemyBusiness.description') }}
            </p>
          </div>

          <!-- Features List -->
          <div class="mb-8">
            <ul class="space-y-4">
              <li 
                v-for="feature in features" 
                :key="feature.key"
                class="flex items-start"
              >
                <div class="flex-shrink-0 w-6 h-6 bg-udemy-purple rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-1">
                    {{ $t(`udemyBusiness.features.${feature.key}.title`) }}
                  </h4>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">
                    {{ $t(`udemyBusiness.features.${feature.key}.description`) }}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Call to Action -->
          <div class="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
            <button class="w-full sm:w-auto px-8 py-3 bg-udemy-purple text-white font-medium hover:bg-udemy-dark-purple transition-colors duration-300 rounded">
              {{ $t('udemyBusiness.cta.tryFree') }}
            </button>
            <button class="w-full sm:w-auto px-8 py-3 border-2 border-gray-900 dark:border-gray-700 text-gray-900 dark:text-gray-200 font-medium hover:bg-gray-900 dark:hover:bg-gray-700 hover:text-white transition-colors duration-300 rounded">
              {{ $t('udemyBusiness.cta.learnMore') }}
            </button>
          </div>

          <!-- Stats -->
          <div class="mt-12 grid grid-cols-3 gap-6">
            <div 
              v-for="stat in stats" 
              :key="stat.key"
              class="text-center"
            >
              <div class="text-2xl md:text-3xl font-bold text-udemy-purple mb-1">
                {{ stat.value }}
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-300">
                {{ $t(`udemyBusiness.stats.${stat.key}`) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  { key: 'teamTraining' },
  { key: 'analytics' },
  { key: 'dedicatedSupport' }
]

const stats = [
  { key: 'companies', value: '25,000+' },
  { key: 'learners', value: '57M+' },
  { key: 'languages', value: '75+' }
]
</script>

<style scoped>
.bg-udemy-purple {
  background-color: #A435F0;
}

.text-udemy-purple {
  color: #A435F0;
}

.hover\:bg-udemy-dark-purple:hover {
  background-color: #8710D8;
}
</style>