// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dodajemy tę sekcję, aby pozwolić na ładowanie obrazków z Unsplash
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;