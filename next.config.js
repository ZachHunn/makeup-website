/** @type {import('next').NextConfig} */
let projectId = 'zhqxumwjvtswcosgddyb';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    // Unset client-side javascript that only works server-side
    config.resolve.fallback = { fs: false, module: false, path: false };
    return config;
  },
  sassOptions: {
    includePaths: ['/src/**/*'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: `${projectId}.supabase.co`,
        port: '',
        pathname: '/storage/**',
      },
    ],
  },
};

module.exports = nextConfig;
