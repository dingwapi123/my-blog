<script setup lang="ts">
const { mode, setMode } = useTheme()

const options = [
  {
    label: '浅色',
    value: 'light',
    icon: 'i-lucide-sun'
  },
  {
    label: '深色',
    value: 'dark',
    icon: 'i-lucide-moon'
  },
  {
    label: '跟随系统',
    value: 'system',
    icon: 'i-lucide-monitor'
  }
] as const
</script>

<template>
  <UButtonGroup size="sm">
    <UButton
      v-for="option in options"
      :key="option.value"
      :icon="option.icon"
      :variant="mode === option.value ? 'solid' : 'ghost'"
      color="neutral"
      @click="setMode(option.value)"
    >
      {{ option.label }}
    </UButton>
  </UButtonGroup>
</template>
