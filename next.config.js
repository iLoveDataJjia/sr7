/** @type {import('next').NextConfig} */
const nextConfig = {
  // SVGR (https://react-svgr.com/docs/next/ & https://github.com/vercel/next.js/issues/48177#issuecomment-1506251112)
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.(".svg"));

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        // issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },

  // Output build path
  distDir: "dist",

  // Static export (https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true, // Remove "".html" (https://stackoverflow.com/questions/62867105/how-to-deal-with-nextjs-exporting-files-with-html-extension-but-inlink-there)

  // Redirect (https://nextjs.org/docs/pages/api-reference/next-config-js/redirects & not usable with static export)
  // async redirects() {
  //   return [
  //     {
  //       source: "//:path*",
  //       destination: "/characters/clara",
  //       permanent: false,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
