<template>
  <nav class="px-4 lg:px-6">
    <HeaderNavigationContainer>
      <HeaderNavigationItem
        v-for="link in links"
        :to="link.value"
        :items="link.items"
        :key="link.value"
        >{{ link.label }}</HeaderNavigationItem
      >
    </HeaderNavigationContainer>
  </nav>
</template>

<script lang="ts" setup>
import type { DropDownItem } from '~/common/types/dropdown.types'

const links: DropDownItem[] = [
  { label: 'Home', value: '/' },
  {
    label: 'Categories',
    value: '/',
    items: [
      {
        label: 'About 2',
        value: '/',
        items: [
          { label: 'About 3', value: '/' },
          { label: 'Contact 3', value: '/' },
          { label: 'Privacy Policy 3', value: '/' },
        ],
      },
      { label: 'Contact 2', value: '/' },
      {
        label: 'About 3',
        value: '/',
        items: [
          { label: 'About 4', value: '/' },
          { label: 'Contact 4', value: '/' },
          {
            label: 'Privacy Policy 3',
            value: '/',
            items: [
              { label: 'About 3', value: '/' },
              { label: 'Contact 3', value: '/' },
              { label: 'Privacy Policy 3', value: '/' },
            ],
          },
        ],
      },
      { label: 'Privacy Policy 2', value: '/' },
    ],
  },
  { label: 'About', value: '/' },
  { label: 'Contact', value: '/' },
  { label: 'Privacy Policy', value: '/' },
]
</script>
