export default {
	layout: "post.liquid",
	tags: [
		"posts"
	],
	eleventyComputed: {
		eleventyExcludeFromCollections: (data) => {
			if (data.eleventyExcludeFromCollections) {
				return true;
			}
			if (data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
				return true;
			}
			return false;
		},
		permalink: (data) => {
			if (data.permalink === false) {
				return false;
			}
			if (data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
				return false;
			}
			return data.permalink;
		}
	}
};
