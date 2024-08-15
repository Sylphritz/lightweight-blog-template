import { defineStore } from 'pinia'
import { ThemeMode } from './types/darkMode.types'
import getUserPreferredMode from '~/utils/userPreferences/getUserPreferredMode'

export const useDarkModeStore = defineStore('darkModeStore', () => {
  const mode = ref<ThemeMode>(getUserPreferredMode())
  const isDarkMode = computed(() => mode.value === ThemeMode.DARK)

  const toggleMode = () =>
    (mode.value = isDarkMode.value ? ThemeMode.LIGHT : ThemeMode.DARK)

  return { mode, isDarkMode, toggleMode }
})
