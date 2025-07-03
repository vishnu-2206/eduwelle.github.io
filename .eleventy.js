const path = require("path");

module.exports = function(eleventyConfig) {
  // ✅ Passthrough copy for static assets from parent directory
  eleventyConfig.addPassthroughCopy({ "../style.css": "style.css" });
  eleventyConfig.addPassthroughCopy({ "../logo.png": "logo.png" });
  eleventyConfig.addPassthroughCopy({ "../favicon.ico": "favicon.ico" });
  eleventyConfig.addPassthroughCopy({ "../logo-reveal.mp4": "logo-reveal.mp4" });

  // ✅ Add date filter for blog post dates
  eleventyConfig.addFilter("readableDate", function(dateObj) {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  });

  // ✅ Add global baseurl (for GitHub Pages deployment under /eduwelle)
  eleventyConfig.addGlobalData("baseurl", "/eduwelle");

  return {
    dir: {
      input: "blog",             // Source: blog directory
      includes: "_includes",     // Layouts folder (layout.njk)
      output: "docs/blog"        // Build output path
    }
  };
};
