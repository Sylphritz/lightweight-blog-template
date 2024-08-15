<template>
  <div
    class="flex flex-col items-stretch justify-stretch min-h-dvh dark:bg-black"
    :class="{ dark: isDarkMode }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
const darkModeStore = useDarkModeStore()
const { isDarkMode } = storeToRefs(darkModeStore)
</script>
