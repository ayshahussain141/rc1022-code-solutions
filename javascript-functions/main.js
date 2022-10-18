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
  return person.firstName;
}
var fullName = getFirstName({ firstName: 'Aysha', lastName: 'Hussain' });
console.log('My First Name is', fullName);

function getLastElmement(array) {
  var numberofElements = element.length;

  var elementList = numberofElements - 1;
  var lastElement = element[elementList];
  return lastElement;
}
var element = getLastElmement(['poison', 'Ivy', 'propane', 'accessories']);

console.log('The last element is ', element);
