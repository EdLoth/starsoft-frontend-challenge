import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // Otimização necessária para Styled Components no Next.js (SSR)
  compiler: {
    styledComponents: true,
  },

  // Liberação do domínio das imagens
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'softstar.s3.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;