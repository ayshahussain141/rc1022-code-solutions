/* exported student */
var student = {
  firstName: 'Aysha',
  lastName: 'Hussain',
  subject: 'This'
};
function getFullName() {
  return this.firstName + ' ' + this.lastName;
}

student.getFullName = getFullName;
student.getFullName();

function getIntroduction() {
  return 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' +
this.subject + '.';
}

student.getIntroduction = getIntroduction;
student.getIntroduction();
// 'Hello, my name is Douglas Crockford and I am studying JavaScript
