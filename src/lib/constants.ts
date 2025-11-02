import type { z } from 'astro/zod';
import MetaDefaultImage from '@/assets/images/meta-default.jpg';
import avatar from '@/assets/images/profile_notion_roberto.png';
import type { seoSchemaWithoutImage } from '@/content.config';
import astroConfig from 'astro.config.mjs';

export type AuthorInfo = {
  name: string;
  avatar: any;
  headline: string;
  username?: string;
  location?: string;
  pronouns?: string;
};

export type Seo = z.infer<typeof seoSchemaWithoutImage> & {
  image?: any;
};

type DefaultConfigurationType = {
  baseUrl: string;
  author: AuthorInfo;
  seo: Seo;
};

export const DEFAULT_CONFIGURATION: DefaultConfigurationType = {
  baseUrl: astroConfig.site || 'https://www.robguilar.com',
  author: {
    avatar,
    name: 'Roberto Aguilar',
    headline: 'Growth Through AI & Agentic Systems',
    username: '@robguilar',
    pronouns: 'He/Him',
  },
  seo: {
    title: 'Roberto Aguilar',
    description:
      'Roberto Aguilar is an engineer focused on building reliable AI systems that turn ambiguous problems into tangible business growth.',
    type: 'website',
    image: MetaDefaultImage,
    twitter: {
      creator: '@robguilar',
    },
    robots: 'noindex, nofollow',
  },
};

// Google Analytics tracking ID
// Set your Google Analytics 4 tracking ID here (format: G-XXXXXXXXXX)
export const GOOGLE_ANALYTICS_ID = 'G-603CX8ERRB';
