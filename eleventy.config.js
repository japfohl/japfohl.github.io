import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("CNAME");

  eleventyConfig.addCollection("untagged", function(collectionApi) {
    return collectionApi.getFilteredByTag("posts").filter(item => {
      const tags = item.data.tags || [];
      return tags.filter(tag => tag !== "posts").length === 0;
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
