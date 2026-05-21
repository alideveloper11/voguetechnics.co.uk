const blogs = require('./src/data/blogs.json');
const dynamicSlugs = require('./src/data/dynamicSlugs.json');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.voguetechnics.co.uk',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 50000,
  additionalPaths: async () => {
    const blogPaths = blogs.map((blog) => ({
      loc: `/blog/${blog.slug}`,
      changefreq: 'monthly',
      priority: 0.6,
    }));

    const dynamicPaths = dynamicSlugs.map((url) => ({
      loc: url.replace('https://www.voguetechnics.co.uk', ''),
      changefreq: 'monthly',
      priority: 0.5,
    }));

    return [...blogPaths, ...dynamicPaths];
  },
};
