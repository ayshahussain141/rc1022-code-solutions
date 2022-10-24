
var $click = document.querySelector('.click-button');
$click.addEventListener('click', function (event) {
  console.log('button clicked');
});

var $mouseHover = document.querySelector('.hover-button');
$mouseHover.addEventListener('mouseover', function (event) {
  console.log('hovered');
}
);

var $doubleClick = document.querySelector('.double-click-button');
$doubleClick.addEventListener('dblclick', function (event) {
  console.log('Double click');
});
