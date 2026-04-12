<script setup lang="ts">
const { projectItems } = useShowcaseData()

useSeoMeta({
  title: '项目 | 辰心的博客',
  description: '我在做的前端项目与产品实践，持续记录设计、工程与内容的交叉探索。'
})
</script>

<template>
  <UContainer class="projects-page py-12 sm:py-16 lg:py-20">
    <header class="projects-hero grid gap-6 border-b border-default pb-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
      <div class="projects-hero-main space-y-4">
        <p class="projects-kicker text-xs tracking-[0.2em] text-muted uppercase">
          Selected Works
        </p>
        <h1 class="projects-title text-3xl leading-tight font-semibold text-highlighted sm:text-4xl lg:text-5xl">
          项目不是作品堆砌，
          <br class="hidden sm:block">
          而是持续演进的系统。
        </h1>
        <p class="projects-subtitle max-w-2xl text-sm leading-7 text-toned sm:text-base">
          这里收录我在内容平台、前端工程和体验设计上的一些实践。每个项目都强调问题背景、实现路径与可持续维护。
        </p>
      </div>

      <div class="projects-hero-meta rounded-2xl border border-default bg-elevated/60 p-5 backdrop-blur-sm">
        <p class="text-xs tracking-[0.18em] text-muted uppercase">
          Build Notes
        </p>
        <ul class="mt-3 space-y-2 text-sm leading-6 text-toned">
          <li>方法：先定义信息架构，再写视觉层级。</li>
          <li>标准：明暗模式一致，移动端优先可读性。</li>
          <li>目标：让页面长期可维护，而不是一次性炫技。</li>
        </ul>
      </div>
    </header>

    <section class="projects-grid mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      <UCard
        v-for="item in projectItems"
        :key="item.title"
        class="project-card group border border-default bg-default/80 transition-transform duration-300 hover:-translate-y-1"
      >
        <template #header>
          <div class="project-card-header flex items-start justify-between gap-3">
            <div class="space-y-2">
              <p class="text-xs tracking-[0.16em] text-muted uppercase">
                {{ item.year }}
              </p>
              <h2 class="text-lg leading-7 font-semibold text-highlighted">
                {{ item.title }}
              </h2>
            </div>
            <UBadge
              color="neutral"
              variant="soft"
              class="whitespace-nowrap"
            >
              {{ item.status }}
            </UBadge>
          </div>
        </template>

        <p class="text-sm leading-7 text-toned">
          {{ item.description }}
        </p>

        <div class="mt-4 flex flex-wrap gap-2">
          <UBadge
            v-for="tag in item.tags"
            :key="`${item.title}-${tag}`"
            color="neutral"
            variant="subtle"
          >
            {{ tag }}
          </UBadge>
        </div>

        <template #footer>
          <div class="project-card-actions flex flex-wrap gap-3">
            <UButton
              :to="item.href"
              trailing-icon="i-lucide-arrow-up-right"
              size="sm"
            >
              查看页面
            </UButton>
            <UButton
              v-if="item.repo"
              :to="item.repo"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              color="neutral"
              size="sm"
              trailing-icon="i-lucide-github"
            >
              仓库
            </UButton>
          </div>
        </template>
      </UCard>
    </section>
  </UContainer>
</template>
