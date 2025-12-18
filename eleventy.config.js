export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("images");

  eleventyConfig.addPassthroughCopy({"posts/1-em-simulator/images": "posts/emsim/images"});
  eleventyConfig.addPassthroughCopy({"posts/1-em-simulator/js": "posts/emsim/js"});
  eleventyConfig.addPassthroughCopy({"posts/1-em-simulator/styles.css": "posts/emsim/styles.css"});

  eleventyConfig.addPassthroughCopy({"posts/4-lna/lna.pdf": "posts/lna/lna.pdf"});

};
