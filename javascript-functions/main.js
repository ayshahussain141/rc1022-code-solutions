function convertMinutesTOSeconds(minutes) {
  var seconds = 60 * minutes;
  return seconds;
}
var convertMinutesToSeconds = convertMinutesTOSeconds(7);
console.log('value of convertMinutesToseconds:', convertMinutesToSeconds);

function greet(name) {
  return name;
}
var name = greet('Aysha');
console.log('Hey', name);

function getArea(width, height) {
  var area = width * height;
  return area;
}
var Area = getArea(17, 42);
console.log('The area is:', Area);

function getFirstName(person) {
  return person;
}

var fullName = getFirstName({ firstName: 'Aysha', lastName: 'Hussain' });
console.log('My First Name is', fullName.firstName);

function getLastElmement(array) {
  return array;
}
var element = getLastElmement(['poison', 'Ivy', 'propane', 'accessories']);
var numberofElements = element.length;

var elementList = numberofElements - 1;
var lastElement = element[elementList];
console.log('The last element is ', lastElement);
