<template>
  <UHeader>
    <template #left>
      <NuxtLink
        to="/"
        class="text-base font-semibold tracking-wide"
      >
        辰心的博客
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-1">
        <UButton
          to="/"
          color="neutral"
          variant="ghost"
          label="首页"
        />
        <UButton
          to="/blog"
          color="neutral"
          variant="ghost"
          label="博客"
        />
        <UButton
          to="/tags"
          color="neutral"
          variant="ghost"
          label="标签"
        />
        <UButton
          to="/about"
          color="neutral"
          variant="ghost"
          label="关于"
        />
      </nav>
    </template>

    <template #right>
      <ThemeToggle />
    </template>
  </UHeader>
</template>
