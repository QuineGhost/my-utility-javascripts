//Googleの検索フォームを、画面のスクロールトップに追従させる。	
var searchForm = document.querySelector('#searchform');
var sfbg = document.querySelector(".sfbg.nojsv");

window.addEventListener.('load', function() {
	sfbg.style.opacity = "0.5";
})

window.addEventListener('scroll', function() {
	var body = document.body.scrollTop;
	searchForm.style.top = body + 15 + "px";
})


