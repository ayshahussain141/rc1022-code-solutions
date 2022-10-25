var $light = document.querySelector('.container');
var $dark = document.querySelector('.full');

var $click = 'on';
$dark.addEventListener('click', function (event) {

  if ($click === 'off') {
    $light.className = 'container night';
    $dark.className = 'full dark';
    $click = 'on';
  } else {
    $light.className = 'container';
    $dark.className = 'full';
    $click = 'off';
  }

}
);
