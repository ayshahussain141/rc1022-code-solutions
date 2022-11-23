/* exported zip */
function zip(first, second) {
  var array = [];
  var three = Math.min(first.length, second.length);
  for (var i = 0; i < three; i++) {
    if (first.length === second.length) {
      array[i] = [first[i], second[i]];
    }
    if (first.length !== second.length) {
      array[i] = [first[i], second[i]];
    }

  } return array;
}

// Define  function zip with two parameters first and second
// In the function code block
// assign and empty array to variable array
// assign the min method of the math property passing two arguments first.length and second.length to variable three
// create a for loop with i being assigned to 0 in the inititlization, i is less than three in the conditional expression and i is being incremeneted in the final expression
// in the loop code block write a conditionl statment if length property of the first object is strictly equal to length property of the second object first at and second at i is equal to array at i
// in the loop code block write another conditionl statment if length property of the first object is not strictly equal to length property of the second object first at and second at i is equal to array at i
// return array
