//特定のキーを押したら発動
document.onkeydown = function(e){
	var keyState = e.metaKey && e.ctrlKey && e.keyCode;

	switch(keyState) {
		//ctrl+Tを押下すると現在のページをtweet
		case 84:
			var title = document.title;
			//Youtubeついてたら消す
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
	  	//cmd+ctrl+Cを押下すると選択した文字列を別タブでGoogle検索
	  	case 67:
	  		var selectString = getSelection().toString();
	    	window.open("http://www.google.co.jp/search?q="
	      		+encodeURIComponent(selectString));
	    	break;
	}
}


