const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Add readableDate filter for Nunjucks
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("d LLLL yyyy");
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    pathPrefix: "/blog/"
  };
};
