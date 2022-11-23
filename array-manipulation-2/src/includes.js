/* exported includes */
function includes(array, value) {

  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  if (array !== value) {
    return false;
  }
}

/*
// Deine a function includes with two parameters array and value//
write a for loop with 0 being assigned to i in the initilization///
i is less length property of the array object//
increment i in the final//
in the loop code block  write an if statment with array at i being strictly
equal to value
returns true//
write another if statment  with array at i being not strictly
equal to value
returns false
*/
