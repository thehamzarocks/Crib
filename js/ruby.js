(function(global) {	
	var rb = {};
	
	

	rb.loadConditionals = function() {
		$ajaxUtils.sendGetRequest("snippets/langs/Ruby/Conditionals.html", function(html) {
			document.querySelector("#conditionals").innerHTML = html;
		},
		false);
	}

	rb.loadLoops = function() {
		$ajaxUtils.sendGetRequest("snippets/langs/Ruby/Loops.html", function(html) {
			document.querySelector("#loops").innerHTML = html;
		},
		false);
	}

	rb.loadMethods = function() {
		$ajaxUtils.sendGetRequest("snippets/langs/Ruby/Methods.html", function(html) {
			document.querySelector("#methods").innerHTML = html;
		},
		false);
	}

	rb.loadBlocks = function() {
		$ajaxUtils.sendGetRequest("snippets/langs/Ruby/Blocks.html", function(html) {
			document.querySelector("#blocks").innerHTML = html;
		},
		false);
	}

	rb.loadFiles = function() {
		$ajaxUtils.sendGetRequest("snippets/langs/Ruby/Files.html", function(html) {
			document.querySelector("#files").innerHTML = html;
		},
		false);
	}

	rb.loadStrings = function() {
		$ajaxUtils.sendGetRequest("snippets/langs/Ruby/Strings.html", function(html) {
			document.querySelector("#strings").innerHTML = html;
		},
		false);
	}

	


	global.$rb = rb;

})(window);