<template>
  <section class="popular-categories py-16 bg-white dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ $t('popularCategories.title') }}
        </h2>
      </div>

      <!-- Categories Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div 
          v-for="category in categories" 
          :key="category.id"
          class="group cursor-pointer"
        >
          <div class="bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg p-6 text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg">
            <!-- Icon -->
            <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {{ category.icon }}
            </div>
            
            <!-- Category Name -->
            <h3 class="font-semibold text-gray-900 dark:text-white text-lg group-hover:text-udemy-purple transition-colors duration-300">
              {{ $t(`popularCategories.categories.${category.key}`) }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const categories = [
  {
    id: 1,
    key: 'webDevelopment',
    icon: '🖥️'
  },
  {
    id: 2,
    key: 'dataScience',
    icon: '📊'
  },
  {
    id: 3,
    key: 'design',
    icon: '🎨'
  },
  {
    id: 4,
    key: 'marketing',
    icon: '📈'
  },
  {
    id: 5,
    key: 'business',
    icon: '💼'
  },
  {
    id: 6,
    key: 'photography',
    icon: '📸'
  },
  {
    id: 7,
    key: 'music',
    icon: '🎵'
  },
  {
    id: 8,
    key: 'healthFitness',
    icon: '💪'
  }
]
</script>

<style scoped>
.text-udemy-purple {
  color: #A435F0;
}
.hover\:text-udemy-purple:hover {
  color: #A435F0;
}
</style>