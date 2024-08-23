<template>
  <LayoutHeaderContainer class="flex-none" />
  <LayoutHeroContainer class="flex-none" />
  <LayoutWrapperFullWidth class="flex-1">
    <LayoutWrapperContent class="flex gap-4 p-6">
      <LayoutContentContainer class="flex-1"><slot /></LayoutContentContainer>
      <LayoutSidebarContainer class="flex-none" />
    </LayoutWrapperContent>
  </LayoutWrapperFullWidth>
  <LayoutFooterContainer class="flex-none" />
</template>
