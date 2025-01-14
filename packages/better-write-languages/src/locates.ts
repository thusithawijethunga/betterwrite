import { LanguageRaw } from 'better-write-types'

export const VueI18nLocales = [
  {
    name: 'Português',
    code: 'br',
    iso: 'pt-BR',
  },
  {
    name: 'English',
    code: 'en',
    iso: 'en-US',
  },
]

export const VueI18nAllISO = ['en-US', 'pt-BR']

export const VueI18nSEO = [
  {
    property: 'og:locale',
    content: 'en_US',
    key: 'en',
  },
  {
    property: 'og:locale:alternate',
    content: 'pt_BR',
    key: 'br',
  },
]

export const LanguagesRaw: LanguageRaw[] = ['Português do Brasil', 'English']
