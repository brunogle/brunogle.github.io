export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("images");

  eleventyConfig.addPassthroughCopy("posts/1-em-simulator/images");
  eleventyConfig.addPassthroughCopy("posts/1-em-simulator/js");
  eleventyConfig.addPassthroughCopy("posts/1-em-simulator/styles.css");

};
