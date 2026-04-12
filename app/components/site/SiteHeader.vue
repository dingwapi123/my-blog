<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue'
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
        to="/"
        class="site-nav-link"
      >
        首页
      </NuxtLink>
      <NuxtLink
        to="/blog"
        class="site-nav-link"
      >
        博客
      </NuxtLink>
      <NuxtLink
        to="/tags"
        class="site-nav-link"
      >
        标签
      </NuxtLink>
      <NuxtLink
        to="/about"
        class="site-nav-link"
      >
        关于
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
          to="/"
          class="site-nav-mobile-link"
        >
          首页
        </NuxtLink>
        <NuxtLink
          to="/blog"
          class="site-nav-mobile-link"
        >
          博客
        </NuxtLink>
        <NuxtLink
          to="/tags"
          class="site-nav-mobile-link"
        >
          标签
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="site-nav-mobile-link"
        >
          关于
        </NuxtLink>
      </nav>
    </template>
  </UHeader>
</template>
