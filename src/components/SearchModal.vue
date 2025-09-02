<template>
  <Teleport to="body">
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="isVisible"
        class="fixed inset-0 z-[100] overflow-y-auto"
        @click="closeModal"
      >
        <!-- Backdrop with blur -->
        <div class="fixed inset-0 bg-black/50 backdrop-blur-sm"></div>
        
        <!-- Modal Container -->
        <div class="min-h-screen px-4 text-center">
          <!-- Spacer for centering -->
          <span class="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
          
          <!-- Modal Content -->
          <transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 scale-95 -translate-y-4"
            enter-to-class="opacity-100 scale-100 translate-y-0"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 scale-100 translate-y-0"
            leave-to-class="opacity-0 scale-95 -translate-y-4"
          >
            <div
              v-show="isVisible"
              @click.stop
              class="inline-block w-full max-w-4xl my-8 text-left align-middle bg-white dark:bg-gray-800 rounded-2xl shadow-2xl transform transition-all duration-300"
            >
              <!-- Header -->
              <div class="sticky top-0 z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-t-2xl border-b border-gray-200 dark:border-gray-700 px-6 py-4">
                <div class="flex items-center justify-between">
                  <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {{ $t('header.search') }}
                  </h2>
                  <button
                    @click="closeModal"
                    class="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 hover:scale-110 active:scale-95 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <!-- Search Input -->
                <div class="mt-4 relative">
                  <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg class="w-5 h-5 text-gray-400" :class="{ 'text-udemy-purple': searchQuery }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  
                  <input
                    ref="searchInput"
                    v-model="searchQuery"
                    @input="performSearch"
                    type="text"
                    :placeholder="$t('header.searchPlaceholder')"
                    class="w-full pl-12 pr-12 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-udemy-purple focus:border-transparent transition-all duration-300 text-lg"
                  />
                  
                  <!-- Clear button -->
                  <div class="absolute inset-y-0 right-0 pr-4 flex items-center">
                    <button
                      v-show="searchQuery"
                      @click="clearSearch"
                      class="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-200 hover:scale-110 active:scale-95 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <!-- Quick filters -->
                <div class="mt-4 flex flex-wrap gap-2">
                  <button
                    v-for="filter in quickFilters"
                    :key="filter"
                    @click="applyQuickFilter(filter)"
                    class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-udemy-purple hover:text-white transition-all duration-200 hover:scale-105"
                  >
                    {{ $t(`search.filters.${filter}`) }}
                  </button>
                </div>
              </div>
              
              <!-- Content -->
              <div class="max-h-[70vh] overflow-y-auto backdrop-blur-sm bg-white/95 dark:bg-gray-800/95">
                <!-- Loading State -->
                <div v-if="isLoading" class="p-8 text-center">
                  <div class="inline-flex items-center px-4 py-2 text-gray-600 dark:text-gray-400">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {{ $t('common.loading') }}
                  </div>
                </div>
                
                <!-- Empty State -->
                <div v-else-if="!searchQuery" class="p-12 text-center">
                  <div class="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                    {{ $t('search.emptyState.title') }}
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">
                    {{ $t('search.emptyState.subtitle') }}
                  </p>
                  
                  <!-- Popular searches -->
                  <div class="mt-6">
                    <h4 class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">
                      {{ $t('search.popularSearches') }}
                    </h4>
                    <div class="flex flex-wrap gap-2 justify-center">
                      <button
                        v-for="popular in popularSearches"
                        :key="popular"
                        @click="searchQuery = popular; performSearch()"
                        class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-udemy-purple hover:text-white transition-all duration-200 hover:scale-105"
                      >
                        {{ popular }}
                      </button>
                    </div>
                  </div>
                </div>
                
                <!-- No Results -->
                <div v-else-if="searchResults.length === 0 && !isLoading" class="p-12 text-center">
                  <div class="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  </div>
                  <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                    {{ $t('search.noResults.title') }}
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">
                    {{ $t('search.noResults.subtitle', { query: searchQuery }) }}
                  </p>
                </div>
                
                <!-- Results -->
                <div v-else-if="searchResults.length > 0" class="p-6">
                  <div class="mb-4 flex items-center justify-between">
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      {{ $t('search.resultsCount', { count: searchResults.length, query: searchQuery }) }}
                    </p>
                    <div class="flex items-center gap-2">
                      <label class="text-sm text-gray-500 dark:text-gray-400">{{ $t('search.sortBy') }}:</label>
                      <select
                        v-model="sortBy"
                        @change="sortResults"
                        class="px-3 py-1 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-udemy-purple"
                      >
                        <option value="relevance">{{ $t('search.sort.relevance') }}</option>
                        <option value="newest">{{ $t('search.sort.newest') }}</option>
                        <option value="rating">{{ $t('search.sort.rating') }}</option>
                        <option value="price">{{ $t('search.sort.price') }}</option>
                      </select>
                    </div>
                  </div>
                  
                  <!-- Results Grid -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div
                      v-for="(result, index) in searchResults"
                      :key="result.id"
                      class="group bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-udemy-purple dark:hover:border-udemy-purple transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer overflow-hidden"
                      :style="{ animationDelay: `${index * 50}ms` }"
                      @click="selectResult(result)"
                    >
                      <div class="flex">
                        <!-- Image -->
                        <div class="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-udemy-purple to-purple-600 relative overflow-hidden">
                          <img
                            v-if="result.image"
                            :src="result.image"
                            :alt="result.title"
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div v-else class="w-full h-full flex items-center justify-center">
                            <svg class="w-8 h-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                          </div>
                        </div>
                        
                        <!-- Content -->
                        <div class="flex-grow p-4">
                          <div class="flex items-start justify-between">
                            <div class="flex-grow">
                              <h3 class="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-udemy-purple transition-colors line-clamp-2">
                                {{ result.title }}
                              </h3>
                              <p class="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-1">
                                {{ result.instructor }}
                              </p>
                              
                              <!-- Badges -->
                              <div class="flex items-center gap-2 mt-2">
                                <span
                                  v-if="result.badge"
                                  class="px-2 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full"
                                >
                                  {{ $t(`search.badges.${result.badge}`) }}
                                </span>
                                <div class="flex items-center gap-1">
                                  <div class="flex">
                                    <svg
                                      v-for="star in 5"
                                      :key="star"
                                      class="w-3 h-3"
                                      :class="star <= result.rating ? 'text-yellow-400' : 'text-gray-300'"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                  </div>
                                  <span class="text-xs text-gray-500">{{ result.rating }}</span>
                                  <span class="text-xs text-gray-400">({{ result.students }})</span>
                                </div>
                              </div>
                            </div>
                            
                            <!-- Price -->
                            <div class="text-right ml-2">
                              <div class="text-lg font-bold text-gray-900 dark:text-gray-100">
                                {{ result.price }}
                              </div>
                              <div v-if="result.originalPrice" class="text-sm text-gray-500 line-through">
                                {{ result.originalPrice }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { ref, nextTick, watch } from 'vue'

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close', 'select'])

const searchInput = ref(null)
const searchQuery = ref('')
const isLoading = ref(false)
const sortBy = ref('relevance')
const searchResults = ref([])

const quickFilters = ['all', 'development', 'business', 'design', 'marketing']
const popularSearches = ['Vue.js', 'JavaScript', 'Python', 'React', 'Node.js', 'UI/UX Design']

// Mock search results
const mockResults = [
  {
    id: 1,
    title: 'Vue.js - The Complete Guide (incl. Router & Composition API)',
    instructor: 'Maximilian Schwarzmüller',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=200',
    rating: 4.6,
    students: '125,847',
    price: '€84.99',
    originalPrice: '€199.99',
    badge: 'bestseller'
  },
  {
    id: 2,
    title: 'JavaScript - The Complete Guide 2024 (Beginner + Advanced)',
    instructor: 'Maximilian Schwarzmüller',
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=200',
    rating: 4.7,
    students: '89,234',
    price: '€74.99',
    originalPrice: '€179.99',
    badge: 'hot'
  },
  {
    id: 3,
    title: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
    instructor: 'Maximilian Schwarzmüller',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200',
    rating: 4.6,
    students: '234,567',
    price: '€79.99',
    originalPrice: '€189.99',
    badge: 'bestseller'
  },
  {
    id: 4,
    title: 'Node.js, Express, MongoDB & More: The Complete Bootcamp',
    instructor: 'Jonas Schmedtmann',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200',
    rating: 4.8,
    students: '156,789',
    price: '€89.99',
    originalPrice: '€199.99',
    badge: 'new'
  }
]

const performSearch = () => {
  if (!searchQuery.value.trim()) {
    searchResults.value = []
    return
  }

  isLoading.value = true
  
  // Simulate API call
  setTimeout(() => {
    searchResults.value = mockResults.filter(result =>
      result.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      result.instructor.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
    isLoading.value = false
  }, 500)
}

const clearSearch = () => {
  searchQuery.value = ''
  searchResults.value = []
}

const applyQuickFilter = (filter) => {
  if (filter === 'all') {
    searchQuery.value = ''
    searchResults.value = []
  } else {
    searchQuery.value = filter
    performSearch()
  }
}

const sortResults = () => {
  // Implement sorting logic
  console.log('Sorting by:', sortBy.value)
}

const selectResult = (result) => {
  emit('select', result)
  closeModal()
}

const closeModal = () => {
  emit('close')
}

// Focus search input when modal opens
watch(() => props.isVisible, (newVal) => {
  if (newVal) {
    nextTick(() => {
      searchInput.value?.focus()
    })
  }
})

// Close modal on escape
const handleEscape = (e) => {
  if (e.key === 'Escape' && props.isVisible) {
    closeModal()
  }
}

// Add/remove escape listener
watch(() => props.isVisible, (newVal) => {
  if (newVal) {
    document.addEventListener('keydown', handleEscape)
  } else {
    document.removeEventListener('keydown', handleEscape)
  }
})
</script>

<style scoped>
.text-udemy-purple {
  color: #A435F0;
}

.ring-udemy-purple {
  --tw-ring-color: #A435F0;
}

.bg-udemy-purple {
  background-color: #A435F0;
}

.border-udemy-purple {
  border-color: #A435F0;
}

.hover\:border-udemy-purple:hover {
  border-color: #A435F0;
}

.hover\:text-udemy-purple:hover {
  color: #A435F0;
}

.from-udemy-purple {
  --tw-gradient-from: #A435F0;
}

/* Line clamp utilities */
.line-clamp-1 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

/* Custom scrollbar */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #CBD5E0;
  border-radius: 3px;
}

.dark .overflow-y-auto::-webkit-scrollbar-thumb {
  background: #4A5568;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #A0AEC0;
}

.dark .overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #718096;
}
</style>