const withPWA = require("next-pwa");
const headers = require("./headers")
module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers,
      },
    ];
  },
});