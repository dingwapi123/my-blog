<template>
  <UContainer class="about-page py-12 sm:py-16">
    <p class="about-kicker">
      About
    </p>
    <h1 class="about-title">
      我把这座网站当作长期作品，
      <br>
      不是信息堆栈。
    </h1>

    <div class="about-content">
      <p>
        你好，我是陈心智，前端开发者。最近几年我主要在做 Vue、Nuxt 与内容型产品体验优化。
      </p>
      <p>
        我希望文章不只停留在“记录”，而是能成为可复用的经验：问题背景、实现路径、取舍逻辑、最终结论。
      </p>
      <p>
        这里会持续更新技术实践、项目复盘和个人思考。如果你也在搭内容驱动的网站，我们可以一起交流。
      </p>
    </div>

    <div class="about-actions">
      <UButton
        to="/blog"
        trailing-icon="i-lucide-arrow-right"
      >
        去看文章
      </UButton>
      <UButton
        to="/projects"
        color="neutral"
        variant="soft"
      >
        查看项目
      </UButton>
      <UButton
        to="/snippets"
        color="neutral"
        variant="outline"
      >
        浏览片段
      </UButton>
    </div>
  </UContainer>
</template>
