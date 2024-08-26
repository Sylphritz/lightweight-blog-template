<template>
  <nav class="px-4 lg:px-6">
    <HeaderNavigationContainer>
      <HeaderNavigationItem to="/">Home</HeaderNavigationItem>
      <HeaderNavigationItem to="/" :items="['a', 'b']"
        >Categories</HeaderNavigationItem
      >
      <HeaderNavigationItem>About</HeaderNavigationItem>
      <HeaderNavigationItem>Contact</HeaderNavigationItem>
      <HeaderNavigationItem>Privacy Policy</HeaderNavigationItem>
    </HeaderNavigationContainer>
  </nav>
</template>

<script lang="ts" setup></script>

<style></style>
