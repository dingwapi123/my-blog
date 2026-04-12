<script setup lang="ts">
import { formatZhDate } from '~/utils/date'

const route = useRoute()
const slug = String(route.params.slug || '')

const { data: post } = await useAsyncData(`blog-post-${route.params.slug}`, async () => {
  const items = await queryCollection('posts')
    .where('draft', '=', false)
    .all()

  const current = items.find((item) => {
    const itemSlug = item.path.split('/').filter(Boolean).at(-1)
    return itemSlug === slug
  })

  if (!current) {
    throw createError({ statusCode: 404, statusMessage: '文章不存在' })
  }

  return current
})
</script>

<template>
  <UContainer class="article-page py-10 sm:py-14">
    <article
      v-if="post"
      class="article-wrap space-y-8"
    >
      <NuxtLink
        to="/blog"
        class="article-back"
      >
        <UIcon
          name="i-lucide-arrow-left"
          class="size-4"
        />
        返回文章列表
      </NuxtLink>

      <header class="article-header space-y-4">
        <p class="article-meta">
          发布于 {{ formatZhDate(post.date) }}
          <span v-if="post.updated">
            · 更新于 {{ formatZhDate(post.updated) }}
          </span>
        </p>
        <h1 class="article-title">
          {{ post.title }}
        </h1>
        <p class="article-description">
          {{ post.description }}
        </p>
        <div class="article-tags">
          <NuxtLink
            v-for="tag in post.tags || []"
            :key="`${post.id}-${tag}`"
            :to="`/tags/${encodeURIComponent(tag)}`"
          >
            <UBadge
              color="neutral"
              variant="subtle"
            >
              {{ tag }}
            </UBadge>
          </NuxtLink>
        </div>
      </header>

      <USeparator />

      <ContentRenderer
        :value="post"
        class="prose article-prose"
      />
    </article>
  </UContainer>
</template>
