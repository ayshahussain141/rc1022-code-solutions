var $type = document.querySelectorAll('.words');

var count = 0;

function keys(event) {
  if (event.key === $type[count].textContent) {
    $type[count].className = 'words green';
    $type[count + 1].className = 'words underline';
    count++;

  } else if (event.key !== $type[count].textContent) {
    $type[count].className = 'words red';
  }
}
document.addEventListener('keydown', keys);
