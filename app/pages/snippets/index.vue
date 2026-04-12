<script setup lang="ts">
const { snippetItems } = useShowcaseData()

useSeoMeta({
  title: '代码片段 | 辰心的博客',
  description: '高频可复用的前端片段与小技巧，优先强调可读性、上下文和落地场景。'
})
</script>

<template>
  <UContainer class="snippets-page py-12 sm:py-16 lg:py-20">
    <header class="snippets-hero space-y-5 border-b border-default pb-9">
      <p class="snippets-kicker text-xs tracking-[0.2em] text-muted uppercase">
        Reusable Snippets
      </p>
      <div class="grid gap-4 md:grid-cols-[1.15fr_0.85fr] md:items-end">
        <h1 class="snippets-title text-3xl leading-tight font-semibold text-highlighted sm:text-4xl lg:text-5xl">
          可复用的小片段，
          <br class="hidden sm:block">
          才是日常效率真正的杠杆。
        </h1>
        <p class="snippets-description text-sm leading-7 text-toned sm:text-base">
          每个片段都附带使用场景和最小实现，避免只给“答案”不讲“边界条件”。
        </p>
      </div>
    </header>

    <section class="snippets-list mt-10 space-y-5">
      <UCard
        v-for="snippet in snippetItems"
        :key="snippet.title"
        class="snippet-card border border-default bg-elevated/40"
      >
        <template #header>
          <div class="snippet-top flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 class="text-xl leading-8 font-semibold text-highlighted">
                {{ snippet.title }}
              </h2>
              <p class="mt-1 text-sm text-muted">
                最近更新：{{ snippet.updatedAt }}
              </p>
            </div>

            <UBadge
              color="primary"
              variant="soft"
              class="uppercase"
            >
              {{ snippet.language }}
            </UBadge>
          </div>
        </template>

        <p class="snippet-summary text-sm leading-7 text-toned">
          {{ snippet.summary }}
        </p>

        <div class="snippet-tags mt-4 flex flex-wrap gap-2">
          <UBadge
            v-for="tag in snippet.tags"
            :key="`${snippet.title}-${tag}`"
            color="neutral"
            variant="subtle"
          >
            {{ tag }}
          </UBadge>
        </div>

        <div class="snippet-code-wrap mt-5 overflow-x-auto rounded-xl border border-default bg-inverted/95 p-4">
          <pre class="snippet-code text-xs leading-6 text-inverted"><code>{{ snippet.gist }}</code></pre>
        </div>
      </UCard>
    </section>
  </UContainer>
</template>
