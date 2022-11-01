var $forms = document.forms[0];
console.log($forms);

var three = document.forms[0].elements.name;
var four = document.forms[0].elements.email;
var five = document.forms[0].elements.message;

function logsubmit(event) {
  event.preventDefault();
  var $object = {
    name: three.value,
    email: four.value,
    message: five.value
  };
  console.log($object);
  event.preventDefault();

  document.forms[0].reset();
}

$forms.addEventListener('submit', logsubmit);
