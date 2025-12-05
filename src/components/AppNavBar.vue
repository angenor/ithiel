<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSimpleDarkMode } from '@/composables/useSimpleDarkMode'
import SearchModal from '@/components/SearchModal.vue'

const { t, locale } = useI18n()
const { isDark, toggle: toggleDarkMode } = useSimpleDarkMode()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeDropdown = ref(null)
const expandedMobileMenus = ref([])

// Menus prioritaires (affichés en premier avec style accentué)
const primaryNavItems = [
  {
    key: 'training',
    route: '/formations',
    hasDropdown: true,
    megaMenu: true,
    icon: 'fa-solid fa-graduation-cap',
    accent: true,
    featured: {
      image: '/images/bg/backgroud_senghor2.jpg',
      titleKey: 'featured',
      descKey: 'featuredDesc'
    },
    children: [
      { key: 'masters', route: '/formations/masters', icon: 'fa-solid fa-graduation-cap', badge: 'popular' },
      { key: 'universityDiplomas', route: '/formations/diplomes-universite', icon: 'fa-solid fa-award' },
      { key: 'certifications', route: '/formations/certifiantes', icon: 'fa-solid fa-certificate' },
      { key: 'doctorate', route: '/formations/doctorat', icon: 'fa-solid fa-book-open' },
      { key: 'online', route: '/formations/en-ligne', icon: 'fa-solid fa-laptop', badge: 'new' },
      { key: 'externalCampus', route: '/formations/campus-externalises', icon: 'fa-solid fa-building' }
    ]
  },
  {
    key: 'news',
    route: '/actualites',
    hasDropdown: true,
    megaMenu: true,
    icon: 'fa-solid fa-newspaper',
    accent: true,
    featured: {
      image: '/images/bg/backgroud_senghor1.jpg',
      titleKey: 'featured',
      descKey: 'featuredDesc'
    },
    children: [
      { key: 'callsForApplications', route: '/actualites/appels', icon: 'fa-solid fa-bullhorn' },
      { key: 'jobOffers', route: '/actualites/emplois', icon: 'fa-solid fa-briefcase' },
      { key: 'events', route: '/actualites/evenements', icon: 'fa-solid fa-calendar-days' }
    ]
  }
]

// Menus secondaires (regroupés dans un dropdown "Plus")
const secondaryNavItems = [
  {
    key: 'projects',
    route: '/projets',
    icon: 'fa-solid fa-rocket',
    children: [
      { key: 'transformAction', route: '/projets/transformaction', icon: 'fa-solid fa-rocket', badge: 'flagship' },
      { key: 'kreAfrika', route: '/projets/kreafrika', icon: 'fa-solid fa-lightbulb' },
      { key: 'projet70', route: '/projets/annees-70', icon: 'fa-solid fa-clock-rotate-left' },
      { key: 'projetUSenghor', route: '/projets/usenghor', icon: 'fa-solid fa-university' }
    ]
  },
  {
    key: 'network',
    route: '/reseau',
    icon: 'fa-solid fa-users',
    children: [
      { key: 'strategicPartners', route: '/reseau/partenaires-strategiques', icon: 'fa-solid fa-handshake' },
      { key: 'campusPartners', route: '/reseau/partenaires-campus', icon: 'fa-solid fa-building-columns' },
      { key: 'teachersNetwork', route: '/reseau/enseignants', icon: 'fa-solid fa-chalkboard-user' },
      { key: 'alumni', route: '/reseau/alumni', icon: 'fa-solid fa-user-graduate', badge: '5000+' },
      { key: 'alumniProgram', route: '/reseau/programme-alumni', icon: 'fa-solid fa-users' }
    ]
  },
  {
    key: 'about',
    route: '/a-propos',
    icon: 'fa-solid fa-info-circle',
    children: [
      { key: 'mission', route: '/a-propos/mission', icon: 'fa-solid fa-bullseye' },
      { key: 'history', route: '/a-propos/historique', icon: 'fa-solid fa-landmark' },
      { key: 'governance', route: '/a-propos/gouvernance', icon: 'fa-solid fa-sitemap' },
      { key: 'campus', route: '/a-propos/campus', icon: 'fa-solid fa-map-location-dot' }
    ]
  }
]

// Pour compatibilité avec le menu mobile
const navItems = [
  { key: 'home', route: '/', hasDropdown: false },
  ...primaryNavItems,
  ...secondaryNavItems.map(item => ({ ...item, hasDropdown: true, megaMenu: false }))
]

const isMoreMenuOpen = ref(false)
const isSearchOpen = ref(false)

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value
}

const closeSearch = () => {
  isSearchOpen.value = false
}

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
        ? 'bg-white/98 dark:bg-gray-900/98 backdrop-blur-xl shadow-xl shadow-black/5 dark:shadow-black/20 border-b border-gray-100 dark:border-gray-800'
        : 'bg-gradient-to-b from-black/50 to-transparent'
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
              class="h-12 w-auto transition-all duration-300 group-hover:scale-105"
              :class="{ 'brightness-0 invert': !isScrolled || isDark }"
            />
          </a>
        </div>

        <!-- Desktop Navigation - New Design -->
        <div class="hidden lg:flex items-center gap-2">
          <!-- Logo Home Link -->
          <a
            href="/"
            class="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 mr-2"
            :class="[
              isScrolled
                ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                : 'text-white/90 hover:bg-white/10'
            ]"
          >
            <font-awesome-icon icon="fa-solid fa-house" class="w-4 h-4" />
          </a>

          <!-- Primary Nav Items (Accentués) -->
          <div
            v-for="item in primaryNavItems"
            :key="item.key"
            class="relative"
            @mouseenter="openDropdown(item.key)"
            @mouseleave="closeDropdown"
          >
            <a
              href="#"
              @click.prevent
              class="group relative flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300"
              :class="[
                isScrolled
                  ? activeDropdown === item.key
                    ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/25'
                    : 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 hover:bg-amber-500 hover:text-white hover:shadow-lg hover:shadow-amber-500/25'
                  : activeDropdown === item.key
                    ? 'bg-white text-gray-900 shadow-lg'
                    : 'bg-white/15 text-white backdrop-blur-sm hover:bg-white hover:text-gray-900'
              ]"
            >
              <font-awesome-icon :icon="item.icon" class="w-4 h-4" />
              <span>{{ t(`nav.${item.key}`) }}</span>
              <font-awesome-icon
                icon="fa-solid fa-chevron-down"
                class="w-3 h-3 transition-transform duration-300 opacity-60"
                :class="{ 'rotate-180': activeDropdown === item.key }"
              />
            </a>

            <!-- Mega Menu Dropdown -->
            <Transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="opacity-0 -translate-y-4"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-4"
            >
              <div
                v-if="activeDropdown === item.key"
                class="absolute top-full left-1/2 -translate-x-1/2 pt-4"
              >
                <div class="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl shadow-black/15 dark:shadow-black/40 border border-gray-100 dark:border-gray-800 overflow-hidden w-[700px]">
                  <div class="flex">
                    <!-- Featured Section -->
                    <div class="w-64 relative overflow-hidden">
                      <img
                        :src="item.featured.image"
                        :alt="t(`nav.${item.key}`)"
                        class="absolute inset-0 w-full h-full object-cover"
                      />
                      <div class="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/85 to-gray-900/90"></div>
                      <div class="relative p-6 h-full flex flex-col justify-end min-h-[320px]">
                        <div class="mb-4">
                          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-white backdrop-blur-sm border border-white/10">
                            <font-awesome-icon icon="fa-solid fa-star" class="w-3 h-3 mr-1.5 text-amber-400" />
                            {{ t(`nav.dropdowns.${item.key}.${item.featured.titleKey}`) }}
                          </span>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-2">{{ t(`nav.${item.key}`) }}</h3>
                        <p class="text-white/70 text-sm leading-relaxed mb-4">{{ t(`nav.dropdowns.${item.key}.${item.featured.descKey}`) }}</p>
                        <a
                          :href="item.route"
                          class="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 hover:gap-3 transition-all duration-300"
                        >
                          <span>{{ t('nav.exploreAll') }}</span>
                          <font-awesome-icon icon="fa-solid fa-arrow-right" class="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    <!-- Menu Items -->
                    <div class="flex-1 p-4">
                      <div class="grid grid-cols-2 gap-1">
                        <a
                          v-for="child in item.children"
                          :key="child.key"
                          :href="child.route"
                          class="group flex items-start gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center transition-all duration-300 group-hover:bg-amber-50 dark:group-hover:bg-amber-900/30">
                            <font-awesome-icon :icon="child.icon" class="text-gray-400 dark:text-gray-500 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors" />
                          </div>
                          <div class="flex-1 min-w-0 pt-0.5">
                            <div class="flex items-center gap-2">
                              <span class="block text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                {{ t(`nav.dropdowns.${item.key}.${child.key}`) }}
                              </span>
                              <span
                                v-if="child.badge"
                                class="px-1.5 py-0.5 text-[9px] font-semibold uppercase rounded"
                                :class="child.badge === 'new' ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' : child.badge === 'popular' ? 'bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'"
                              >
                                {{ child.badge === 'new' ? t('nav.badges.new') : child.badge === 'popular' ? t('nav.badges.popular') : child.badge }}
                              </span>
                            </div>
                            <span class="block text-xs text-gray-400 dark:text-gray-500 mt-0.5 line-clamp-1 group-hover:text-gray-500 dark:group-hover:text-gray-400 transition-colors">
                              {{ t(`nav.dropdowns.${item.key}.${child.key}Desc`) }}
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>

          <!-- Separator -->
          <div class="h-6 w-px mx-2" :class="isScrolled ? 'bg-gray-200 dark:bg-gray-700' : 'bg-white/20'"></div>

          <!-- More Menu (Secondary Items) -->
          <div
            class="relative"
            @mouseenter="isMoreMenuOpen = true"
            @mouseleave="isMoreMenuOpen = false"
          >
            <button
              class="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-xl transition-all duration-300"
              :class="[
                isScrolled
                  ? isMoreMenuOpen
                    ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  : isMoreMenuOpen
                    ? 'bg-white/20 text-white'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
              ]"
            >
              <font-awesome-icon icon="fa-solid fa-ellipsis" class="w-4 h-4" />
              <span>{{ t('nav.more') }}</span>
              <font-awesome-icon
                icon="fa-solid fa-chevron-down"
                class="w-3 h-3 transition-transform duration-300 opacity-60"
                :class="{ 'rotate-180': isMoreMenuOpen }"
              />
            </button>

            <!-- More Menu Dropdown -->
            <Transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="opacity-0 -translate-y-4"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-4"
            >
              <div
                v-if="isMoreMenuOpen"
                class="absolute top-full right-0 pt-4"
              >
                <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl shadow-black/15 dark:shadow-black/40 border border-gray-100 dark:border-gray-800 overflow-hidden w-[420px] p-3">
                  <!-- Categories Grid -->
                  <div class="grid grid-cols-1 gap-2">
                    <div
                      v-for="section in secondaryNavItems"
                      :key="section.key"
                      class="p-3 rounded-xl bg-gray-50/50 dark:bg-gray-800/50"
                    >
                      <a
                        :href="section.route"
                        class="flex items-center gap-2 mb-3 text-sm font-semibold text-gray-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                      >
                        <font-awesome-icon :icon="section.icon" class="w-4 h-4 text-amber-500" />
                        {{ t(`nav.${section.key}`) }}
                        <font-awesome-icon icon="fa-solid fa-arrow-right" class="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100" />
                      </a>
                      <div class="grid grid-cols-2 gap-1">
                        <a
                          v-for="child in section.children"
                          :key="child.key"
                          :href="child.route"
                          class="group flex items-center gap-2 px-2 py-1.5 text-xs text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-200"
                        >
                          <font-awesome-icon :icon="child.icon" class="w-3 h-3 opacity-50 group-hover:opacity-100" />
                          <span>{{ t(`nav.dropdowns.${section.key}.${child.key}`) }}</span>
                          <span
                            v-if="child.badge"
                            class="ml-auto px-1 py-0.5 text-[8px] font-semibold uppercase rounded bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-300"
                          >
                            {{ child.badge === 'flagship' ? t('nav.badges.flagship') : child.badge }}
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>

        <!-- Right Section -->
        <div class="hidden lg:flex items-center gap-2">
          <!-- Search Button -->
          <button
            @click="toggleSearch"
            class="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300"
            :class="[
              isScrolled
                ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                : 'text-white/90 hover:bg-white/10'
            ]"
          >
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="w-4 h-4" />
          </button>

          <!-- Dark Mode Toggle -->
          <button
            @click="toggleDarkMode"
            class="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300"
            :class="[
              isScrolled
                ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                : 'text-white/90 hover:bg-white/10'
            ]"
          >
            <font-awesome-icon v-if="isDark" icon="fa-solid fa-sun" class="w-4 h-4" />
            <font-awesome-icon v-else icon="fa-solid fa-moon" class="w-4 h-4" />
          </button>

          <!-- Language Toggle -->
          <button
            @click="toggleLanguage"
            class="flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-xl transition-all duration-300"
            :class="[
              isScrolled
                ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                : 'text-white/90 hover:bg-white/10'
            ]"
          >
            <font-awesome-icon icon="fa-solid fa-globe" class="w-4 h-4" />
            <span>{{ locale.toUpperCase() }}</span>
          </button>

          <!-- CTA Button -->
          <a
            href="/inscription"
            class="group relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl overflow-hidden transition-all duration-300 ml-2"
            :class="[
              isScrolled
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5'
                : 'bg-white text-gray-900 hover:bg-gray-100 shadow-lg'
            ]"
          >
            <font-awesome-icon icon="fa-solid fa-paper-plane" class="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            <span>{{ t('nav.apply') }}</span>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="lg:hidden p-2.5 rounded-xl transition-all duration-300"
          :class="[
            isScrolled
              ? 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
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
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMobileMenuOpen"
        class="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-2xl border-t border-gray-100 dark:border-gray-800 max-h-[85vh] overflow-y-auto"
      >
        <div class="px-4 py-6 space-y-1">
          <template v-for="item in navItems" :key="item.key">
            <!-- Menu Item without Dropdown -->
            <a
              v-if="!item.hasDropdown"
              :href="item.route"
              class="flex items-center px-4 py-3.5 text-gray-700 dark:text-gray-200 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-all duration-200"
            >
              {{ t(`nav.${item.key}`) }}
            </a>

            <!-- Menu Item with Dropdown -->
            <div v-else class="rounded-xl overflow-hidden">
              <button
                @click="toggleMobileSubmenu(item.key)"
                class="flex items-center justify-between w-full px-4 py-3.5 text-gray-700 dark:text-gray-200 font-medium transition-all duration-200"
                :class="isMobileSubmenuExpanded(item.key) ? 'bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white' : 'hover:bg-gray-50 dark:hover:bg-gray-800'"
              >
                <span>{{ t(`nav.${item.key}`) }}</span>
                <font-awesome-icon
                  icon="fa-solid fa-chevron-down"
                  class="w-4 h-4 text-gray-400 dark:text-gray-500 transition-transform duration-300"
                  :class="{ 'rotate-180': isMobileSubmenuExpanded(item.key) }"
                />
              </button>

              <!-- Mobile Submenu -->
              <Transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-[500px]"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 max-h-[500px]"
                leave-to-class="opacity-0 max-h-0"
              >
                <div
                  v-if="isMobileSubmenuExpanded(item.key)"
                  class="overflow-hidden"
                >
                  <div class="p-2 space-y-0.5 bg-gray-50/50 dark:bg-gray-800/50">
                    <a
                      v-for="child in item.children"
                      :key="child.key"
                      :href="child.route"
                      class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-all duration-200"
                    >
                      <div class="w-8 h-8 rounded-md bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                        <font-awesome-icon :icon="child.icon" class="text-gray-400 dark:text-gray-500 text-sm" />
                      </div>
                      <div class="flex-1">
                        <span class="text-sm font-medium">{{ t(`nav.dropdowns.${item.key}.${child.key}`) }}</span>
                      </div>
                      <span
                        v-if="child.badge"
                        class="px-1.5 py-0.5 text-[9px] font-semibold uppercase rounded bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                      >
                        {{ child.badge === 'new' ? t('nav.badges.new') : child.badge === 'popular' ? t('nav.badges.popular') : child.badge === 'flagship' ? t('nav.badges.flagship') : child.badge }}
                      </span>
                    </a>
                  </div>
                </div>
              </Transition>
            </div>
          </template>

          <!-- Divider -->
          <div class="my-4 border-t border-gray-100 dark:border-gray-800"></div>

          <!-- Dark Mode Toggle Mobile -->
          <button
            @click="toggleDarkMode"
            class="flex items-center justify-center gap-3 w-full px-4 py-3 text-gray-600 dark:text-gray-300 font-medium rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
          >
            <font-awesome-icon v-if="isDark" icon="fa-solid fa-sun" class="w-4 h-4 text-amber-400" />
            <font-awesome-icon v-else icon="fa-solid fa-moon" class="w-4 h-4 text-gray-400" />
            <span>{{ isDark ? 'Light Mode' : 'Dark Mode' }}</span>
          </button>

          <!-- Language Toggle Mobile -->
          <button
            @click="toggleLanguage"
            class="flex items-center justify-center gap-3 w-full px-4 py-3 mt-2 text-gray-600 dark:text-gray-300 font-medium rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
          >
            <font-awesome-icon icon="fa-solid fa-globe" class="w-4 h-4 text-gray-400 dark:text-gray-500" />
            <span>{{ locale === 'fr' ? 'Français' : 'English' }}</span>
          </button>

          <!-- CTA Button Mobile -->
          <a
            href="/inscription"
            class="flex items-center justify-center gap-2 w-full px-4 py-4 mt-3 text-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            <font-awesome-icon icon="fa-solid fa-paper-plane" class="text-gray-400 dark:text-gray-500" />
            <span>{{ t('nav.apply') }}</span>
          </a>
        </div>
      </div>
    </Transition>

    <!-- Search Modal Component -->
    <SearchModal :is-open="isSearchOpen" @close="closeSearch" />
  </nav>
</template>
