<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'zh-CN'
  }
})

const title = '辰心的个人博客'
const description = '记录前端开发、Nuxt 实践与个人思考。'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogSiteName: title,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <SiteHeader />

    <UMain>
      <NuxtPage />
    </UMain>

    <SiteFooter />
  </UApp>
</template>
