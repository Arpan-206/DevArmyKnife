const withPWA = require("next-pwa");
const { createSecureHeaders } = require("next-secure-headers");
const headers = require("./headers");
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
        source: "/(.*)",
        headers: createSecureHeaders({
          contentSecurityPolicy: {
            directives: {
              defaultSrc: "'self'",
              imgSrc: ["'self'", "data:", "https://api.producthunt.com/", "https://devarmyknife.hackersreboot.tech/", "https://www.netlify.com/img/global/badges/"],
              styleSrc: ["'self'", "'unsafe-inline'"],
              fontSrc: ["'self'", "https://fonts.googleapis.com/"],
              scriptSrc: ["'self'", "https://umami-hrbt.herokuapp.com/", "'unsafe-eval'"]
            },
          },
          forceHTTPSRedirect: [
            true,
            { maxAge: 60 * 60 * 24 * 4, includeSubDomains: true },
          ],
          referrerPolicy: "same-origin",
          frameGuard: "sameorigin",
          noopen: "noopen",
          nosniff: "nosniff",
          xssProtection: "sanitize",
          referrerPolicy: "no-referrer-when-downgrade",
          xFrameOptions: "sameorigin",
        }),
      },
    ];
  },
});
