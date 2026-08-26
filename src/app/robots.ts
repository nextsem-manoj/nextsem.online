import { MetadataRoute } from 'next';

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/profile',
        '/playground',
        '/logo-studio',
        '/logo-animation',
        '/admin',
        '/visual-logic',
        '/pdf-to-markdown',
        '/lesson-preview',
        '/*-animation',
      ],
    },
    sitemap: 'https://nextsem.online/sitemap.xml',
  };
}
