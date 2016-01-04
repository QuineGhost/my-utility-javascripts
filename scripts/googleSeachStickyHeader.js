//Googleの検索フォームを、画面のスクロールトップに追従させる。	
var url = location.href

if(url.indexOf("google") != -1) {
	var Sticky = {};

	var searchForm = document.querySelector('#searchform');
	var sfbg = document.querySelector(".sfbg.nojsv");
	sfbg.style.opacity = "0.5";

	var sticky = function(dom, option) {
		var bodyScrollTop = document.body.scrollTop;
		dom.style.top = bodyScrollTop + option + "px";
	}

	window.addEventListener('scroll', function() {
		sticky(searchForm, 15);
	});
}


