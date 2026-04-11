type ThemeMode = 'light' | 'dark' | 'system'

const THEME_STORAGE_KEY = 'blog-theme-mode'

function isThemeMode(value: string | null): value is ThemeMode {
  return value === 'light' || value === 'dark' || value === 'system'
}

function getSystemDarkMode(): boolean {
  if (!import.meta.client) {
    return false
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function useTheme() {
  const mode = useState<ThemeMode>('theme-mode', () => 'system')
  const initialized = useState<boolean>('theme-initialized', () => false)
  const mediaBound = useState<boolean>('theme-media-bound', () => false)

  const resolvedMode = computed<'light' | 'dark'>(() => {
    if (mode.value === 'system') {
      return getSystemDarkMode() ? 'dark' : 'light'
    }

    return mode.value
  })

  const isDark = computed<boolean>(() => resolvedMode.value === 'dark')

  const applyThemeClass = () => {
    if (!import.meta.client) {
      return
    }

    const root = document.documentElement
    root.classList.toggle('dark', isDark.value)
  }

  const setMode = (nextMode: ThemeMode) => {
    mode.value = nextMode
  }

  if (import.meta.client && !initialized.value) {
    const storedMode = localStorage.getItem(THEME_STORAGE_KEY)
    mode.value = isThemeMode(storedMode) ? storedMode : 'system'
    applyThemeClass()
    initialized.value = true
  }

  watch(mode, (nextMode) => {
    if (!import.meta.client) {
      return
    }

    localStorage.setItem(THEME_STORAGE_KEY, nextMode)
    applyThemeClass()
  })

  if (import.meta.client && !mediaBound.value) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const updateFromSystem = () => {
      if (mode.value === 'system') {
        applyThemeClass()
      }
    }

    mediaQuery.addEventListener('change', updateFromSystem)
    mediaBound.value = true
  }

  return {
    mode,
    resolvedMode,
    isDark,
    setMode
  }
}
