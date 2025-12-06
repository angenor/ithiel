import { createI18n } from 'vue-i18n'
import fr from '@/locales/fr.json'
import en from '@/locales/en.json'
import ar from '@/locales/ar.json'

function getDefaultLocale() {
  const savedLocale = localStorage.getItem('locale')
  if (savedLocale) {
    return savedLocale
  }

  const browserLocale = navigator.language.split('-')[0]
  const supportedLocales = ['fr', 'en', 'ar']

  return supportedLocales.includes(browserLocale) ? browserLocale : 'fr'
}

const i18n = createI18n({
  legacy: false,
  locale: getDefaultLocale(),
  fallbackLocale: 'fr',
  messages: {
    fr,
    en,
    ar
  }
})

export default i18n

export function setLocale(locale) {
  i18n.global.locale.value = locale
  localStorage.setItem('locale', locale)
  document.documentElement.lang = locale
  document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
}

// Initialize direction on load
const initialLocale = getDefaultLocale()
if (typeof document !== 'undefined') {
  document.documentElement.dir = initialLocale === 'ar' ? 'rtl' : 'ltr'
}