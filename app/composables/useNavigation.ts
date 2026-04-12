export interface NavigationItem {
  label: string
  to: string
}

const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: '首页', to: '/' },
  { label: '博客', to: '/blog' },
  { label: '标签', to: '/tags' },
  { label: 'Projects', to: '/projects' },
  { label: 'Snippets', to: '/snippets' },
  { label: '关于', to: '/about' }
]

export function useNavigation() {
  return NAVIGATION_ITEMS
}
