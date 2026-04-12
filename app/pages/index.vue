<script setup lang="ts">
import { formatZhDate } from '~/utils/date'

const toBlogPath = (path: string) => `/blog/${path.split('/').filter(Boolean).at(-1)}`

const writingPillars = [
  {
    title: '技术实践',
    description: '围绕具体场景拆解方案，而不是只贴代码片段。'
  },
  {
    title: '项目复盘',
    description: '记录关键取舍、踩坑过程和可复用的判断逻辑。'
  },
  {
    title: '长期写作',
    description: '保持稳定更新频率，把碎片经验沉淀成系统表达。'
  }
]

const { data: posts } = await useAsyncData('home-latest-posts', async () => {
  const items = await queryCollection('posts')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .all()

  return items.slice(0, 3)
})
</script>

<template>
  <div class="home-page">
    <section class="home-hero">
      <div class="hero-noise" />
      <UContainer class="hero-content">
        <div class="hero-main">
          <p class="hero-brand">
            CHEN XIN ZHI
          </p>
          <h1 class="hero-title">
            写代码，也记录每一次
            <br>
            真实的思考和选择。
          </h1>
          <p class="hero-subtitle">
            这里是我的内容型实验室。主题聚焦前端工程、Nuxt 实践与长期写作方法。
          </p>
          <div class="hero-actions">
            <UButton
              to="/blog"
              size="xl"
              trailing-icon="i-lucide-arrow-right"
            >
              浏览文章
            </UButton>
            <UButton
              to="/about"
              size="xl"
              color="neutral"
              variant="subtle"
            >
              了解我
            </UButton>
          </div>
        </div>

        <aside class="hero-aside">
          <p class="hero-aside-kicker">
            Site Notes
          </p>
          <ul class="hero-aside-list">
            <li>方向：Nuxt / 前端工程 / 写作复盘</li>
            <li>频率：每周至少 1 篇长期更新</li>
            <li>目标：把经验沉淀成可复用知识</li>
          </ul>
          <NuxtLink
            to="/projects"
            class="hero-aside-link"
          >
            看看正在做的项目
            <UIcon
              name="i-lucide-arrow-right"
              class="size-4"
            />
          </NuxtLink>
        </aside>
      </UContainer>
    </section>

    <section class="home-rhythm">
      <UContainer>
        <div class="rhythm-line">
          <span class="rhythm-dot" />
          <span class="rhythm-dot rhythm-dot-soft" />
        </div>
      </UContainer>
    </section>

    <section class="home-pillars">
      <UContainer>
        <p class="section-kicker">
          Writing Focus
        </p>
        <h2 class="section-title">
          不追求“看起来很多”，只追求“留下来的都能复用”。
        </h2>
        <div class="pillar-grid">
          <article
            v-for="item in writingPillars"
            :key="item.title"
            class="pillar-item"
          >
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </UContainer>
    </section>

    <section class="home-latest">
      <UContainer class="latest-layout">
        <div class="latest-intro">
          <p class="section-kicker">
            Latest Notes
          </p>
          <h2 class="section-title">
            最近发布
          </h2>
          <p class="latest-copy">
            每篇文章都尽量回答一个具体问题，保持可读、可检索、可复用。
          </p>
          <div class="latest-entry">
            <UButton
              to="/blog"
              color="neutral"
              variant="outline"
              trailing-icon="i-lucide-arrow-right"
            >
              查看全部文章
            </UButton>
          </div>
        </div>

        <div class="latest-stream">
          <article
            v-for="(post, index) in posts || []"
            :key="post.id"
            class="latest-item"
            :style="{ '--delay': `${index * 90}ms` }"
          >
            <p class="latest-date">
              {{ formatZhDate(post.date) }}
            </p>
            <div class="latest-main">
              <h3 class="latest-title">
                <NuxtLink :to="toBlogPath(post.path)">
                  {{ post.title }}
                </NuxtLink>
              </h3>
              <p class="latest-description">
                {{ post.description }}
              </p>
              <div class="latest-tags">
                <NuxtLink
                  v-for="tag in post.tags || []"
                  :key="`${post.id}-${tag}`"
                  :to="`/tags/${encodeURIComponent(tag)}`"
                >
                  <UBadge
                    variant="subtle"
                    color="neutral"
                  >
                    {{ tag }}
                  </UBadge>
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>

        <div
          v-if="!posts?.length"
          class="latest-empty"
        >
          <p>文章整理中，先去看看我的项目或关于页。</p>
          <div class="latest-empty-actions">
            <UButton
              to="/projects"
              color="neutral"
              variant="outline"
            >
              浏览项目
            </UButton>
            <UButton
              to="/about"
              color="neutral"
              variant="ghost"
            >
              了解我
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
