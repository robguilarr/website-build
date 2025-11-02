// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { remarkReadingTime } from './src/lib/remark.mjs';

// Configure rehype-katex options - using minimal configuration
const katexOptions = {
  throwOnError: false,
};

// https://astro.build/config
export default defineConfig({
  site: 'https://www.robguilar.com',
  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: 'gruvbox-dark-medium',
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sitemap(),
    mdx({
      optimize: true,
      syntaxHighlight: 'shiki',
      extendMarkdownConfig: false,
      remarkPlugins: [remarkMath],
      rehypePlugins: [[rehypeKatex, katexOptions]],
    }),
  ],
  experimental: {
    fonts: [
      {
        name: 'Inter',
        cssVariable: '--font-inter',
        provider: 'local',
        variants: [
          {
            src: ['./src/assets/fonts/Inter-Regular.woff2'],
            style: 'normal',
            weight: 400,
          },
          {
            src: ['./src/assets/fonts/Inter-Medium.woff2'],
            style: 'normal',
            weight: 500,
          },
          {
            src: ['./src/assets/fonts/Inter-SemiBold.woff2'],
            style: 'normal',
            weight: 600,
          },
          {
            src: ['./src/assets/fonts/Inter-Bold.woff2'],
            style: 'normal',
            weight: 700,
          },
          {
            src: ['./src/assets/fonts/Inter-ExtraBold.woff2'],
            style: 'normal',
            weight: 800,
          },
        ],
      },
      {
        name: 'InterVariable',
        cssVariable: '--font-inter-variable',
        provider: 'local',
        variants: [
          {
            src: ['./src/assets/fonts/InterVariable.woff2'],
            style: 'normal',
            weight: 'variable',
          },
        ],
      },
    ],
  },
});
