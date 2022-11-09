var three = document.querySelector('h1');
function countDown() {
  three.textContent = 3;
}
function Down() {
  three.textContent = 2;
}
function four() {
  three.textContent = 1;
}
function final() {
  three.textContent = '~Earth Beeeelowwwwww Us~';
}
setTimeout(countDown, 3000);
setTimeout(Down, 5000);
setTimeout(four, 7000);
setTimeout(final, 10000);
