<script setup lang="ts">
const formatDate = (value: string) =>
  new Intl.DateTimeFormat('zh-CN', { dateStyle: 'long' }).format(new Date(value))

const toBlogPath = (path: string) => `/blog/${path.split('/').filter(Boolean).at(-1)}`

const { data: posts } = await useAsyncData('blog-post-list', () =>
  queryCollection('posts')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .all()
)
</script>

<template>
  <UContainer class="py-10 sm:py-12">
    <UPageHeader
      title="全部文章"
      description="这里收录了博客里所有公开文章，按发布时间倒序排列。"
    />

    <div class="mt-8 grid gap-4">
      <UCard
        v-for="post in posts || []"
        :key="post.id"
      >
        <div class="space-y-3">
          <p class="text-sm text-muted">
            {{ formatDate(post.date) }}
          </p>
          <h2 class="text-2xl font-semibold">
            <NuxtLink
              :to="toBlogPath(post.path)"
              class="hover:underline"
            >
              {{ post.title }}
            </NuxtLink>
          </h2>
          <p class="text-sm text-toned">
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
          <div>
            <UButton
              :to="toBlogPath(post.path)"
              variant="ghost"
              trailing-icon="i-lucide-arrow-right"
            >
              阅读全文
            </UButton>
          </div>
        </div>
      </UCard>
    </div>
  </UContainer>
</template>
