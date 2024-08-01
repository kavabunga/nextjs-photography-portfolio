/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_IMAGES_SRC_SUBDOMAIN,
      },
    ],
    loader: 'custom',
    loaderFile: 'imgix-loader.ts',
  },
};

export default nextConfig;
