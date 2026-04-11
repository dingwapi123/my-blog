<script setup lang="ts">
const { data: tags } = await useAsyncData('tag-summary', async () => {
  const posts = await queryCollection('posts')
    .where('draft', '=', false)
    .all()

  const counter = new Map<string, number>()

  for (const post of posts) {
    for (const tag of post.tags || []) {
      counter.set(tag, (counter.get(tag) || 0) + 1)
    }
  }

  return Array.from(counter.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))
})
</script>

<template>
  <UContainer class="py-10 sm:py-12">
    <UPageHeader
      title="标签"
      description="按主题浏览文章。"
    />

    <div class="mt-8 flex flex-wrap gap-3">
      <NuxtLink
        v-for="tag in tags || []"
        :key="tag.name"
        :to="`/tags/${encodeURIComponent(tag.name)}`"
      >
        <UBadge
          color="neutral"
          variant="subtle"
          class="px-3 py-1"
        >
          {{ tag.name }} ({{ tag.count }})
        </UBadge>
      </NuxtLink>
    </div>

    <UAlert
      v-if="(tags || []).length === 0"
      class="mt-8"
      title="暂无标签"
      description="先发布几篇文章后，这里会自动聚合主题标签。"
      icon="i-lucide-tags"
      color="neutral"
      variant="subtle"
    />
  </UContainer>
</template>
