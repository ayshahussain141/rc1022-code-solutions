var student = {
  firstName: 'Aysha',
  lastName: 'Hussain',
  age: 21
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOcupation = 'student';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOcupation:', student.previousOcupation);

console.log('value of student', student);

var vehicle = {
  make: 'lamborghini',
  model: ' Lamborghini Huracan STO',
  year: 2021
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = 'yes';
console.log('value of color:', vehicle['color']);
console.log('value of isConvertible:', vehicle['isConvertible']);
console.log('value of vehicle', vehicle);

var pet = {
  name: 'sky',
  type: 'cat'
};

delete pet.name;
delete pet.type;
console.log('value of pet', pet);
