(function(module) {
	"use strict";
	var Codebender = {},
		embed = '<iframe class="codebender-plugin" src="https://codebender.cc/embed/$1?referrer=MySensors" allowTransparency="true" frameborder="0"></iframe>';

	Codebender.parse = function(data, callback) {
		var	regularUrl = /<a href="(?:https?:\/\/)?(?:www\.)?(?:codebender\.cc)\/(.+)">.+<\/a>/g;
		var	embedUrl = /<a href="(?:https?:\/\/)?(?:www\.)codebender\.cc\/embed\/([\w\-_]+)">.+<\/a>/;

		if (data && data.postData && data.postData.content) {	
			if (data.postData.content.match(embedUrl)) {
				data.postData.content = data.postData.content.replace(embedUrl, embed);
			}
			if (data.postData.content.match(regularUrl)) {
				data.postData.content = data.postData.content.replace(regularUrl, embed);
			}
		}

		callback(null, data);
	};

	module.exports = Codebender;
}(module));
