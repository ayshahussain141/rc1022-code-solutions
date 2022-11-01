/* exported numVowels */
function numVowels(string) {
  var number = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'i' || string[i] === 'o' || string[i] === 'e' || string[i] === 'u' || string[i] === 'A' || string[i] === 'I' || string[i] === 'E' || string[i] === 'O') {
      number += 1;

    }
  }
  return number;
}
/*
//Define a function numVowels with one paramaeter string//
//assign the number 0 to a variable number//
write a for loop for for that assigns 0 to i in the intitalization//
//i is less then the length of the string in the conditom espression//
//increments i in the final expression//
//in the cose black write an if statment with
///string is strictly equal to the string a or
///string is strictly equal to the string e or
///string is strictly equal to the string i or
///string is strictly equal to the string o or
///string is strictly equal to the string u or
///string is strictly equal to the string A or
///string is strictly equal to the string E or
///string is strictly equal to the string U or
///string is strictly equal to the string I or
///string is strictly equal to the string O or
in the if code block add one to the numbers variabel
return number
*/
