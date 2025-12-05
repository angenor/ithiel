<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeDropdown = ref(null)
const expandedMobileMenus = ref([])

const navItems = [
  { key: 'home', route: '/', hasDropdown: false },
  {
    key: 'news',
    route: '/actualites',
    hasDropdown: true,
    children: [
      { key: 'callsForApplications', route: '/actualites/appels', icon: 'fa-solid fa-bullhorn' },
      { key: 'jobOffers', route: '/actualites/emplois', icon: 'fa-solid fa-briefcase' },
      { key: 'events', route: '/actualites/evenements', icon: 'fa-solid fa-calendar-days' }
    ]
  },
  {
    key: 'projects',
    route: '/projets',
    hasDropdown: true,
    children: [
      { key: 'transformAction', route: '/projets/transformaction', icon: 'fa-solid fa-rocket' },
      { key: 'kreAfrika', route: '/projets/kreafrika', icon: 'fa-solid fa-lightbulb' }
    ]
  },
  {
    key: 'network',
    route: '/reseau',
    hasDropdown: true,
    children: [
      { key: 'campusPartners', route: '/reseau/partenaires-campus', icon: 'fa-solid fa-building-columns' },
      { key: 'strategicPartners', route: '/reseau/partenaires-strategiques', icon: 'fa-solid fa-handshake' },
      { key: 'teachersNetwork', route: '/reseau/enseignants', icon: 'fa-solid fa-chalkboard-user' },
      { key: 'alumni', route: '/reseau/alumni', icon: 'fa-solid fa-user-graduate' }
    ]
  },
  {
    key: 'training',
    route: '/formations',
    hasDropdown: true,
    children: [
      { key: 'masters', route: '/formations/masters', icon: 'fa-solid fa-graduation-cap' },
      { key: 'universityDiplomas', route: '/formations/diplomes-universite', icon: 'fa-solid fa-award' },
      { key: 'certifications', route: '/formations/certifiantes', icon: 'fa-solid fa-certificate' },
      { key: 'doctorate', route: '/formations/doctorat', icon: 'fa-solid fa-book-open' }
    ]
  }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (!isMobileMenuOpen.value) {
    expandedMobileMenus.value = []
  }
}

const toggleLanguage = () => {
  locale.value = locale.value === 'fr' ? 'en' : 'fr'
}

const openDropdown = (key) => {
  activeDropdown.value = key
}

const closeDropdown = () => {
  activeDropdown.value = null
}

const toggleMobileSubmenu = (key) => {
  const index = expandedMobileMenus.value.indexOf(key)
  if (index === -1) {
    expandedMobileMenus.value.push(key)
  } else {
    expandedMobileMenus.value.splice(index, 1)
  }
}

const isMobileSubmenuExpanded = (key) => {
  return expandedMobileMenus.value.includes(key)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out"
    :class="[
      isScrolled
        ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-black/5'
        : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="/" class="flex items-center group">
            <img
              src="/images/logos/logo-web-noir-petit.png"
              alt="Université Senghor"
              class="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              :class="{ 'brightness-0 invert': !isScrolled }"
            />
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-1">
          <div
            v-for="item in navItems"
            :key="item.key"
            class="relative"
            @mouseenter="item.hasDropdown ? openDropdown(item.key) : null"
            @mouseleave="closeDropdown"
          >
            <!-- Menu Item -->
            <a
              :href="item.route"
              class="relative flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full group"
              :class="[
                isScrolled
                  ? 'text-gray-700 hover:text-amber-600'
                  : 'text-white/90 hover:text-white'
              ]"
            >
              <span class="relative z-10">{{ t(`nav.${item.key}`) }}</span>
              <font-awesome-icon
                v-if="item.hasDropdown"
                icon="fa-solid fa-chevron-down"
                class="w-3 h-3 transition-transform duration-300"
                :class="{ 'rotate-180': activeDropdown === item.key }"
              />
              <span
                class="absolute inset-0 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                :class="[
                  isScrolled
                    ? 'bg-amber-50'
                    : 'bg-white/10'
                ]"
              ></span>
            </a>

            <!-- Dropdown Menu -->
            <Transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 translate-y-2 scale-95"
              enter-to-class="opacity-100 translate-y-0 scale-100"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 translate-y-0 scale-100"
              leave-to-class="opacity-0 translate-y-2 scale-95"
            >
              <div
                v-if="item.hasDropdown && activeDropdown === item.key"
                class="absolute top-full left-0 pt-2"
              >
                <div class="bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 overflow-hidden min-w-[280px]">
                  <!-- Dropdown Header -->
                  <div class="px-5 py-4 bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100/50">
                    <h3 class="text-sm font-semibold text-gray-900">{{ t(`nav.${item.key}`) }}</h3>
                    <p class="text-xs text-gray-500 mt-0.5">{{ t(`nav.dropdowns.${item.key}.description`) }}</p>
                  </div>

                  <!-- Dropdown Items -->
                  <div class="p-2">
                    <a
                      v-for="(child, index) in item.children"
                      :key="child.key"
                      :href="child.route"
                      class="group flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50"
                      :style="{ animationDelay: `${index * 50}ms` }"
                    >
                      <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center group-hover:from-amber-200 group-hover:to-orange-200 transition-all duration-200 group-hover:scale-110">
                        <font-awesome-icon
                          :icon="child.icon"
                          class="text-amber-600 group-hover:text-amber-700"
                        />
                      </div>
                      <div class="flex-1">
                        <span class="block text-sm font-medium text-gray-900 group-hover:text-amber-700 transition-colors">
                          {{ t(`nav.dropdowns.${item.key}.${child.key}`) }}
                        </span>
                      </div>
                      <font-awesome-icon
                        icon="fa-solid fa-arrow-right"
                        class="w-4 h-4 text-gray-300 group-hover:text-amber-500 transition-all duration-200 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                      />
                    </a>
                  </div>

                  <!-- View All Link -->
                  <div class="px-4 py-3 bg-gray-50 border-t border-gray-100">
                    <a
                      :href="item.route"
                      class="flex items-center justify-center gap-2 text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors"
                    >
                      <span>{{ t('nav.viewAll') }}</span>
                      <font-awesome-icon icon="fa-solid fa-arrow-right" class="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>

        <!-- Right Section -->
        <div class="hidden lg:flex items-center space-x-4">
          <!-- Language Toggle -->
          <button
            @click="toggleLanguage"
            class="flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-full transition-all duration-300"
            :class="[
              isScrolled
                ? 'text-gray-600 hover:bg-gray-100'
                : 'text-white/80 hover:bg-white/10'
            ]"
          >
            <font-awesome-icon icon="fa-solid fa-globe" class="w-4 h-4" />
            <span>{{ locale.toUpperCase() }}</span>
          </button>

          <!-- CTA Button -->
          <a
            href="/inscription"
            class="relative overflow-hidden px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 group"
            :class="[
              isScrolled
                ? 'bg-amber-500 text-white hover:bg-amber-600 shadow-lg shadow-amber-500/25'
                : 'bg-white text-gray-900 hover:bg-amber-400 hover:text-white'
            ]"
          >
            <span class="relative z-10">{{ t('nav.apply') }}</span>
            <span class="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="lg:hidden p-2 rounded-lg transition-colors duration-300"
          :class="[
            isScrolled
              ? 'text-gray-700 hover:bg-gray-100'
              : 'text-white hover:bg-white/10'
          ]"
        >
          <font-awesome-icon v-if="!isMobileMenuOpen" icon="fa-solid fa-bars" class="w-6 h-6" />
          <font-awesome-icon v-else icon="fa-solid fa-xmark" class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
    >
      <div
        v-if="isMobileMenuOpen"
        class="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 max-h-[80vh] overflow-y-auto"
      >
        <div class="px-4 py-6 space-y-2">
          <template v-for="item in navItems" :key="item.key">
            <!-- Menu Item without Dropdown -->
            <a
              v-if="!item.hasDropdown"
              :href="item.route"
              class="flex items-center px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-amber-50 hover:text-amber-600 transition-all duration-200"
            >
              {{ t(`nav.${item.key}`) }}
            </a>

            <!-- Menu Item with Dropdown -->
            <div v-else>
              <button
                @click="toggleMobileSubmenu(item.key)"
                class="flex items-center justify-between w-full px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-amber-50 hover:text-amber-600 transition-all duration-200"
              >
                <span>{{ t(`nav.${item.key}`) }}</span>
                <font-awesome-icon
                  icon="fa-solid fa-chevron-down"
                  class="w-4 h-4 transition-transform duration-300"
                  :class="{ 'rotate-180': isMobileSubmenuExpanded(item.key) }"
                />
              </button>

              <!-- Mobile Submenu -->
              <Transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-96"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 max-h-96"
                leave-to-class="opacity-0 max-h-0"
              >
                <div
                  v-if="isMobileSubmenuExpanded(item.key)"
                  class="overflow-hidden"
                >
                  <div class="pl-4 pr-2 py-2 space-y-1">
                    <a
                      v-for="child in item.children"
                      :key="child.key"
                      :href="child.route"
                      class="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 hover:text-amber-700 transition-all duration-200"
                    >
                      <div class="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                        <font-awesome-icon :icon="child.icon" class="text-amber-600 text-sm" />
                      </div>
                      <span class="text-sm font-medium">{{ t(`nav.dropdowns.${item.key}.${child.key}`) }}</span>
                    </a>
                  </div>
                </div>
              </Transition>
            </div>
          </template>

          <!-- Language Toggle Mobile -->
          <div class="pt-4 mt-4 border-t border-gray-100">
            <button
              @click="toggleLanguage"
              class="flex items-center justify-center gap-2 w-full px-4 py-3 text-gray-600 font-medium rounded-xl hover:bg-gray-50 transition-all duration-200"
            >
              <font-awesome-icon icon="fa-solid fa-globe" class="w-4 h-4" />
              <span>{{ locale === 'fr' ? 'Français' : 'English' }}</span>
            </button>
          </div>

          <!-- CTA Button Mobile -->
          <div class="pt-2">
            <a
              href="/inscription"
              class="flex items-center justify-center gap-2 w-full px-4 py-3 text-center bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-200 shadow-lg shadow-amber-500/25"
            >
              <font-awesome-icon icon="fa-solid fa-paper-plane" />
              <span>{{ t('nav.apply') }}</span>
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>
