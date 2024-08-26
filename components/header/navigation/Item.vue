<template>
  <li class="cursor-pointer hover:text-primary">
    <NuxtLink
      class="flex items-center gap-0.5 px-2"
      :class="{ 'pr-0': items?.length }"
      :to
    >
      <slot />
      <Icon v-if="items?.length" name="mdi:caret-down" size="1.5em" />
    </NuxtLink>
  </li>
</template>

<script lang="ts" setup>
interface HeaderNavigationItemProps {
  to?: string
  items?: string[]
}

defineProps<HeaderNavigationItemProps>()
</script>
