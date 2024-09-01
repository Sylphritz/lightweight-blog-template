<template>
  <img :src loading="lazy" :alt :role="alt ? 'img' : 'none'" />
</template>

<script lang="ts" setup>
interface CommonImageBlockProps {
  src: string
  alt?: string
}

defineProps<CommonImageBlockProps>()
</script>

<style></style>
