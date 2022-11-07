
var $button = document.querySelector('.button');
var $click = document.querySelector('.click');

var four = document.querySelector('.container-two');
var three = document.querySelector('.container');

$button.addEventListener('click', function (event) {
  three.className = 'container-two';
  four.className = 'container';
});

$click.addEventListener('click', function (event) {
  four.className = 'container-two';
  three.className = 'container';
});
