type ProjectShowcaseItem = {
  title: string
  description: string
  tags: string[]
  href: string
  repo?: string
  year: string
  status: '在线' | '开发中' | '归档'
}

type SnippetShowcaseItem = {
  title: string
  summary: string
  language: string
  tags: string[]
  gist: string
  updatedAt: string
}

const projectItems: ProjectShowcaseItem[] = [
  {
    title: '内容型博客系统',
    description: '基于 Nuxt Content 搭建的长期写作站点，强调检索、标签体系和可复用的文章结构。',
    tags: ['Nuxt 4', 'Nuxt Content', 'Design System'],
    href: '/blog',
    repo: 'https://github.com/chenxinzhi/my-blog',
    year: '2026',
    status: '在线'
  },
  {
    title: '组件库实验场',
    description: '用 Nuxt UI 维护一套轻量组件规范，沉淀按钮、卡片、内容块等高频模块。',
    tags: ['Nuxt UI', 'Vue 3', 'TypeScript'],
    href: '/projects',
    repo: 'https://github.com/chenxinzhi/ui-lab',
    year: '2025',
    status: '开发中'
  },
  {
    title: '作品集页面重构',
    description: '从信息平铺升级为叙事型布局，覆盖明暗主题、移动端与交互动效节奏。',
    tags: ['UX', 'Motion', 'Responsive'],
    href: '/about',
    year: '2025',
    status: '归档'
  }
]

const snippetItems: SnippetShowcaseItem[] = [
  {
    title: '稳定日期格式化（固定时区）',
    summary: '避免 SSR/CSR 时区差异导致 hydration 抖动，统一按固定时区输出年月日。',
    language: 'ts',
    tags: ['Date', 'SSR', 'Hydration'],
    gist: `export const formatDate = (value: string) =>
  new Intl.DateTimeFormat('zh-CN', {
    dateStyle: 'long',
    timeZone: 'Asia/Shanghai'
  }).format(new Date(value))`,
    updatedAt: '2026-04-12'
  },
  {
    title: '标签聚合索引生成器',
    summary: '从文章集合中一次遍历聚合标签，得到用于标签页渲染的 key-count 列表。',
    language: 'ts',
    tags: ['Collection', 'Indexing'],
    gist: `export function buildTagIndex(posts: { tags?: string[] }[]) {
  return posts.reduce<Record<string, number>>((acc, post) => {
    for (const tag of post.tags || []) {
      acc[tag] = (acc[tag] || 0) + 1
    }
    return acc
  }, {})
}`,
    updatedAt: '2026-04-10'
  },
  {
    title: '响应式断点侦测 composable',
    summary: '在 Nuxt 客户端检测断点变化，给布局或动画策略提供简洁的响应式布尔值。',
    language: 'ts',
    tags: ['Composable', 'Responsive'],
    gist: `export function useIsMobile() {
  const isMobile = useState('is-mobile', () => false)
  if (import.meta.client) {
    const media = window.matchMedia('(max-width: 767px)')
    isMobile.value = media.matches
    media.addEventListener('change', e => (isMobile.value = e.matches))
  }
  return { isMobile }
}`,
    updatedAt: '2026-04-08'
  }
]

export function useShowcaseData() {
  return {
    projectItems,
    snippetItems
  }
}
