/* exported ransomCase */
function ransomCase(string) {
  var word = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      word += string[i].toLowerCase();
    } else {
      word += string[i].toUpperCase();

    }
  }
  return word;
}

/*
//Define a function ransomCase with one parameter string inh the coe block//
//assign an empty string to a variable word//
//write a for loop with
///0 being assigned to variable i in the initilization//
//i is less than string at length in the condition//
///i is being incremented in the final//
//in the code block write an id statement with i % 2 being stricly equal to zero//
returning the mehtof toLowerCase to the string at i object being added to word//
else return the upperCase method to the string at i being added to word//
return word;
*/
