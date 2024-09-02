<template>
  <div
    class="text-center text-xs md:text-sm text-secondary-dark dark:text-secondary-light opacity-80"
  >
    © {{ currentYear }}
    <span class="font-medium">{{ $config.public.siteName }}</span
    >. All rights reserved.
  </div>
</template>

<script lang="ts" setup>
const currentYear = new Date().getFullYear()
</script>
