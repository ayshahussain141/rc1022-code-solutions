/* exported intersection */
function intersection(first, second) {
  var array = [];

  var one = first.length;
  var two = second.length;

  for (var i = 0; i < one; i++) {
    for (var a = 0; a < two; a++) {
      if (first[i] === second[a]) {
        array.push(first[i]);
      }
    }
  }
  return array;
}

// Define a function intersection with two parameters first and second
// assign length property of the first object to a variable one
// assign length property of the second object to a variable two
// create a for loop with i being assigned to 0 in the inititlization, i is less than one in the conditional expression and i is being incremeneted in the final expression
// with in the first foloops block create another for loop where a is being o is being assigned to a in the intitilization espression, a is less than two in the conditional expression and a is being incremented in the final expression
/// In the code block, the push method of the array object is taken in one argument first at i///
// return array
