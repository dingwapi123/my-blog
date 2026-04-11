<script setup lang="ts">
const route = useRoute()
const currentTag = decodeURIComponent(String(route.params.tag || '')).trim()

const formatDate = (value: string) =>
  new Intl.DateTimeFormat('zh-CN', { dateStyle: 'long' }).format(new Date(value))

const toBlogPath = (path: string) => `/blog/${path.split('/').filter(Boolean).at(-1)}`

const { data: posts } = await useAsyncData(`tag-posts-${currentTag}`, async () => {
  const items = await queryCollection('posts')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .all()

  return items.filter(item => (item.tags || []).includes(currentTag))
})
</script>

<template>
  <UContainer class="py-10 sm:py-12">
    <UPageHeader
      :title="`标签：${currentTag}`"
      description="按标签筛选后的文章列表。"
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

      <UAlert
        v-if="(posts || []).length === 0"
        title="暂无文章"
        description="这个标签下还没有公开发布的文章。"
        icon="i-lucide-file-x"
        color="neutral"
        variant="subtle"
      />
    </div>
  </UContainer>
</template>
