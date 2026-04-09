import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/blogs',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blogs/:slug*',
        destination: '/blog', // Since we don't have sub-blog routes yet
        permanent: true,
      },
      {
        source: '/about-us/contact-us',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/range-',
        destination: '/',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
