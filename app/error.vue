<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const statusCode = computed(() => props.error?.statusCode || 500)
const statusText = computed(() => props.error?.statusMessage || '页面暂时不可用')

const isNotFound = computed(() => statusCode.value === 404)
const title = computed(() => (isNotFound.value ? '页面走丢了' : '出现了一点小问题'))
const description = computed(() =>
  isNotFound.value
    ? '你访问的内容可能已被移动、删除，或链接地址有误。'
    : '系统正在努力恢复，请稍后再试，或先返回主页继续浏览。'
)

function goHome() {
  clearError({ redirect: '/' })
}

function goBack() {
  if (import.meta.client && window.history.length > 1) {
    window.history.back()
    return
  }
  clearError({ redirect: '/' })
}
</script>

<template>
  <main class="error-shell">
    <section class="error-panel">
      <p class="error-code">
        {{ statusCode }}
      </p>
      <h1 class="error-title">
        {{ title }}
      </h1>
      <p class="error-description">
        {{ description }}
      </p>
      <p class="error-meta">
        {{ statusText }}
      </p>
      <div class="error-actions">
        <UButton
          color="primary"
          variant="solid"
          icon="i-lucide-house"
          class="error-btn"
          @click="goHome"
        >
          返回首页
        </UButton>
        <UButton
          color="neutral"
          variant="outline"
          icon="i-lucide-arrow-left"
          class="error-btn"
          @click="goBack"
        >
          返回上一页
        </UButton>
      </div>
    </section>
  </main>
</template>

<style scoped>
.error-shell {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: clamp(1.2rem, 2.5vw, 2rem);
}

.error-panel {
  width: min(720px, 100%);
  border: 1px solid color-mix(in oklab, var(--theme-border) 86%, transparent);
  border-radius: 1.2rem;
  background:
    linear-gradient(150deg, color-mix(in oklab, var(--theme-accent-soft) 25%, transparent), transparent 55%),
    color-mix(in oklab, var(--theme-surface) 90%, transparent);
  box-shadow:
    0 20px 45px -35px color-mix(in oklab, var(--theme-text) 45%, transparent),
    inset 0 1px 0 color-mix(in oklab, #fff 30%, transparent);
  padding: clamp(1.4rem, 3.5vw, 2.5rem);
}

.error-code {
  margin: 0;
  color: var(--theme-accent);
  font-size: clamp(0.82rem, 0.25vw + 0.75rem, 0.95rem);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 700;
}

.error-title {
  margin: 0.45rem 0 0;
  color: var(--theme-text);
  font-size: clamp(1.7rem, 1.3vw + 1.2rem, 2.5rem);
  line-height: 1.2;
  font-weight: 700;
}

.error-description {
  margin: 0.95rem 0 0;
  color: var(--theme-text-muted);
  font-size: clamp(0.98rem, 0.25vw + 0.9rem, 1.1rem);
  line-height: 1.8;
  max-width: 48ch;
}

.error-meta {
  margin: 0.75rem 0 0;
  color: color-mix(in oklab, var(--theme-text-muted) 88%, transparent);
  font-size: 0.9rem;
}

.error-actions {
  margin-top: clamp(1.25rem, 2.6vw, 1.9rem);
  display: flex;
  flex-wrap: wrap;
  gap: 0.72rem;
}

.error-btn {
  border-radius: 999px;
}
</style>
