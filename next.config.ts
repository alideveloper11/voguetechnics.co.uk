import type { NextConfig } from "next";

// GTM's container fires Google Analytics, Google Ads conversion tracking
// (doubleclick.net) and Microsoft Clarity today — confirmed by actually
// loading the site and checking the console for CSP violations, since
// GTM's tag config lives in the dashboard, not this codebase. GTM can add
// further tags at any time without a code deploy; a brand new vendor (e.g.
// Meta Pixel, Hotjar) would need a matching addition here when it's added.
const isDev = process.env.NODE_ENV !== "production";

const contentSecurityPolicy = [
  "default-src 'self'",
  // 'unsafe-inline' is required for the GTM bootstrap snippet and the
  // JSON-LD structured data script. A nonce-based policy would remove this,
  // but requires per-request middleware, which forces every page to render
  // dynamically instead of using this site's static generation.
  // 'unsafe-eval' is added only in dev: React's dev-mode tooling (error
  // overlay, Fast Refresh) uses eval() for stack traces; production React
  // never calls eval(), so this is not relaxed in the deployed build.
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://*.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://*.doubleclick.net https://*.clarity.ms`,
  // Inline styles are required for the CSS custom properties used by
  // Tailwind-authored components and inline style props throughout the app.
  "style-src 'self' 'unsafe-inline'",
  // Google Ads' remarketing/conversion pixels fire from country-specific
  // TLDs (google.com.pk, google.co.uk, etc.) depending on visitor locale,
  // which isn't practical to allow-list host by host — img-src is the
  // lowest-risk directive to broaden, so it's opened to any HTTPS source.
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  // ws:/wss: is only needed in dev for Next.js's Fast Refresh HMR socket.
  `connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.doubleclick.net https://*.google.com https://*.clarity.ms${isDev ? " ws: wss:" : ""}`,
  "frame-src 'self' https://www.youtube.com https://*.googletagmanager.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  /* config options here */

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: contentSecurityPolicy },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.voguetechnics.co.uk",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "blogs-tbsmf.ondigitalocean.app",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      // Canonicalize the apex/non-www domain to www — matches the www
      // canonical URLs already used across metadata/sitemap generation.
      {
        source: "/:path*",
        has: [{ type: "host", value: "voguetechnics.co.uk" }],
        destination: "https://www.voguetechnics.co.uk/:path*",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/blogs",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blogs/:slug*",
        destination: "/blog", // Since we don't have sub-blog routes yet
        permanent: true,
      },
      {
        source: "/about-us/contact-us",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/range-",
        destination: "/",
        permanent: true,
      },
      {
        // Common typo / spacing in the URL
        source: "/services/timing chain-replacement",
        destination: "/services/timing-chain-replacement",
        permanent: true,
      },
      {
        // Common misspelling seen in browsers
        source: "/services/timing-chaiin-replacement",
        destination: "/services/timing-chain-replacement",
        permanent: true,
      },

      // Range Rover SVR pages → /range-rover-engines
      {
        source: "/range-rover-svr-aj133-engines",
        destination: "/range-rover-engines",
        permanent: true,
      },

      // BMW X5 specific model pages → /bmw-engines
      {
        source: "/bmw-x5-xdrive-30d-engines",
        destination: "/bmw-engines",
        permanent: true,
      },
      {
        source: "/bmw-x5-sdrive-25d-engines",
        destination: "/bmw-engines",
        permanent: true,
      },
      {
        source: "/bmw-x5-m50d-engines",
        destination: "/bmw-engines",
        permanent: true,
      },
      {
        source: "/bmw-x5-xdrive-35d-engines",
        destination: "/bmw-engines",
        permanent: true,
      },
      {
        source: "/bmw-x5-xdrive-40d-engines",
        destination: "/bmw-engines",
        permanent: true,
      },
      {
        source: "/bmw-x5-xdrive-25d-engines",
        destination: "/bmw-engines",
        permanent: true,
      },

      // Audi engine code pages → /audi-engines
      {
        source: "/audi-cayc-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-crkb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cdaa-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cjsb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cjza-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-bpu-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cpta-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-ccga-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cayb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-ccfc-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-bzb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cmba-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cyvb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cxsa-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-caxc-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-chzd-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-ddya-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cjsa-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-czca-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cxsb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-dada-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-czea-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cbzb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cmsa-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-byt-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      // AUDI redirects
      {
        source: "/audi-cjgc-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cypa-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-clab-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cczc-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cgla-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-ccma-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-caeb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-djha-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cfsa-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cvua-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cdlc-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-caha-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-bre-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cmgb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cnha-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cuvc-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cmga-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-ctbc-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-bna-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cbaa-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cjwc-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cgka-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-crlc-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-ccaa-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cjxc-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-bpy-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cncb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      { source: "/audi-15", destination: "/audi-engines", permanent: true },
      {
        source: "/audi-capa-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-ckvb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-chhc-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cgkb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cagb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-crtf-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      { source: "/audi-14", destination: "/audi-engines", permanent: true },
      {
        source: "/audi-asb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      { source: "/audi-6", destination: "/audi-engines", permanent: true },
      {
        source: "/audi-cdyc-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-caja-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cyrb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cata-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-csud-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cgqb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cjma-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cdlh-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-czza-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cpsa-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-ceua-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-bvn-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-clja-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cukb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      { source: "/audi-3", destination: "/audi-engines", permanent: true },
      {
        source: "/audi-cbab-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cuna-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cwuc-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-tt-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cncd-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-crua-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-crtd-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-ctuc-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cuea-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cjca-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-caga-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-bkd-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-bhz-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cdud-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cjcd-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-ctbd-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cbbb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-crea-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-ccza-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      { source: "/audi-11", destination: "/audi-engines", permanent: true },
      {
        source: "/audi-chhb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-bvj-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cwub-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-caka-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-buh-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cntc-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cfgb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-bat-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cfhb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cyrc-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cyfb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cdla-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-deha-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cmfb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-dcpc-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-ctva-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      { source: "/audi-17", destination: "/audi-engines", permanent: true },
      {
        source: "/audi-bmb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-crca-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-crdb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-dfua-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cdlb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cpnb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-claa-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-bvg-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cuvd-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cdya-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cvub-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-czve-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-buy-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cjxg-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cmfa-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cjxd-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cjwe-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-dayb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-crlb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-ccfa-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cjtc-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cgxc-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      { source: "/audi-12", destination: "/audi-engines", permanent: true },
      {
        source: "/audi-bxa-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-blx-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cawb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-bly-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cffa-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-blr-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cfhd-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-ckvc-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cgwc-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cjgd-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cgwb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cffb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      { source: "/audi-8", destination: "/audi-engines", permanent: true },
      { source: "/audi-18", destination: "/audi-engines", permanent: true },
      {
        source: "/audi-cjcb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cgxb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cduc-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-ctua-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-czha-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-czac-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      { source: "/audi-2", destination: "/audi-engines", permanent: true },
      {
        source: "/audi-bmn-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-crbc-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-czvd-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-ceuc-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      { source: "/audi-7", destination: "/audi-engines", permanent: true },
      {
        source: "/audi-chma-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cgld-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-culb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cpna-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cynb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cred-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-ctud-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cglb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cjtb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-caea-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-ccla-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cdnb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-chja-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-bun-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-caed-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-crte-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cglc-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cjga-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-desa-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cnaa-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-ccwb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cjcc-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-ddta-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-bpp-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-2-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cvza-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-crec-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-ctba-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-ctwa-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cjwb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cjxb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cada-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cana-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-djhb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cvmd-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cgwd-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      { source: "/audi-1", destination: "/audi-engines", permanent: true },
      {
        source: "/audi-cdyb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      { source: "/audi-9", destination: "/audi-engines", permanent: true },
      {
        source: "/audi-cvkb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cuwa-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-ccta-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cdta-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cmha-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cmda-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-czvf-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cgwa-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-ctge-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-caua-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-bar-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cnce-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cbfa-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-ctxa-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cdtb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-creg-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cagc-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-btr-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-camb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-daxc-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-czpb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cfka-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-dbpa-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-ddwa-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cpmb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-ckvd-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cymc-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cama-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-crtc-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-ctga-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      { source: "/audi-5", destination: "/audi-engines", permanent: true },
      {
        source: "/audi-cwza-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      { source: "/audi-16", destination: "/audi-engines", permanent: true },
      {
        source: "/audi-cdma-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-casa-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      { source: "/audi-10", destination: "/audi-engines", permanent: true },
      {
        source: "/audi-ctcc-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-bmk-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-clzb-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cand-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-ceta-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cjxf-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      { source: "/audi-13", destination: "/audi-engines", permanent: true },
      {
        source: "/audi-cgta-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-byh-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-cesa-engines",
        destination: "/audi-engines",
        permanent: true,
      },
      {
        source: "/audi-ctda-engines",
        destination: "/audi-engines",
        permanent: true,
      },

      // BMW redirects
      {
        source: "/bmw-b47c20a-engines",
        destination: "/bmw-engines",
        permanent: true,
      },

      // RANGE-ROVER redirects
      {
        source: "/range-rover-276dt-engines",
        destination: "/range-rover-engines",
        permanent: true,
      },
      {
        source: "/range-rover-204dtd-engines",
        destination: "/range-rover-engines",
        permanent: true,
      },
      {
        source: "/range-rover-508pn-engines",
        destination: "/range-rover-engines",
        permanent: true,
      },
      {
        source: "/range-rover-224dt-engines",
        destination: "/range-rover-engines",
        permanent: true,
      },
      {
        source: "/range-rover-368dt-engines",
        destination: "/range-rover-engines",
        permanent: true,
      },
      {
        source: "/range-rover-448pn-engines",
        destination: "/range-rover-engines",
        permanent: true,
      },
      {
        source: "/range-rover-428ps-engines",
        destination: "/range-rover-engines",
        permanent: true,
      },
      {
        source: "/range-rover-30hd0d-engines",
        destination: "/range-rover-engines",
        permanent: true,
      },
      {
        source: "/range-rover-306dt-engines",
        destination: "/range-rover-engines",
        permanent: true,
      },
      {
        source: "/range-rover-30ddtx-engines",
        destination: "/range-rover-engines",
        permanent: true,
      },
      {
        source: "/range-rover-306ps-engines",
        destination: "/range-rover-engines",
        permanent: true,
      },
      {
        source: "/range-rover-204dta-engines",
        destination: "/range-rover-engines",
        permanent: true,
      },
      {
        source: "/range-rover-pt204-engines",
        destination: "/range-rover-engines",
        permanent: true,
      },
      {
        source: "/range-rover-204pt-engines",
        destination: "/range-rover-engines",
        permanent: true,
      },
      {
        source: "/range-rover-448dt-engines",
        destination: "/range-rover-engines",
        permanent: true,
      },
      {
        source: "/range-rover-508ps-engines",
        destination: "/range-rover-engines",
        permanent: true,
      },
      {
        source: "/range-rover-m62-b44-engines",
        destination: "/range-rover-engines",
        permanent: true,
      },

      // LAND-ROVER redirects
      {
        source: "/land-rover-30hd0d-engines",
        destination: "/land-rover-engines",
        permanent: true,
      },
      {
        source: "/land-rover-306dt-engines",
        destination: "/land-rover-engines",
        permanent: true,
      },
      {
        source: "/land-rover-zsd-422-engines",
        destination: "/land-rover-engines",
        permanent: true,
      },
      {
        source: "/land-rover-306ps-engines",
        destination: "/land-rover-engines",
        permanent: true,
      },
      {
        source: "/land-rover-204dta-engines",
        destination: "/land-rover-engines",
        permanent: true,
      },
      {
        source: "/land-rover-224dt-engines",
        destination: "/land-rover-engines",
        permanent: true,
      },
      {
        source: "/land-rover-406pn-engines",
        destination: "/land-rover-engines",
        permanent: true,
      },
      {
        source: "/land-rover-204pt-engines",
        destination: "/land-rover-engines",
        permanent: true,
      },
      {
        source: "/land-rover-204dtd-engines",
        destination: "/land-rover-engines",
        permanent: true,
      },
      {
        source: "/land-rover-7",
        destination: "/land-rover-engines",
        permanent: true,
      },
      {
        source: "/land-rover-4",
        destination: "/land-rover-engines",
        permanent: true,
      },
      {
        source: "/land-rover-6",
        destination: "/land-rover-engines",
        permanent: true,
      },
      {
        source: "/land-rover-448pn-engines",
        destination: "/land-rover-engines",
        permanent: true,
      },
      {
        source: "/land-rover-8",
        destination: "/land-rover-engines",
        permanent: true,
      },
      {
        source: "/land-rover-276dt-engines",
        destination: "/land-rover-engines",
        permanent: true,
      },
      {
        source: "/land-rover-30ddtx-engines",
        destination: "/land-rover-engines",
        permanent: true,
      },

      // JAGUAR redirects
      {
        source: "/jaguar-aj-v6-engines",
        destination: "/jaguar-engines",
        permanent: true,
      },
      {
        source: "/jaguar-sv8ts-engines",
        destination: "/jaguar-engines",
        permanent: true,
      },
      {
        source: "/jaguar-306ps-engines",
        destination: "/jaguar-engines",
        permanent: true,
      },
      {
        source: "/jaguar-ajv6d-engines",
        destination: "/jaguar-engines",
        permanent: true,
      },
      {
        source: "/jaguar-aj-133s-engines",
        destination: "/jaguar-engines",
        permanent: true,
      },
      { source: "/jaguar-4", destination: "/jaguar-engines", permanent: true },
      {
        source: "/jaguar-306dt-engines",
        destination: "/jaguar-engines",
        permanent: true,
      },
      {
        source: "/jaguar-508pn-engines",
        destination: "/jaguar-engines",
        permanent: true,
      },
      {
        source: "/jaguar-204dtd-engines",
        destination: "/jaguar-engines",
        permanent: true,
      },
      {
        source: "/jaguar-204dta-engines",
        destination: "/jaguar-engines",
        permanent: true,
      },
      {
        source: "/jaguar-pt204-engines",
        destination: "/jaguar-engines",
        permanent: true,
      },
      {
        source: "/jaguar-204pt-engines",
        destination: "/jaguar-engines",
        permanent: true,
      },
      {
        source: "/jaguar-224dt-engines",
        destination: "/jaguar-engines",
        permanent: true,
      },
      { source: "/jaguar-2", destination: "/jaguar-engines", permanent: true },
      {
        source: "/jaguar-aj-126-engines",
        destination: "/jaguar-engines",
        permanent: true,
      },
      {
        source: "/jaguar-aj6wg-engines",
        destination: "/jaguar-engines",
        permanent: true,
      },
      {
        source: "/jaguar-aj8ft-engines",
        destination: "/jaguar-engines",
        permanent: true,
      },
      { source: "/jaguar-6", destination: "/jaguar-engines", permanent: true },
      { source: "/jaguar-5", destination: "/jaguar-engines", permanent: true },
    ];
  },
};

export default nextConfig;
