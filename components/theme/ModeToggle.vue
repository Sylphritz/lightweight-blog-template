<template>
  <button class="inline-block" @click.prevent="toggleMode">
    <Icon :icon="modeIcon" />
  </button>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { ThemeMode } from '~/stores/types/darkMode.types'

const darkModeStore = useDarkModeStore()
const { toggleMode } = darkModeStore
const { mode } = storeToRefs(darkModeStore)

const modeIcon = computed(() =>
  mode.value === ThemeMode.DARK
    ? 'mdi:moon-waning-crescent'
    : 'mdi:white-balance-sunny'
)
</script>
