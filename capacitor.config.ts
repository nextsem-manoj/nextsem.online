import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'online.nextsem.app',
  appName: 'Nextsem Academy',
  webDir: 'out',
  plugins: {
    GoogleAuth: {
      scopes: ["profile", "email"],
      clientId: "983453487133-2ffe4796abuhkbidvtc7mo8n8kvo82ir.apps.googleusercontent.com",
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
