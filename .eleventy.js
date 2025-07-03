const path = require("path");

module.exports = function(eleventyConfig) {
  // Passthrough from parent to output folder
  eleventyConfig.addPassthroughCopy({ "../style.css": "style.css" });
  eleventyConfig.addPassthroughCopy({ "../logo.png": "logo.png" });
  eleventyConfig.addPassthroughCopy({ "../favicon.ico": "favicon.ico" });
  eleventyConfig.addPassthroughCopy({ "../logo-reveal.mp4": "logo-reveal.mp4" });

  // Add readable date filter
  eleventyConfig.addFilter("readableDate", function(dateObj) {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  });

  // Add global data (baseurl for GitHub Pages deployment)
  eleventyConfig.addGlobalData("baseurl", "/eduwelle");

  return {
    dir: {
      input: "blog",             // where Markdown and index.njk live
      includes: "_includes",     // layout.njk location
      output: "docs/blog"        // final blog build location
    }
  };
};
