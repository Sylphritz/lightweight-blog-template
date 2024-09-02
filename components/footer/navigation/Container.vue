<template>
  <nav>
    <ul
      class="flex flex-col items-center md:flex-row md:justify-center gap-2 md:gap-6"
    >
      <FooterNavigationItem v-for="item in items" :item :key="item.value" />
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import type { NavigationItem } from '~/common/types/navigation.types'

interface FooterNavigationContainerProps {
  items: NavigationItem[]
}

defineProps<FooterNavigationContainerProps>()
</script>
