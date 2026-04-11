# 个人博客技术初始化方案

## 1. 文档目标

这份文档用于明确项目正式开始编码前的技术落地方案。

它解决的问题是：
- 项目应该怎么初始化
- 目录和模块怎么搭
- 深色模式怎么实现
- 内容系统怎么接
- 第一阶段应该安装哪些依赖

这份文档不是代码实现，而是技术执行蓝图。

## 2. 技术基线

第一阶段确定使用：

- `Nuxt 4`
- `TypeScript`
- `@nuxt/content`
- `Tailwind CSS`
- 按需使用 `Nuxt UI`

部署目标：
- 优先静态部署

## 3. 初始化原则

### 原则 1：从轻开始

第一版只接入真正必要的能力：
- 路由
- 内容系统
- 样式系统
- 深色模式
- SEO 基础

不一开始就接入太多模块，避免项目变重。

### 原则 2：先搭基础骨架

优先顺序应该是：
- 项目骨架
- 布局系统
- 主题系统
- 内容系统
- 页面系统

### 原则 3：从第一天支持深色模式

深色模式不要等页面做完再补。

需要在这些层面一开始就考虑：
- 颜色 token
- 布局背景
- 文字颜色
- 卡片、边框、代码块

## 4. 推荐目录结构

```text
app/
  assets/
    css/
      main.css
  components/
    site/
    blog/
    ui/
  composables/
  layouts/
    default.vue
  pages/
    index.vue
    blog/
      index.vue
      [slug].vue
    tags/
      [tag].vue
    about.vue
  utils/
content/
  posts/
public/
docs/
nuxt.config.ts
app.config.ts
content.config.ts
package.json
tsconfig.json
```

## 5. 初始化阶段的关键依赖

### 核心依赖

- `nuxt`
- `vue`
- `typescript`
- `@nuxt/content`

### 样式相关

- `tailwindcss`
- `@tailwindcss/vite` 或 Nuxt 官方推荐接入方式

### 可选依赖

- `@nuxt/ui`
- SEO、sitemap、RSS 相关模块

说明：
- `Nuxt UI` 不是必须，但如果我们想更快得到稳定组件，可以接入。
- 如果第一版想更纯粹，也可以先不用 `Nuxt UI`，以 Tailwind 自定义为主。

## 6. Nuxt 配置方向

### `nuxt.config.ts` 第一阶段应负责

- 注册模块
- 配置全局 CSS
- 配置站点基础 metadata
- 配置静态生成相关设置
- 为 SEO / sitemap / RSS 预留扩展位

### 第一阶段不建议放太多内容

`nuxt.config.ts` 只保留：
- 必要模块
- 必要实验项或兼容项
- 必要站点配置

避免一开始堆太多配置。

## 7. 样式系统落地方案

### 推荐方式

采用：
- `Tailwind CSS` 负责布局和常规样式
- CSS 变量负责主题 token
- 少量全局基础样式负责排版统一

### 建议样式分层

1. 主题变量层
2. 全局 reset / base
3. 通用排版层
4. 组件层
5. 页面局部样式

### `main.css` 建议承载

- 主题变量
- `html` / `body` 基础样式
- 深色模式 token 切换
- 文章排版基础规则
- 代码块基础样式

## 8. 深色模式技术方案

### 推荐实现方式

建议采用：
- `html` 或 `body` 上切换主题 class
- 配合 CSS 变量切换颜色 token

### 需要实现的能力

- 首次进入根据系统主题初始化
- 用户可以手动切换
- 用户选择保存在本地
- 初始渲染尽量减少闪烁

### 建议实现结构

- 一个主题 composable，例如 `useTheme`
- 一个主题切换按钮组件
- 一个初始化主题状态的逻辑

### 主题状态建议

可支持：
- `light`
- `dark`
- `system`

如果第一版想简单一点，也可以先支持：
- `light`
- `dark`

## 9. 内容系统落地方案

### 推荐使用方式

使用 `@nuxt/content` 管理 `content/posts/*.md`

### 第一阶段要实现的能力

- 读取文章列表
- 根据 slug 获取单篇文章
- 支持 frontmatter
- 过滤 draft 内容
- 支持标签聚合
- 支持按日期排序

### 内容 schema 目标

明确这些字段：
- `title`
- `description`
- `date`
- `updated`
- `tags`
- `category`
- `cover`
- `draft`
- `featured`

### 需要补的工具函数

建议后续实现这些工具方法：
- 日期格式化
- 阅读时长计算
- 标签整理
- 文章排序
- 邻近文章查找

## 10. 页面开发技术拆分

### 首页

需要的数据：
- 最近文章
- 热门标签或精选标签

### 博客列表页

需要的数据：
- 所有已发布文章

### 博客详情页

需要的数据：
- 当前文章
- 上一篇 / 下一篇

### 标签页

需要的数据：
- 当前标签下所有文章

### About 页

第一阶段可先写死内容，后续再决定是否也内容化

## 11. 组件拆分建议

建议组件尽量按职责拆分，不要一开始写成大页面。

### 推荐组件分类

#### 站点级组件

- `SiteHeader`
- `SiteFooter`
- `ThemeToggle`
- `Container`

#### 博客相关组件

- `PostCard`
- `PostList`
- `PostHeader`
- `PostMeta`
- `TagList`
- `PrevNextNav`

#### 基础 UI 组件

- `Button`
- `Badge`
- `SectionTitle`

## 12. SEO 基础技术方案

### 第一阶段应支持

- 全站 title 模板
- 页面 description
- 文章详情页 metadata
- canonical
- Open Graph 基础信息

### 实现建议

优先使用 Nuxt 原生能力：
- `useSeoMeta`
- `useHead`

这样依赖更少，也更稳。

## 13. 静态部署技术方向

### 推荐输出方式

优先准备成静态站点输出。

### 部署平台候选

- `Vercel`
- `Netlify`
- `Cloudflare Pages`

### 当前建议

第一阶段不绑定平台细节，只确保：
- 项目能成功构建
- 静态资源路径正确
- 内容页可正常访问

## 14. 第一阶段技术任务顺序

建议按这个顺序落地：

1. 初始化 Nuxt 4
2. 接入 Tailwind CSS
3. 接入 `@nuxt/content`
4. 建立目录结构
5. 建立全局布局
6. 建立主题系统
7. 建立示例文章
8. 开发首页和博客页面
9. 开发文章详情页
10. 开发标签页和 About 页
11. 补齐 SEO
12. 生产构建和部署验证

## 15. 第一阶段建议不做的技术项

为了控制复杂度，第一阶段不建议做：

- 全文搜索服务
- 第三方评论系统
- CMS 接入
- 动态统计后端
- 复杂动画框架
- 过重的状态管理方案

## 16. 开发开始前的技术确认项

真正开始写代码前，我们最好最终确认这些点：

- 是否使用 `Nuxt UI`
- 是否第一版就做 RSS 和 sitemap
- 深色模式是否支持 `system`
- About 页是否内容化
- 首页是否需要“最近项目”模块

## 17. 当前结论

这套博客的第一阶段技术实现，最推荐的路径是：

`Nuxt 4 + Tailwind CSS + @nuxt/content + CSS Variables Theme System`

核心思路是：
- 先把内容和主题系统打稳
- 再搭页面
- 最后补 SEO 与部署

这样项目会保持轻量、清晰，而且非常适合个人博客长期维护。
