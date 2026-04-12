<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue'

const navItems = useNavigation()
</script>

<template>
  <UHeader class="site-header">
    <template #left>
      <NuxtLink
        to="/"
        class="site-brand"
      >
        辰心的博客
      </NuxtLink>
    </template>

    <nav class="site-nav">
      <NuxtLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        class="site-nav-link"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>

    <template #right>
      <div class="site-header-actions">
        <ThemeToggle />
      </div>
    </template>

    <template #body>
      <nav class="site-nav-mobile">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="site-nav-mobile-link"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>
    </template>
  </UHeader>
</template>
