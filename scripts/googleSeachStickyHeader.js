//Googleの検索フォームを、画面のスクロールトップに追従させる。	

//現在のURLを取得
var currentUrl = location.href

//Google検索結果のページの場合
if(currentUrl.indexOf("google") != -1) {
	var searchForm = document.querySelector('#searchform');
	var sfbg = document.querySelector(".sfbg.nojsv");
	sfbg.style.opacity = "0.5";

	var execStickyHeader = function(dom, option) {
		var bodyScrollTop = document.body.scrollTop;
		dom.style.top = bodyScrollTop + option + "px";
	}

	window.addEventListener('scroll', function() {
		execStickyHeader(searchForm, 15);
	});
}