var $container = document.querySelector('.tab-container');

var $tab = document.querySelectorAll('.tab');

var $view = document.querySelectorAll('.view');

$container.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if ($tab[i] === event.target) {
        event.target.className = 'tab active';
      } else {
        $tab[i].className = 'tab';
      }
    }
  }
  var value = event.target.getAttribute('data-view');
  for (var a = 0; a < $view.length; a++) {
    if ($view[a].getAttribute('data-view') === value) {
      $view[a].className = 'view';
    } else {
      $view[a].className = 'view hidden';
    }
  }
});
