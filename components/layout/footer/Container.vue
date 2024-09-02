<template>
  <LayoutFooterWrapper
    class="flex flex-col gap-4 bg-neutral-100 dark:bg-neutral-800 md:bg-transparent md:dark:bg-transparent"
  >
    <FooterNavigationContainer :items />
    <FooterCopyright />
  </LayoutFooterWrapper>
</template>

<script lang="ts" setup>
import type { NavigationItem } from '~/common/types/navigation.types'

const items = reactive<NavigationItem[]>([
  { label: 'Copyrights Notice', value: '/' },
  { label: 'Privacy Policy', value: '/' },
  { label: 'Contact', value: '/' },
  { label: 'About', value: '/' },
  { label: 'Terms of Services', value: '/' },
])
</script>
