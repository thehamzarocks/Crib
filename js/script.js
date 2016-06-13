(function (global) {
	var dc = {};
	var homeHtmlUrl = "snippets/home-snippet.html";
	var allLangsUrl = "data/langs.json";
	var langTitle = "snippets/langs-title-snippet.html";
	var lang = "snippets/lang-snippet.html";
	var about = "snippets/about-snippet.html";

	// Convenience function for inserting innerHTML for 'select'
	var insertHtml = function (selector, html) {
  		var targetElem = document.querySelector(selector);
  		targetElem.innerHTML = html;
	};

	//Todo: Add ajax loader

	// Return substitute of '{{propName}}' 
	// with propValue in given 'string' 
	var insertProperty = function (string, propName, propValue) {
  		var propToReplace = "{{" + propName + "}}";
  		string = string
    		.replace(new RegExp(propToReplace, "g"), propValue);
  		return string;
	}

	document.addEventListener("DOMContentLoaded", function (event) {
		$ajaxUtils.sendGetRequest (
			homeHtmlUrl, function(homeHtml) {
				document.querySelector("#main-content")
					.innerHTML = homeHtml;				
			},
			false //Ordinary HTML, not JSON
		);
	});

	dc.loadLangs = function() {
		$ajaxUtils.sendGetRequest(
			allLangsUrl,
			buildAndShowLangsHTML);
	};

	function buildAndShowLangsHTML (langs) {
		$ajaxUtils.sendGetRequest(
			langTitle,
			function(langTitleHTML) {				
				$ajaxUtils.sendGetRequest(
					lang,
					function(langHTML) {						
						var langViewsHTML = 
							buildLangViewsHTML(langs, langTitleHTML, langHTML);
						insertHtml("#main-content", langViewsHTML);						
					},
					false);
			},
			false);
	}

	function buildLangViewsHTML(langs, langTitleHTML, langHTML) {
		var finalhtml = langTitleHTML;
		finalhtml += "<section class='row'>";				
		//Loop over langs		
		for(var i=0; i<langs.length; i++) {
			var html = langHTML;						
			var name = "" + langs[i].name;			
			html = insertProperty(html, "name", name);			
			finalhtml +=  html;
		}

		finalhtml += "</section>";		
		return finalhtml;
	}


	dc.loadAbout = function() {
		$ajaxUtils.sendGetRequest(about, function(aboutHTML) {
			insertHtml("#main-content", aboutHTML);
		},
		false);
	}

	dc.loadLang = function(langName) {
		var langURL = "snippets/langs/" + langName + ".html";
		$ajaxUtils.sendGetRequest(langURL, function(langContent) {
			insertHtml("#main-content",langContent);
		},
		false);
	}


	global.$dc = dc;



})(window);