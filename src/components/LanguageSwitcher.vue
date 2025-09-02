<template>
  <div class="language-switcher">
    <select 
      v-model="currentLocale" 
      @change="changeLocale" 
      class="px-3 py-1 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
    >
      <option value="fr">Français</option>
      <option value="en">English</option>
    </select>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { setLocale } from '@/i18n'

const { locale } = useI18n()

const currentLocale = computed({
  get: () => locale.value,
  set: (value) => {
    locale.value = value
  }
})

const changeLocale = () => {
  setLocale(currentLocale.value)
}
</script>