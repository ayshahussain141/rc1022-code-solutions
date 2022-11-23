
var firstInput = (document.forms[0].elements[0]);
var secondInput = (document.forms[0].elements[1]);
var text = document.forms[0].elements[2];

function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name');
}
firstInput.addEventListener('focus', handleFocus);
secondInput.addEventListener('focus', handleFocus);
text.addEventListener('focus', handleFocus);

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name');
}
firstInput.addEventListener('blur', handleBlur);
secondInput.addEventListener('blur', handleBlur);
text.addEventListener('blur', handleBlur);

function handleInput(event) {
  console.log(event.target.name);
  console.log('value of name:', event.target.value);
}

firstInput.addEventListener('input', handleInput);
secondInput.addEventListener('input', handleInput);
text.addEventListener('input', handleInput);
