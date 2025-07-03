const path = require("path");

module.exports = function(eleventyConfig) {
  // Passthrough from posts/ to ../docs/blog/
  eleventyConfig.addPassthroughCopy({ "../style.css": "style.css" });
  eleventyConfig.addPassthroughCopy({ "../logo.png": "logo.png" });
  eleventyConfig.addPassthroughCopy({ "../favicon.ico": "favicon.ico" });
  eleventyConfig.addPassthroughCopy({ "../logo-reveal.mp4": "logo-reveal.mp4" });

  // Date filter
  eleventyConfig.addFilter("readableDate", function(dateObj) {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  });

  return {
    dir: {
      input: "blog",             // where your Markdown lives
      includes: "_includes",   // path to layout.njk
      output: "docs/blog"      // final output
    }
  };
};
