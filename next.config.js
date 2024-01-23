/** @type {import('next').NextConfig} */
// next.config.js
import "./middleware/csp.js";

const nextConfig = {
    async headers() {
        return [
          {
            source: '/(.*)',
            headers: [
              {
                key: 'Content-Security-Policy',
                value: csp.toString(),
              },
            ],
          },
        ];
      },
}

module.exports = nextConfig
