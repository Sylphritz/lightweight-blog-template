<template>
  <li
    class="relative cursor-pointer"
    @mouseover="active = true"
    @mouseleave="active = false"
  >
    <NuxtLink
      class="flex items-center gap-0.5 p-2 hover:text-primary"
      :class="{ 'pr-0': items?.length }"
      :to
    >
      <slot />
      <Icon v-if="items?.length" name="mdi:caret-down" size="1.5em" />
    </NuxtLink>

    <CommonDropdownContainer
      v-if="items?.length"
      :show="active"
      class="absolute top-full left-0"
      :items="items"
    />
  </li>
</template>

<script lang="ts" setup>
import type { DropDownItem } from '~/common/types/dropdown.types'

interface HeaderNavigationItemProps {
  to?: string
  items?: DropDownItem[]
}

defineProps<HeaderNavigationItemProps>()

const active = ref(false)
</script>
