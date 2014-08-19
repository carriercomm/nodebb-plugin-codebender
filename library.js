(function(module) {
	"use strict";
	var Codebender = {},
		embed = '<div class="codebender-container"><iframe class="codebender-plugin" src="https://codebender.cc/embed/$1" allowTransparency="true" frameborder="0"></iframe></div>';

	Codebender.parse = function(postContent, callback) {
		var	regularUrl = /<a href="(?:https?:\/\/)?(?:www\.)?(?:codebender\.cc)\/(.+)">.+<\/a>/g;
		var	embedUrl = /<a href="(?:https?:\/\/)?(?:www\.)codebender\.cc\/embed\/([\w\-_]+)">.+<\/a>/;

		if (postContent.match(embedUrl)) {
			postContent = postContent.replace(embedUrl, embed);
		}
		if (postContent.match(regularUrl)) {
			postContent = postContent.replace(regularUrl, embed);
		}

		callback(null, postContent);
	};

	module.exports = Codebender;
}(module));
