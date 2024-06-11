/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.138.50",
        port: "8080",
        pathname: "/images/**",
      },
    ],
  },

  publicRuntimeConfig: {
    // Will be available on both server and client
    API_URL: process.env.API_URL,
  },
};

export default nextConfig;