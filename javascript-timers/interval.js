var three = document.querySelector('h1');

var content = 4;
var countDown = setInterval(function () {
  content--;
  if (content === 3) {
    three.textContent = '3';
  }
  if (content === 2) {
    three.textContent = '2';
  }
  if (content === 1) {
    three.textContent = '1';
  }
  if (content === 0) {
    three.textContent = '~Earth Beeeelowwwwww Us~';
    clearInterval(countDown);
  }
}, 1000);
