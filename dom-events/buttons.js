
var $click = document.querySelector('.click-button');
$click.addEventListener('click', function (event) {
  console.log('button clicked');
  console.log('  event.click:', event.target);
});

var $mouseHover = document.querySelector('.hover-button');
$mouseHover.addEventListener('mouseover', function (event) {
  console.log('hovered');
  console.log('mousehover', event.target);
}
);

var $doubleClick = document.querySelector('.double-click-button');
$doubleClick.addEventListener('dblclick', function (event) {
  console.log('Double click');
  console.log('double click', event.target);
});
