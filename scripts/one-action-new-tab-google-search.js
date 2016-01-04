var selection = getSelection();

if(selection != "") {
	document.onkeydown = function(e){
	  var str = selection.toString();

	  if(e.metaKey && e.ctrlKey && e.keyCode === 67){
	    window.open("http://www.google.co.jp/search?q="
	      +encodeURIComponent(str));
	  }
	}
}

