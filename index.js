;(function(){
	if(typeof module != 'undefined'){
		module.exports = boilerplate;
	}

	if(typeof window != 'undefined'){
		!window.boilerplate && (window.boilerplate = boilerplate);
	}

	function boilerplate(){
		return 'boilerplate';
	}

})();