document.onkeydown = function(e){

	if(e.metaKey && e.ctrlKey && e.keyCode === 84) {
		var title = document.title;
		if(title.indexOf(" - YouTube") != -1) {
			title = title.replace(" - YouTube", "");
		}
		
	  	if(confirm('Tweet OK?')) {
	  		window.open('http://twitter.com/intent/tweet?text='
	  			+ encodeURIComponent(title)
	  			+'%20'
				+'&url='
  				+ encodeURIComponent(window.location.href));
	  	}
	}
}

