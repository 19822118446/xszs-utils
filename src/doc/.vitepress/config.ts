import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/xszs-utils/',
  title: 'xszs/utils 工具库',
  description: '一个实用的 TypeScript 工具函数库',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '指南',
        items: [
          { text: '介绍', link: '/quick-start' },
          { text: '开始使用', link: '/getting-started' },
        ],
      },
    ],
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '快速开始', link: '/quick-start' },
          { text: '开始使用', link: '/getting-started' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xszs12138/xszs-utils' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/@xszs/utils' },
    ],
    search: {
      provider: 'local',
    },
  },
})
