//特定のキーを押したら発動
document.onkeydown = function(e) {
  var keyState = e.metaKey && e.ctrlKey && e.keyCode;
  switch (keyState) {
    //cmd+ctrl+Cを押下すると選択した文字列を別タブでGoogle検索(mac)
    //設定と比較する必要あり
    case 67:
      var selectString = getSelection().toString();
      window.open(
        "//www.google.co.jp/search?q=" + encodeURIComponent(selectString)
      );
      break;
  }
};
console.log("dekita");
