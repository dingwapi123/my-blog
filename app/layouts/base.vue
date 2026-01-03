<template>
  <div>
    <UHeader class="backdrop-blur bg-background/70 border-b">
      <template #left>
        <NuxtLink
          to="/"
          class="font-bold text-lg"
        >
          Chen · Blog
        </NuxtLink>
        <nav class="ml-6 hidden md:flex gap-5 text-sm">
          <NuxtLink to="/">首页</NuxtLink>
          <NuxtLink to="/blog">文章</NuxtLink>
          <NuxtLink to="/works">作品</NuxtLink>
          <NuxtLink to="/about">关于</NuxtLink>
        </nav>
      </template>
      <template #right>
        <UColorModeButton />
        <UButton
          to="https://github.com/"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UHeader>

    <UMain>
      <slot />
    </UMain>

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          © {{ new Date().getFullYear() }} Chen · Blog
        </p>
      </template>
      <template #right>
        <UButton
          to="https://github.com/"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </div>
</template>
