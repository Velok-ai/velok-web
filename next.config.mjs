/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/team-workflow-audit', destination: '/audit', permanent: true },
      { source: '/inbox-audit', destination: '/audit', permanent: true },
      { source: '/level', destination: '/diagnostic', permanent: true },
      { source: '/plan', destination: '/commencer', permanent: true },
      { source: '/contact', destination: '/commencer', permanent: true },
      { source: '/privacy', destination: '/confidentialite', permanent: true },
      { source: '/terms', destination: '/mentions-legales', permanent: true },
      { source: '/whitepaper/ai-in-operations', destination: '/guide/ia-operations', permanent: true },
    ];
  },
};

export default nextConfig;
