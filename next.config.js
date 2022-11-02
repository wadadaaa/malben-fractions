const remarkMath = require('remark-math')
const rehypeKatex = require('rehype-katex')

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_flexsearch: true,
  unstable_staticImage: true,
  mdxOptions: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});

module.exports = withNextra({
  // reactStrictMode: true,
  experiments: {
    esmExternals: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/fractions',
        permanent: true,
      },
    ]
  },
});
