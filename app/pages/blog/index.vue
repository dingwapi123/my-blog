<script setup lang="ts">
import { formatZhDate } from '~/utils/date'

const toBlogPath = (path: string) => `/blog/${path.split('/').filter(Boolean).at(-1)}`

const { data: posts } = await useAsyncData('blog-post-list', () =>
  queryCollection('posts')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .all()
)
</script>

<template>
  <UContainer class="blog-list-page py-12 sm:py-16">
    <header class="blog-list-header">
      <p class="blog-list-kicker">
        Archive
      </p>
      <h1 class="blog-list-title">
        全部文章
      </h1>
      <p class="blog-list-description">
        这里按发布时间倒序收录所有公开文章，持续更新，不断重写和打磨。
      </p>
    </header>

    <div class="blog-list-lines">
      <article
        v-for="(post, index) in posts || []"
        :key="post.id"
        class="blog-line-item"
        :style="{ '--delay': `${index * 70}ms` }"
      >
        <p class="blog-line-date">
          {{ formatZhDate(post.date) }}
        </p>

        <div class="blog-line-body">
          <h2 class="blog-line-title">
            <NuxtLink :to="toBlogPath(post.path)">
              {{ post.title }}
            </NuxtLink>
          </h2>
          <p class="blog-line-description">
            {{ post.description }}
          </p>
          <div class="blog-line-tags">
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
        </div>

        <UButton
          :to="toBlogPath(post.path)"
          variant="ghost"
          color="neutral"
          trailing-icon="i-lucide-arrow-right"
          class="blog-line-cta"
        >
          阅读
        </UButton>
      </article>
    </div>
  </UContainer>
</template>
