const htmlmin = require("html-minifier");
const eleventyAutoCacheBuster = require("eleventy-auto-cache-buster");

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

  eleventyConfig.addLayoutAlias('default', 'default.njk');

	eleventyConfig.addPlugin(eleventyAutoCacheBuster);

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
