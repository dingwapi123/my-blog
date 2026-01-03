<script setup lang="ts">
/**
 * 设置全局 Head 与 SEO 元信息
 */
useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: { lang: 'zh-CN' }
})

/**
 * 站点标题与描述
 */
const siteTitle = 'Chen · Blog'
const siteDescription = '以设计为核心的个人博客'

/**
 * 全局 SEO
 */
useSeoMeta({
  title: siteTitle,
  description: siteDescription,
  ogTitle: siteTitle,
  ogDescription: siteDescription,
  twitterCard: 'summary'
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
