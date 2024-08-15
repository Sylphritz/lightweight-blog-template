import { ThemeMode } from '~/stores/types/darkMode.types'

export default (): ThemeMode =>
  window &&
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
    ? ThemeMode.DARK
    : ThemeMode.LIGHT
