/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  // Hides the dev-only on-screen route indicator so it stays out of design
  // review screenshots. Remove this line to get it back.
  devIndicators: false,
};

export default nextConfig;
