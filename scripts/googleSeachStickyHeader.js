/*Googleの検索フォームを、画面のスクロールトップに追従させる。*/
//現在のURLを取得
var currentUrl = location.href
//スティッキーヘッダー対象のDOMリスト
var DOMList = [];

//Google検索結果のページの場合
if(currentUrl.indexOf("google") != -1) {
	var searchForm = document.querySelector('#searchform');
	var sfbg = document.querySelector(".sfbg.nojsv");
  var searchOption = document.querySelector('#hdtb-msb');
  sfbg.style.opacity = "0.5";

  DOMList[0] = searchForm;
  DOMList[1] = searchOption;

	window.addEventListener('scroll', function() {
		execStickyHeader(DOMList, 15);
	});
}

//スティッキーヘッダーメソッド
var execStickyHeader = function(domList, option) {
  var bodyScrollTop = document.body.scrollTop;
  for(dom of domList) {
    dom.style.top = bodyScrollTop + option + "px";
  }
}
