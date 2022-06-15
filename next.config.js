/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    env: {
        TALKJS_APP_ID: 'tym5Seze',
        NOVU_APP_ID: 'LAjhJY6W0z_k',
        NOVU_API_KEY: '099a1f8ef1ecfcb8321347f3c77920e1',
        BUILDER_IO_API_KEY: 'f1481eecce4b4ccab80524725f33f236'
    },
};

module.exports = nextConfig;
