import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  allowedDevOrigins: [
    'localhost:3000',
    '127.0.0.1:3000',
    '192.168.29.221:3000',
    '192.168.29.221',
    '192.168.29.170:3000',
    '192.168.29.170'
  ],
  devIndicators: false,
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
