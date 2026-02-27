const eleventyAutoCacheBuster = require("eleventy-auto-cache-buster");

module.exports = function(eleventyConfig) {
  const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
  const isUserOrOrgPagesRepo = repoName.endsWith(".github.io");
  const defaultPathPrefix = process.env.GITHUB_ACTIONS
    ? (isUserOrOrgPagesRepo ? "/" : `/${repoName}/`)
    : "/";
  const pathPrefix = process.env.ELEVENTY_PATH_PREFIX || defaultPathPrefix;

  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/fonts");
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
  eleventyConfig.addLayoutAlias('default', 'default.njk');

	eleventyConfig.addPlugin(eleventyAutoCacheBuster);

  return {
    dir: {
      input: 'src',
				includes: "_includes",
				layouts: "_layouts",
    },
    pathPrefix,
    templateFormats: ['md', 'njk', 'html'],
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk'
  };

};
