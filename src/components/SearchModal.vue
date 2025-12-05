<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const searchQuery = ref('')
const selectedIndex = ref(-1)
const searchInputRef = ref(null)
const searchHistory = ref([])

// Données simulées pour l'autocomplétion
const searchData = [
  // Formations
  { id: 1, type: 'formation', title: 'Master Administration des Entreprises', subtitle: 'Formation • 2 ans • Alexandrie', icon: 'fa-solid fa-graduation-cap', route: '/formations/masters', keywords: ['master', 'mba', 'administration', 'entreprise', 'management'] },
  { id: 2, type: 'formation', title: 'Master Gestion du Patrimoine Culturel', subtitle: 'Formation • 2 ans • Alexandrie', icon: 'fa-solid fa-graduation-cap', route: '/formations/masters', keywords: ['master', 'patrimoine', 'culture', 'musée'] },
  { id: 3, type: 'formation', title: 'Master Santé Internationale', subtitle: 'Formation • 2 ans • Alexandrie', icon: 'fa-solid fa-graduation-cap', route: '/formations/masters', keywords: ['master', 'santé', 'médecine', 'international'] },
  { id: 4, type: 'formation', title: 'Master Environnement', subtitle: 'Formation • 2 ans • Alexandrie', icon: 'fa-solid fa-graduation-cap', route: '/formations/masters', keywords: ['master', 'environnement', 'écologie', 'développement durable'] },
  { id: 5, type: 'formation', title: 'Doctorat en Sciences de Gestion', subtitle: 'Formation • 3-4 ans', icon: 'fa-solid fa-book-open', route: '/formations/doctorat', keywords: ['doctorat', 'phd', 'thèse', 'recherche'] },
  { id: 6, type: 'formation', title: 'Formation en ligne - Leadership', subtitle: 'En ligne • Flexible', icon: 'fa-solid fa-laptop', route: '/formations/en-ligne', keywords: ['en ligne', 'leadership', 'management', 'distance'] },
  { id: 7, type: 'formation', title: 'Certification Management de Projet', subtitle: 'Certification • 6 mois', icon: 'fa-solid fa-certificate', route: '/formations/certifiantes', keywords: ['certification', 'projet', 'pmp', 'agile'] },

  // Actualités
  { id: 10, type: 'news', title: 'Appel à candidatures Master 2025', subtitle: 'Actualité • Date limite: 30 juin', icon: 'fa-solid fa-bullhorn', route: '/actualites/appels', keywords: ['candidature', 'inscription', 'admission', '2025'] },
  { id: 11, type: 'news', title: 'Bourses d\'excellence OIF', subtitle: 'Actualité • Financement disponible', icon: 'fa-solid fa-bullhorn', route: '/actualites/appels', keywords: ['bourse', 'financement', 'oif', 'francophonie'] },
  { id: 12, type: 'news', title: 'Offre d\'emploi - Chargé de programme', subtitle: 'Emploi • CDI • Alexandrie', icon: 'fa-solid fa-briefcase', route: '/actualites/emplois', keywords: ['emploi', 'travail', 'recrutement', 'poste'] },
  { id: 13, type: 'news', title: 'Conférence Internationale Francophonie', subtitle: 'Événement • 15-17 Mars 2025', icon: 'fa-solid fa-calendar-days', route: '/actualites/evenements', keywords: ['conférence', 'événement', 'francophonie'] },

  // Réseau
  { id: 20, type: 'network', title: 'Réseau Alumni Senghor', subtitle: 'Réseau • 5000+ diplômés', icon: 'fa-solid fa-user-graduate', route: '/reseau/alumni', keywords: ['alumni', 'diplômés', 'réseau', 'anciens'] },
  { id: 21, type: 'network', title: 'Partenaires stratégiques', subtitle: 'Réseau • OIF, AFD, UNESCO', icon: 'fa-solid fa-handshake', route: '/reseau/partenaires-strategiques', keywords: ['partenaires', 'oif', 'afd', 'unesco'] },

  // À propos
  { id: 30, type: 'about', title: 'Campus d\'Alexandrie', subtitle: 'À propos • Visite virtuelle', icon: 'fa-solid fa-map-location-dot', route: '/a-propos/campus', keywords: ['campus', 'alexandrie', 'égypte', 'visite'] },
  { id: 31, type: 'about', title: 'Mission et valeurs', subtitle: 'À propos • Notre identité', icon: 'fa-solid fa-bullseye', route: '/a-propos/mission', keywords: ['mission', 'valeurs', 'vision'] },
  { id: 32, type: 'about', title: 'Historique de l\'université', subtitle: 'À propos • Depuis 1990', icon: 'fa-solid fa-landmark', route: '/a-propos/historique', keywords: ['histoire', 'historique', 'fondation', 'senghor'] },

  // Projets
  { id: 40, type: 'project', title: 'Projet TransformAction', subtitle: 'Projet • Innovation sociale', icon: 'fa-solid fa-rocket', route: '/projets/transformaction', keywords: ['transformaction', 'innovation', 'social'] },
  { id: 41, type: 'project', title: 'KreAfrika', subtitle: 'Projet • Industries créatives', icon: 'fa-solid fa-lightbulb', route: '/projets/kreafrika', keywords: ['kreafrika', 'créatif', 'culture', 'art'] }
]

// Suggestions populaires
const popularSuggestions = [
  { title: 'Masters', icon: 'fa-solid fa-graduation-cap', route: '/formations/masters' },
  { title: 'Appels à candidatures', icon: 'fa-solid fa-bullhorn', route: '/actualites/appels' },
  { title: 'Bourses', icon: 'fa-solid fa-coins', route: '/actualites/appels' },
  { title: 'Alumni', icon: 'fa-solid fa-user-graduate', route: '/reseau/alumni' },
  { title: 'Campus', icon: 'fa-solid fa-map-location-dot', route: '/a-propos/campus' }
]

// Charger l'historique depuis localStorage
const loadHistory = () => {
  try {
    const saved = localStorage.getItem('senghor_search_history')
    if (saved) {
      searchHistory.value = JSON.parse(saved)
    }
  } catch (e) {
    searchHistory.value = []
  }
}

// Sauvegarder dans l'historique
const saveToHistory = (item) => {
  const newEntry = {
    id: item.id || Date.now(),
    title: item.title,
    route: item.route,
    icon: item.icon,
    timestamp: Date.now()
  }

  // Éviter les doublons
  searchHistory.value = searchHistory.value.filter(h => h.title !== newEntry.title)

  // Ajouter en début de liste
  searchHistory.value.unshift(newEntry)

  // Limiter à 5 éléments
  searchHistory.value = searchHistory.value.slice(0, 5)

  // Sauvegarder
  localStorage.setItem('senghor_search_history', JSON.stringify(searchHistory.value))
}

// Supprimer un élément de l'historique
const removeFromHistory = (index) => {
  searchHistory.value.splice(index, 1)
  localStorage.setItem('senghor_search_history', JSON.stringify(searchHistory.value))
}

// Effacer tout l'historique
const clearHistory = () => {
  searchHistory.value = []
  localStorage.removeItem('senghor_search_history')
}

// Résultats filtrés
const filteredResults = computed(() => {
  if (!searchQuery.value.trim()) {
    return []
  }

  const query = searchQuery.value.toLowerCase().trim()

  return searchData.filter(item => {
    const titleMatch = item.title.toLowerCase().includes(query)
    const subtitleMatch = item.subtitle.toLowerCase().includes(query)
    const keywordMatch = item.keywords.some(k => k.includes(query))
    return titleMatch || subtitleMatch || keywordMatch
  }).slice(0, 8) // Limiter à 8 résultats
})

// Grouper par type
const groupedResults = computed(() => {
  const groups = {}
  filteredResults.value.forEach(item => {
    if (!groups[item.type]) {
      groups[item.type] = []
    }
    groups[item.type].push(item)
  })
  return groups
})

const typeLabels = {
  formation: 'Formations',
  news: 'Actualités',
  network: 'Réseau',
  about: 'À propos',
  project: 'Projets'
}

// Navigation clavier
const handleKeydown = (e) => {
  const totalResults = filteredResults.value.length

  if (e.key === 'ArrowDown') {
    e.preventDefault()
    selectedIndex.value = Math.min(selectedIndex.value + 1, totalResults - 1)
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    selectedIndex.value = Math.max(selectedIndex.value - 1, -1)
  } else if (e.key === 'Enter' && selectedIndex.value >= 0) {
    e.preventDefault()
    selectResult(filteredResults.value[selectedIndex.value])
  } else if (e.key === 'Escape') {
    closeModal()
  }
}

// Sélectionner un résultat
const selectResult = (item) => {
  saveToHistory(item)
  window.location.href = item.route
  closeModal()
}

// Fermer le modal
const closeModal = () => {
  searchQuery.value = ''
  selectedIndex.value = -1
  emit('close')
}

// Reset de l'index quand la recherche change
watch(searchQuery, () => {
  selectedIndex.value = -1
})

// Focus sur l'input quand le modal s'ouvre
watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    loadHistory()
    setTimeout(() => {
      searchInputRef.value?.focus()
    }, 100)
  } else {
    searchQuery.value = ''
    selectedIndex.value = -1
  }
})

// Gérer le raccourci clavier global
const handleGlobalKeydown = (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault()
    if (!props.isOpen) {
      emit('close') // Toggle
    }
  }
}

onMounted(() => {
  loadHistory()
  window.addEventListener('keydown', handleGlobalKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleGlobalKeydown)
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] sm:pt-[15vh] px-4"
        @click.self="closeModal"
      >
        <!-- Backdrop with blur -->
        <div class="absolute inset-0 bg-gray-900/60 backdrop-blur-md"></div>

        <!-- Search Container with Glassmorphism -->
        <Transition
          enter-active-class="transition duration-400 ease-out"
          enter-from-class="opacity-0 scale-95 translate-y-8"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 translate-y-8"
        >
          <div
            v-if="isOpen"
            class="relative w-full max-w-2xl"
          >
            <!-- Glow effect -->
            <div class="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-rose-500/20 rounded-3xl blur-xl opacity-70"></div>

            <!-- Main container -->
            <div class="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl rounded-2xl shadow-2xl shadow-black/20 border border-white/20 dark:border-gray-700/50 overflow-hidden">

              <!-- Search Input -->
              <div class="relative border-b border-gray-200/50 dark:border-gray-700/50">
                <div class="flex items-center">
                  <font-awesome-icon
                    icon="fa-solid fa-magnifying-glass"
                    class="absolute left-5 w-5 h-5 text-gray-400"
                  />
                  <input
                    ref="searchInputRef"
                    v-model="searchQuery"
                    type="text"
                    :placeholder="t('search.placeholder')"
                    class="w-full pl-14 pr-24 py-5 text-lg bg-transparent text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none"
                    @keydown="handleKeydown"
                  />

                  <!-- Keyboard shortcut hint -->
                  <div class="absolute right-4 flex items-center gap-2">
                    <kbd class="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-gray-400 bg-gray-100/80 dark:bg-gray-800/80 rounded-lg border border-gray-200/50 dark:border-gray-700/50">
                      <span class="text-[10px]">ESC</span>
                    </kbd>
                    <button
                      @click="closeModal"
                      class="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-200"
                    >
                      <font-awesome-icon icon="fa-solid fa-xmark" class="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <!-- Loading indicator -->
                <div v-if="searchQuery && !filteredResults.length" class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 animate-pulse"></div>
              </div>

              <!-- Content Area -->
              <div class="max-h-[60vh] overflow-y-auto overscroll-contain">

                <!-- Search Results -->
                <div v-if="searchQuery && filteredResults.length > 0" class="p-3">
                  <template v-for="(items, type) in groupedResults" :key="type">
                    <div class="mb-4 last:mb-0">
                      <p class="px-3 py-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        {{ typeLabels[type] }}
                      </p>
                      <div class="space-y-1">
                        <button
                          v-for="(item, idx) in items"
                          :key="item.id"
                          @click="selectResult(item)"
                          class="w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group text-left"
                          :class="[
                            filteredResults.indexOf(item) === selectedIndex
                              ? 'bg-gradient-to-r from-amber-500/10 to-orange-500/10 dark:from-amber-500/20 dark:to-orange-500/20 border border-amber-500/30'
                              : 'hover:bg-gray-100/50 dark:hover:bg-gray-800/50 border border-transparent'
                          ]"
                        >
                          <div
                            class="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                            :class="[
                              filteredResults.indexOf(item) === selectedIndex
                                ? 'bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/25'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 group-hover:bg-amber-50 dark:group-hover:bg-amber-900/30 group-hover:text-amber-600 dark:group-hover:text-amber-400'
                            ]"
                          >
                            <font-awesome-icon :icon="item.icon" class="w-5 h-5" />
                          </div>
                          <div class="flex-1 min-w-0">
                            <p
                              class="font-medium truncate transition-colors"
                              :class="filteredResults.indexOf(item) === selectedIndex ? 'text-amber-700 dark:text-amber-300' : 'text-gray-900 dark:text-white'"
                            >
                              {{ item.title }}
                            </p>
                            <p class="text-sm text-gray-500 dark:text-gray-400 truncate">
                              {{ item.subtitle }}
                            </p>
                          </div>
                          <font-awesome-icon
                            icon="fa-solid fa-arrow-right"
                            class="w-4 h-4 text-gray-300 dark:text-gray-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                            :class="{ 'opacity-100 translate-x-0 text-amber-500': filteredResults.indexOf(item) === selectedIndex }"
                          />
                        </button>
                      </div>
                    </div>
                  </template>
                </div>

                <!-- No Results -->
                <div v-else-if="searchQuery && !filteredResults.length" class="p-8 text-center">
                  <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <font-awesome-icon icon="fa-solid fa-search" class="w-7 h-7 text-gray-400" />
                  </div>
                  <p class="text-gray-900 dark:text-white font-medium mb-1">{{ t('search.noResultsTitle') }}</p>
                  <p class="text-sm text-gray-500 dark:text-gray-400">{{ t('search.noResultsDesc') }}</p>
                </div>

                <!-- Default State: History + Suggestions -->
                <div v-else class="p-4 space-y-6">

                  <!-- Search History -->
                  <div v-if="searchHistory.length > 0">
                    <div class="flex items-center justify-between px-2 mb-3">
                      <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        {{ t('search.recentSearches') }}
                      </p>
                      <button
                        @click="clearHistory"
                        class="text-xs text-gray-400 hover:text-amber-500 transition-colors"
                      >
                        {{ t('search.clearHistory') }}
                      </button>
                    </div>
                    <div class="space-y-1">
                      <div
                        v-for="(item, index) in searchHistory"
                        :key="item.id"
                        class="group flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-200"
                      >
                        <font-awesome-icon icon="fa-solid fa-clock-rotate-left" class="w-4 h-4 text-gray-400" />
                        <a
                          :href="item.route"
                          class="flex-1 text-sm text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 truncate"
                          @click="saveToHistory(item)"
                        >
                          {{ item.title }}
                        </a>
                        <button
                          @click.stop="removeFromHistory(index)"
                          class="p-1 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all duration-200"
                        >
                          <font-awesome-icon icon="fa-solid fa-xmark" class="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <!-- Popular Suggestions -->
                  <div>
                    <p class="px-2 mb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      {{ t('search.popularSearches') }}
                    </p>
                    <div class="flex flex-wrap gap-2">
                      <a
                        v-for="suggestion in popularSuggestions"
                        :key="suggestion.title"
                        :href="suggestion.route"
                        class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 border"
                        :class="[
                          'bg-white/50 dark:bg-gray-800/50',
                          'text-gray-700 dark:text-gray-300',
                          'border-gray-200/50 dark:border-gray-700/50',
                          'hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-amber-500/25 hover:-translate-y-0.5'
                        ]"
                      >
                        <font-awesome-icon :icon="suggestion.icon" class="w-3.5 h-3.5" />
                        <span>{{ suggestion.title }}</span>
                      </a>
                    </div>
                  </div>

                  <!-- Quick Access Cards -->
                  <div class="grid grid-cols-2 gap-3 pt-2">
                    <a
                      href="/inscription"
                      class="group relative p-4 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                    >
                      <div class="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 opacity-90"></div>
                      <div class="absolute inset-0 bg-gradient-to-br from-amber-400/0 to-orange-600/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div class="relative">
                        <font-awesome-icon icon="fa-solid fa-paper-plane" class="w-6 h-6 text-white/80 mb-2" />
                        <p class="font-semibold text-white">{{ t('nav.apply') }}</p>
                        <p class="text-xs text-white/70">{{ t('search.applyNowDesc') }}</p>
                      </div>
                    </a>
                    <a
                      href="/actualites/appels"
                      class="group relative p-4 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                    >
                      <div class="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-600 opacity-90"></div>
                      <div class="absolute inset-0 bg-gradient-to-br from-violet-400/0 to-purple-700/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div class="relative">
                        <font-awesome-icon icon="fa-solid fa-bullhorn" class="w-6 h-6 text-white/80 mb-2" />
                        <p class="font-semibold text-white">{{ t('search.openCalls') }}</p>
                        <p class="text-xs text-white/70">{{ t('search.openCallsDesc') }}</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <!-- Footer -->
              <div class="border-t border-gray-200/50 dark:border-gray-700/50 px-4 py-3 bg-gray-50/50 dark:bg-gray-800/30">
                <div class="flex items-center justify-between text-xs text-gray-400">
                  <div class="flex items-center gap-4">
                    <span class="hidden sm:flex items-center gap-1.5">
                      <kbd class="px-1.5 py-0.5 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 font-mono">↑</kbd>
                      <kbd class="px-1.5 py-0.5 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 font-mono">↓</kbd>
                      <span>{{ t('search.navigate') }}</span>
                    </span>
                    <span class="hidden sm:flex items-center gap-1.5">
                      <kbd class="px-1.5 py-0.5 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 font-mono">↵</kbd>
                      <span>{{ t('search.select') }}</span>
                    </span>
                  </div>
                  <span class="flex items-center gap-1.5">
                    <kbd class="px-1.5 py-0.5 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 font-mono">ESC</kbd>
                    <span>{{ t('search.close') }}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* Smooth scrollbar */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: rgb(156 163 175 / 0.3);
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: rgb(156 163 175 / 0.5);
}

/* Animation for glow */
@keyframes glow-pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 0.8; }
}
</style>
