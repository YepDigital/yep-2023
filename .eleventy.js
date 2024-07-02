const { DateTime } = require("luxon");
const htmlmin = require("html-minifier");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/fonts");
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");

  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath.endsWith(".html")) {
      return htmlmin.minify(content, {
        collapseWhitespace: true,
        removeComments: true,
        useShortDoctype: true,
      });
    }
    return content;
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  eleventyConfig.addLayoutAlias('default', 'default.njk');

  // Add shortlink redirects
  // https://www.raymondcamden.com/2021/06/22/dynamic-short-urls-with-eleventy
  // eleventyConfig.addCollection("goPages", collectionApi => {
  //   return collectionApi.getAll().filter(p => {
  //     if(p.data.go) return true;
  //     return false;
  //   });
  // });

  return {
    dir: {
      input: 'src',
			includes: "_includes",
			layouts: "_layouts",
    },
    templateFormats: ['md', 'njk', 'html'],
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk'
  };

};
