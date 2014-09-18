(function(module) {
	"use strict";
	var Codebender = {},
		embed = '<iframe class="codebender-plugin" src="https://codebender.cc/embed/$1?referrer=MySensors" allowTransparency="true" frameborder="0"></iframe>';

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
