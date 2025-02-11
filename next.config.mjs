/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  reactStrictMode: true, // Enables React strict mode (optional)
  experimental: {
    appDir: true, // Ensures App Router support if using `app/` directory
  },
};

export default nextConfig; // ✅ Use ES module export
