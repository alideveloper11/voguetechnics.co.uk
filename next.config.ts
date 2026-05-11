import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.voguetechnics.co.uk",
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
      },
      {
        // Common typo / spacing in the URL
        source: "/services/timing chain-replacement",
        destination: "/services/timing-chain-replacement",
        permanent: true,
      },
      {
        // Common misspelling seen in browsers
        source: "/services/timing-chaiin-replacement",
        destination: "/services/timing-chain-replacement",
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
