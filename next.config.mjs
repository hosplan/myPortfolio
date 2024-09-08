/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix:
  process.env.NODE_ENV === "production"
    ? "https://hosplan.github.io/myPortfolio"
    : "",
};


export default nextConfig;
