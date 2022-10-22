var number = 67;
var numberTwo = 81;
var numberThree = 54;

var maximumValue = Math.max(number, numberTwo, numberThree);
console.log('The maximumvalue is', maximumValue);

var heros = ['Black Panther', 'Thor', 'Captain America', 'Black Widow'];
var randomNumber = Math.random() * heros.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex: ', randomIndex);
var randomHero = heros[randomIndex];
console.log('randomHero', randomHero);

var library = [
  {
    title: 'The Girls on the Train',
    author: 'Paula Hwkins'
  },
  {
    title: 'I Hunt Killers',
    author: 'Bary Lyga'
  },
  {
    title: 'Blood of my Blood',
    author: 'Bary Lyga'
  }
];
var lastBook = library.pop();
console.log('lastBook:', lastBook);
var firstBook = library.shift();
console.log('firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library', library);

var fullName = 'Aysha Hussain';
var firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyname: ', sayMyName);
