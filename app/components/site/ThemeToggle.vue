<script setup lang="ts">
const { mode, setMode } = useTheme()

const modeConfig = {
  light: { label: '浅色', icon: 'i-lucide-sun' },
  dark: { label: '深色', icon: 'i-lucide-moon' },
  system: { label: '跟随', icon: 'i-lucide-monitor' }
} as const

const orderedModes = ['light', 'dark', 'system'] as const

const current = computed(() => modeConfig[mode.value])

function cycleTheme() {
  const index = orderedModes.indexOf(mode.value)
  const next = orderedModes[(index + 1) % orderedModes.length] || 'light'
  setMode(next)
}
</script>

<template>
  <UButton
    color="neutral"
    variant="outline"
    class="theme-toggle-button"
    :icon="current.icon"
    @click="cycleTheme"
  >
    主题 {{ current.label }}
  </UButton>
</template>
