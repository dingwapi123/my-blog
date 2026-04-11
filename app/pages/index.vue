<script setup lang="ts">
const formatDate = (value: string) =>
  new Intl.DateTimeFormat('zh-CN', { dateStyle: 'long' }).format(new Date(value))

const toBlogPath = (path: string) => `/blog/${path.split('/').filter(Boolean).at(-1)}`

const { data: posts } = await useAsyncData('home-latest-posts', async () => {
  const items = await queryCollection('posts')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .all()

  return items.slice(0, 3)
})
</script>

<template>
  <UContainer class="py-10 sm:py-16">
    <UPageHero
      title="陈心智的个人博客"
      description="记录前端开发、Nuxt 实战和生活思考。持续更新，慢慢打磨。"
      :links="[
        {
          label: '浏览全部文章',
          to: '/blog',
          trailingIcon: 'i-lucide-arrow-right'
        },
        {
          label: '了解我',
          to: '/about',
          color: 'neutral',
          variant: 'subtle'
        }
      ]"
    />

    <UPageSection
      title="最新文章"
      description="从最近发布的文章开始阅读。"
    >
      <div class="grid gap-4">
        <UCard
          v-for="post in posts || []"
          :key="post.id"
        >
          <div class="space-y-3">
            <p class="text-sm text-muted">
              {{ formatDate(post.date) }}
            </p>
            <h3 class="text-xl font-semibold">
              <NuxtLink
                :to="toBlogPath(post.path)"
                class="hover:underline"
              >
                {{ post.title }}
              </NuxtLink>
            </h3>
            <p class="text-sm text-toned">
              {{ post.description }}
            </p>
            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="tag in post.tags || []"
                :key="`${post.id}-${tag}`"
                variant="subtle"
                color="neutral"
              >
                {{ tag }}
              </UBadge>
            </div>
          </div>
        </UCard>
      </div>
    </UPageSection>
  </UContainer>
</template>
