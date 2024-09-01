<template>
  <ul
    v-show="show"
    class="flex flex-col items-stretch w-max bg-white dark:bg-primary-dark shadow-md border-neutral-50 dark:border-neutral-800 border"
  >
    <CommonDropdownItem v-for="item in items" :key="item.value" :item />
  </ul>
</template>

<script lang="ts" setup>
import type { DropDownItem } from '~/common/types/dropdown.types'

interface CommonDropdownContainerProps {
  items: DropDownItem[]
  show?: boolean
}

defineProps<CommonDropdownContainerProps>()
</script>
