<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import World from '@svg-maps/world'

const { t, locale } = useI18n()

// World map data
const map = World

// Hovered country state
const hovered = ref(null)

// Selected campus state
const selectedCampus = ref(null)

// Campus data
const campuses = ref([
  {
    id: 'headquarters',
    name: 'Alexandrie',
    country: 'eg',
    countryName: 'Égypte',
    countryNameEn: 'Egypt',
    type: 'headquarters',
    description: 'Siège principal de l\'Université Senghor',
    descriptionEn: 'Main headquarters of Senghor University',
    programs: ['Masters', 'Doctorat', 'Diplômes universitaires'],
    programsEn: ['Masters', 'Doctorate', 'University Diplomas'],
    students: 500,
    url: 'https://www.usenghor.org'
  },
  {
    id: 'benin',
    name: 'Campus Bénin',
    country: 'bj',
    countryName: 'Bénin',
    countryNameEn: 'Benin',
    type: 'campus',
    description: 'Campus externalisé du Bénin',
    descriptionEn: 'External campus in Benin',
    programs: ['Formation continue', 'Certifications'],
    programsEn: ['Continuing education', 'Certifications'],
    students: 150,
    url: 'https://sites.google.com/usenghor.org/campus-benin'
  },
  {
    id: 'burkina',
    name: 'Campus Burkina Faso',
    country: 'bf',
    countryName: 'Burkina Faso',
    countryNameEn: 'Burkina Faso',
    type: 'campus',
    description: 'Campus externalisé du Burkina Faso',
    descriptionEn: 'External campus in Burkina Faso',
    programs: ['Formation continue', 'Certifications'],
    programsEn: ['Continuing education', 'Certifications'],
    students: 120,
    url: 'https://sites.google.com/usenghor.org/campus-burkinafaso'
  },
  {
    id: 'cameroon',
    name: 'Campus Cameroun',
    country: 'cm',
    countryName: 'Cameroun',
    countryNameEn: 'Cameroon',
    type: 'campus',
    description: 'Campus externalisé du Cameroun',
    descriptionEn: 'External campus in Cameroon',
    programs: ['Formation continue', 'Certifications'],
    programsEn: ['Continuing education', 'Certifications'],
    students: 180,
    url: 'http://campus-cameroun.usenghor.org/'
  },
  {
    id: 'ivorycoast',
    name: 'Campus Côte d\'Ivoire',
    country: 'ci',
    countryName: 'Côte d\'Ivoire',
    countryNameEn: 'Ivory Coast',
    type: 'campus',
    description: 'Campus externalisé de Côte d\'Ivoire',
    descriptionEn: 'External campus in Ivory Coast',
    programs: ['Formation continue', 'Certifications'],
    programsEn: ['Continuing education', 'Certifications'],
    students: 160,
    url: 'http://campus-cotedivoire.usenghor.org/'
  },
  {
    id: 'djibouti',
    name: 'Campus Djibouti',
    country: 'dj',
    countryName: 'Djibouti',
    countryNameEn: 'Djibouti',
    type: 'campus',
    description: 'Campus externalisé de Djibouti',
    descriptionEn: 'External campus in Djibouti',
    programs: ['Formation continue', 'Certifications'],
    programsEn: ['Continuing education', 'Certifications'],
    students: 80,
    url: 'https://sites.google.com/usenghor.org/campus-djibouti/'
  },
  {
    id: 'gabon',
    name: 'Campus Gabon',
    country: 'ga',
    countryName: 'Gabon',
    countryNameEn: 'Gabon',
    type: 'campus',
    description: 'Campus externalisé du Gabon',
    descriptionEn: 'External campus in Gabon',
    programs: ['Formation continue', 'Certifications'],
    programsEn: ['Continuing education', 'Certifications'],
    students: 100,
    url: 'https://sites.google.com/usenghor.org/campus-gabon/accueil/le-campus-senghor-au-gabon'
  },
  {
    id: 'guinea',
    name: 'Campus Guinée',
    country: 'gn',
    countryName: 'Guinée',
    countryNameEn: 'Guinea',
    type: 'campus',
    description: 'Campus externalisé de Guinée',
    descriptionEn: 'External campus in Guinea',
    programs: ['Formation continue', 'Certifications'],
    programsEn: ['Continuing education', 'Certifications'],
    students: 90,
    url: 'https://sites.google.com/usenghor.org/campus-guinee'
  },
  {
    id: 'hungary',
    name: 'Campus Hongrie',
    country: 'hu',
    countryName: 'Hongrie',
    countryNameEn: 'Hungary',
    type: 'campus',
    description: 'Campus externalisé de Hongrie',
    descriptionEn: 'External campus in Hungary',
    programs: ['Formation continue', 'Certifications'],
    programsEn: ['Continuing education', 'Certifications'],
    students: 50,
    url: 'http://campus-hongrie.usenghor.org/'
  },
  {
    id: 'madagascar',
    name: 'Campus Madagascar',
    country: 'mg',
    countryName: 'Madagascar',
    countryNameEn: 'Madagascar',
    type: 'campus',
    description: 'Campus externalisé de Madagascar',
    descriptionEn: 'External campus in Madagascar',
    programs: ['Formation continue', 'Certifications'],
    programsEn: ['Continuing education', 'Certifications'],
    students: 110,
    url: 'http://campus-madagascar.usenghor.org/'
  },
  {
    id: 'morocco',
    name: 'Campus Maroc',
    country: 'ma',
    countryName: 'Maroc',
    countryNameEn: 'Morocco',
    type: 'campus',
    description: 'Campus externalisé du Maroc',
    descriptionEn: 'External campus in Morocco',
    programs: ['Formation continue', 'Certifications'],
    programsEn: ['Continuing education', 'Certifications'],
    students: 140,
    url: 'http://campus-maroc.usenghor.org/'
  },
  {
    id: 'drc',
    name: 'Campus RDC',
    country: 'cd',
    countryName: 'République démocratique du Congo',
    countryNameEn: 'Democratic Republic of the Congo',
    type: 'campus',
    description: 'Campus externalisé de la RDC',
    descriptionEn: 'External campus in the DRC',
    programs: ['Formation continue', 'Certifications'],
    programsEn: ['Continuing education', 'Certifications'],
    students: 130,
    url: 'http://campus-rdc.usenghor.org/'
  },
  {
    id: 'senegal',
    name: 'Campus Sénégal',
    country: 'sn',
    countryName: 'Sénégal',
    countryNameEn: 'Senegal',
    type: 'campus',
    description: 'Campus externalisé du Sénégal',
    descriptionEn: 'External campus in Senegal',
    programs: ['Formation continue', 'Certifications'],
    programsEn: ['Continuing education', 'Certifications'],
    students: 200,
    url: 'http://campus-senegal.usenghor.org/'
  },
  {
    id: 'togo',
    name: 'Campus Togo',
    country: 'tg',
    countryName: 'Togo',
    countryNameEn: 'Togo',
    type: 'campus',
    description: 'Campus externalisé du Togo',
    descriptionEn: 'External campus in Togo',
    programs: ['Formation continue', 'Certifications'],
    programsEn: ['Continuing education', 'Certifications'],
    students: 85,
    url: 'http://campus-togo.usenghor.org/'
  }
])

// Countries colored by type
const coloredCountries = {
  // Headquarters - Amber/Orange
  eg: { color: '#f59e0b', type: 'headquarters' },
  // External campuses - Blue
  bj: { color: '#3b82f6', type: 'campus' },  // Bénin
  bf: { color: '#3b82f6', type: 'campus' },  // Burkina Faso
  cm: { color: '#3b82f6', type: 'campus' },  // Cameroun
  ci: { color: '#3b82f6', type: 'campus' },  // Côte d'Ivoire
  dj: { color: '#3b82f6', type: 'campus' },  // Djibouti
  ga: { color: '#3b82f6', type: 'campus' },  // Gabon
  gn: { color: '#3b82f6', type: 'campus' },  // Guinée
  hu: { color: '#3b82f6', type: 'campus' },  // Hongrie
  mg: { color: '#3b82f6', type: 'campus' },  // Madagascar
  ma: { color: '#3b82f6', type: 'campus' },  // Maroc
  cd: { color: '#3b82f6', type: 'campus' },  // RDC
  sn: { color: '#3b82f6', type: 'campus' },  // Sénégal
  tg: { color: '#3b82f6', type: 'campus' }   // Togo
}

// Default color for non-highlighted countries
const defaultColor = '#e5e7eb'

// Get color for a country
const getColor = (id) => {
  const isHovered = hovered.value?.id === id
  const countryData = coloredCountries[id]

  if (countryData) {
    if (isHovered) {
      return adjustBrightness(countryData.color, -15)
    }
    return countryData.color
  }

  if (isHovered) {
    return '#bdbdbd'
  }

  return defaultColor
}

// Adjust brightness for hover effect
const adjustBrightness = (hex, percent) => {
  const num = parseInt(hex.replace('#', ''), 16)
  const amt = Math.round(2.55 * percent)
  const R = (num >> 16) + amt
  const G = ((num >> 8) & 0x00ff) + amt
  const B = (num & 0x0000ff) + amt
  return `#${(
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
    (B < 255 ? (B < 1 ? 0 : B) : 255)
  ).toString(16).slice(1)}`
}

// Get campus for a country
const getCampusForCountry = (countryId) => {
  return campuses.value.find(c => c.country === countryId)
}

// Handle country click
const handleCountryClick = (location) => {
  const campus = getCampusForCountry(location.id)
  if (campus) {
    selectedCampus.value = campus
  }
}

// Close campus detail
const closeCampusDetail = () => {
  selectedCampus.value = null
}

// Get tooltip text
const getTooltipText = computed(() => {
  if (!hovered.value) return ''

  const campus = getCampusForCountry(hovered.value.id)
  if (campus) {
    const countryName = locale.value === 'fr' ? campus.countryName : campus.countryNameEn
    return `${countryName} - ${campus.name}`
  }

  return hovered.value.name
})

// Stats animation
const statsRef = ref(null)
const hasAnimated = ref(false)
const animatedStats = ref({
  campuses: 0,
  countries: 0,
  students: 0
})

const targetStats = {
  campuses: 14,
  countries: 14,
  students: 1995
}

const animateValue = (key, target, duration = 2000) => {
  const startTime = performance.now()
  const startValue = 0

  const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4)

  const updateValue = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const easedProgress = easeOutQuart(progress)

    animatedStats.value[key] = Math.round(startValue + (target - startValue) * easedProgress)

    if (progress < 1) {
      requestAnimationFrame(updateValue)
    }
  }

  requestAnimationFrame(updateValue)
}

const startAnimation = () => {
  if (hasAnimated.value) return
  hasAnimated.value = true

  animateValue('campuses', targetStats.campuses, 1500)
  setTimeout(() => animateValue('countries', targetStats.countries, 2000), 200)
  setTimeout(() => animateValue('students', targetStats.students, 2000), 400)
}

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startAnimation()
        }
      })
    },
    { threshold: 0.3 }
  )

  if (statsRef.value) {
    observer.observe(statsRef.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})

// Filter state
const activeFilter = ref('all')
const filters = ['all', 'headquarters', 'campus']

const filteredCampuses = computed(() => {
  if (activeFilter.value === 'all') return campuses.value
  return campuses.value.filter(c => c.type === activeFilter.value)
})
</script>

<template>
  <section class="relative py-16 lg:py-24 bg-white dark:bg-gray-950 transition-colors duration-300 overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-amber-50/30 dark:from-blue-900/10 dark:via-transparent dark:to-amber-900/10"></div>
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-blob"></div>
      <div class="absolute bottom-0 -left-40 w-80 h-80 bg-amber-200/20 dark:bg-amber-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12 lg:mb-16">
        <span class="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 mb-4">
          <font-awesome-icon icon="fa-solid fa-globe-africa" class="w-3.5 h-3.5 mr-2" />
          {{ t('campus.badge') }}
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {{ t('campus.title') }}
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {{ t('campus.subtitle') }}
        </p>
      </div>

      <!-- Legend -->
      <div class="flex flex-wrap justify-center gap-4 lg:gap-6 mb-8">
        <div class="flex items-center gap-2">
          <span class="w-4 h-4 rounded-full bg-amber-500"></span>
          <span class="text-sm text-gray-600 dark:text-gray-400">{{ t('campus.legend.headquarters') }}</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-4 h-4 rounded-full bg-blue-500"></span>
          <span class="text-sm text-gray-600 dark:text-gray-400">{{ t('campus.legend.campus') }}</span>
        </div>
      </div>

      <!-- Map Container -->
      <div class="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-4 lg:p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
        <!-- Map -->
        <div class="map-container relative">
          <svg
            :viewBox="map.viewBox"
            class="world-map w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              v-for="location in map.locations"
              :key="location.id"
              :d="location.path"
              :fill="getColor(location.id)"
              stroke="#fff"
              stroke-width="0.5"
              class="map-path"
              :class="{ 'cursor-pointer': coloredCountries[location.id] }"
              @mouseenter="hovered = location"
              @mouseleave="hovered = null"
              @click="handleCountryClick(location)"
            />
          </svg>

          <!-- Tooltip -->
          <Transition name="fade">
            <div v-if="hovered" class="tooltip">
              {{ getTooltipText }}
            </div>
          </Transition>
        </div>
      </div>
      

      <!-- Campus Detail Modal -->
      <Transition name="modal">
        <div
          v-if="selectedCampus"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          @click.self="closeCampusDetail"
        >
          <div class="relative w-full max-w-lg bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden animate__animated animate__fadeInUp animate__faster">
            <!-- Header -->
            <div
              class="relative px-6 py-8 text-white"
              :class="{
                'bg-gradient-to-r from-amber-500 to-orange-500': selectedCampus.type === 'headquarters',
                'bg-gradient-to-r from-blue-500 to-indigo-500': selectedCampus.type === 'campus'
              }"
            >
              <button
                @click="closeCampusDetail"
                class="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <font-awesome-icon icon="fa-solid fa-times" class="w-4 h-4" />
              </button>
              <div class="flex items-center gap-4">
                <div class="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                  <font-awesome-icon
                    :icon="selectedCampus.type === 'headquarters' ? 'fa-solid fa-building-columns' : 'fa-solid fa-graduation-cap'"
                    class="w-8 h-8"
                  />
                </div>
                <div>
                  <h3 class="text-2xl font-bold">{{ selectedCampus.name }}</h3>
                  <p class="text-white/80">{{ locale === 'fr' ? selectedCampus.countryName : selectedCampus.countryNameEn }}</p>
                </div>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                {{ locale === 'fr' ? selectedCampus.description : selectedCampus.descriptionEn }}
              </p>

              <div class="mb-6">
                <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-3">{{ t('campus.modal.programs') }}</h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="program in (locale === 'fr' ? selectedCampus.programs : selectedCampus.programsEn)"
                    :key="program"
                    class="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                  >
                    {{ program }}
                  </span>
                </div>
              </div>

              <div class="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                <div class="flex items-center gap-2">
                  <font-awesome-icon icon="fa-solid fa-users" class="w-5 h-5 text-blue-500" />
                  <div>
                    <div class="text-xl font-bold text-gray-900 dark:text-white">{{ selectedCampus.students }}</div>
                    <div class="text-xs text-gray-500 dark:text-gray-400">{{ t('campus.modal.activeStudents') }}</div>
                  </div>
                </div>
              </div>

              <button
                class="mt-6 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
                @click="closeCampusDetail"
              >
                {{ t('campus.modal.close') }}
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
/* Map Container */
.map-container {
  position: relative;
  width: 100%;
}

.world-map {
  width: 100%;
  height: auto;
}

/* Map Path Styles */
.map-path {
  transition: fill 0.2s ease, opacity 0.2s ease;
}

.map-path:hover {
  opacity: 0.85;
}

/* Tooltip */
.tooltip {
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.85);
  color: #fff;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  pointer-events: none;
  z-index: 10;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Modal transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Blob Animation */
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(20px, -30px) scale(1.1);
  }
  50% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  75% {
    transform: translate(30px, 10px) scale(1.05);
  }
}

.animate-blob {
  animation: blob 12s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

/* Stats Animation */
.stat-card {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.stat-card.stat-visible {
  opacity: 1;
  transform: translateY(0);
}

.stat-card:nth-child(2) {
  transition-delay: 0.1s;
}

.stat-card:nth-child(3) {
  transition-delay: 0.2s;
}

.tabular-nums {
  font-variant-numeric: tabular-nums;
}
</style>
