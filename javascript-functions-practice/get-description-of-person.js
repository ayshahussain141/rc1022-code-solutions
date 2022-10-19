/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var name = person.name;
  var job = person.occupation;
  var birthPlace = person.birthPlace;
  return name + ' is a ' + job + ' from ' + birthPlace + '.';
}
