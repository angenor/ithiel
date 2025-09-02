import { createI18n } from 'vue-i18n'
import fr from '@/locales/fr.json'
import en from '@/locales/en.json'

function getDefaultLocale() {
  const savedLocale = localStorage.getItem('locale')
  if (savedLocale) {
    return savedLocale
  }
  
  const browserLocale = navigator.language.split('-')[0]
  const supportedLocales = ['fr', 'en']
  
  return supportedLocales.includes(browserLocale) ? browserLocale : 'fr'
}

const i18n = createI18n({
  legacy: false,
  locale: getDefaultLocale(),
  fallbackLocale: 'fr',
  messages: {
    fr,
    en
  }
})

export default i18n

export function setLocale(locale) {
  i18n.global.locale.value = locale
  localStorage.setItem('locale', locale)
  document.documentElement.lang = locale
}