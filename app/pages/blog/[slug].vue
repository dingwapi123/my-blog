<script setup lang="ts">
const route = useRoute()
const slug = String(route.params.slug || '')

const formatDate = (value?: string) => {
  if (!value) {
    return ''
  }

  return new Intl.DateTimeFormat('zh-CN', { dateStyle: 'long' }).format(new Date(value))
}

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
  <UContainer class="py-10 sm:py-12">
    <article
      v-if="post"
      class="space-y-8"
    >
      <header class="space-y-3">
        <p class="text-sm text-muted">
          发布于 {{ formatDate(post.date) }}
          <span v-if="post.updated">
            · 更新于 {{ formatDate(post.updated) }}
          </span>
        </p>
        <h1 class="text-3xl font-bold sm:text-4xl">
          {{ post.title }}
        </h1>
        <p class="text-base text-toned">
          {{ post.description }}
        </p>
        <div class="flex flex-wrap gap-2">
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

      <ContentRenderer :value="post" />
    </article>
  </UContainer>
</template>
