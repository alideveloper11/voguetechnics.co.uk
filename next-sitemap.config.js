const blogs = require('./src/data/blogs.json');
const dynamicSlugs = require('./src/data/dynamicSlugs.json');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.voguetechnics.co.uk',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 50000,
  transform: async (config, path) => {
    if (path === '/privacy-policy' || path === '/terms-and-conditions') {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.5,
        lastmod: new Date().toISOString(),
      };
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
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
