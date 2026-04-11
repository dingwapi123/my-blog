<template>
  <UHeader class="site-header">
    <div class="site-header-inner">
      <NuxtLink
        to="/"
        class="site-brand"
      >
        辰心的博客
      </NuxtLink>

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

      <ThemeToggle />
    </div>
  </UHeader>
</template>
