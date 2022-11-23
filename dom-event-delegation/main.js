
function work(event) {
  var target = event.target;
  if (target.tagName === 'BUTTON') {
    console.log(event.target);
    var number = event.target.closest('.task-list-item');
    console.log('event.target', number);
    number.remove();
  }

  return target;
}
var three = document.querySelector('ul');
three.addEventListener('click', work);
