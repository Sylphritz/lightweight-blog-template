<template>
  <li
    class="font-medium text-secondary-dark dark:text-secondary-light hover:text-primary"
    @click="item.onClick"
  >
    <NuxtLink class="block" :to="item.value || '#'">{{ item.label }}</NuxtLink>
  </li>
</template>

<script lang="ts" setup>
import type { NavigationItem } from '~/common/types/navigation.types'

interface FooterNavigationItem {
  item: NavigationItem
}

defineProps<FooterNavigationItem>()
</script>
