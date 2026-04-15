/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // https://images.unsplash.com/photo-1544005313-94ddf0286df2
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
