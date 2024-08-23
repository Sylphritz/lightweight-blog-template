<template>
  <ColorScheme>
    <button class="inline-block" @click="toggleColorMode">
      <Icon :name="modeIcon" mode="svg" />
    </button>
  </ColorScheme>
</template>

<script lang="ts" setup>
import { ColorMode } from '~/common/constants/colorMode'

const colorMode = useColorMode()

const toggleColorMode = () =>
  (colorMode.preference =
    colorMode.preference === ColorMode.DARK ? ColorMode.LIGHT : ColorMode.DARK)

const modeIcon = computed(() =>
  colorMode.preference === ColorMode.DARK
    ? 'mdi:moon-waning-crescent'
    : 'mdi:white-balance-sunny'
)
</script>
