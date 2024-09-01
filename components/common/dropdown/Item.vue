<template>
  <li
    class="relative flex py-2 px-4 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800"
    :class="{ 'pr-2': item.items?.length }"
    @mouseover="active = true"
    @mouseleave="active = false"
  >
    <component
      :is="item.value ? 'a' : 'button'"
      class="block flex-1"
      :to="item.value"
      @click="item.onClick"
    >
      {{ item.label }}
    </component>
    <Icon
      class="flex-none"
      v-if="item.items?.length"
      name="mdi:menu-right"
      size="1.5em"
    />
    <CommonDropdownContainer
      v-if="item.items?.length"
      :show="active"
      class="absolute left-full top-0"
      :items="item.items"
    />
  </li>
</template>

<script lang="ts" setup>
import type { DropDownItem } from '~/common/types/dropdown.types'

defineProps<{
  item: DropDownItem
}>()

const active = ref(false)
</script>
