/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "placehold.co"],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
