<template>
  <div
    class="flex flex-col items-stretch justify-stretch min-h-dvh bg-primary-light text-primary-dark dark:bg-primary-dark dark:text-primary-light"
    :class="{ dark: isDarkMode }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
const darkModeStore = useDarkModeStore()
const { isDarkMode } = storeToRefs(darkModeStore)
</script>
