document.onkeydown = function(e){
	var keyState = e.metaKey && e.ctrlKey && e.keyCode;

	switch(keyState) {
		case 84:
			var title = document.title;
			if(title.indexOf(" - YouTube") != -1) {
				title = title.replace(" - YouTube", "");
			};
		  	if(confirm('Tweet OK?')) {
		  		window.open('http://twitter.com/intent/tweet?text='
		  			+ encodeURIComponent(title)
		  			+'%20'
					+'&url='
	  				+ encodeURIComponent(window.location.href));
		  	};
	  		break;
	  	case 67:
	  		var selectString = getSelection().toString();
	    	window.open("http://www.google.co.jp/search?q="
	      		+encodeURIComponent(selectString));
	    	break;
	}
}


