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
        '/gemini-ai',
        '/ai',
        '/ncert',
        '/ncert/*',
        '/logo-studio',
        '/logo-animation',
        '/admin',
        '/visual-logic',
        '/pdf-to-markdown',
        '/lesson-preview',
        '/cli/preview',
        '/*-animation',
        '/3d-cube-animation',
        '/animated-waves-animation',
        '/audio-spectrum-animation',
        '/black-hole-animation',
        '/candle-flame-animation',
        '/dna-helix-animation',
        '/glassmorphism-card-animation',
        '/glitch-text-animation',
        '/holographic-card-animation',
        '/liquid-wave-animation',
        '/matrix-code-animation',
        '/neon-button-animation',
        '/rain-effect-animation',
        '/solar-system-animation',
        '/warp-speed-animation',
      ],
    },
    sitemap: 'https://nextsem.online/sitemap.xml',
  };
}
