/* exported union */
function union(first, second) {
  var array = first.concat(second);
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (newArray.indexOf(array[i]) === -1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// Define  function union with two parameters first and second
// concat first and second pramater by usig the concat method of the first object pssing in second as an argument and assign it to the variable array
// pass an empty array to variable newArray
//  create a for loop with i being assigned to 0 in the inititlization, i is less than length property of the array object in the conditional expression and i is being incremeneted in the final expression
// In the function code block write a conditional stament of if indexof method of teh new array object is passing in one argument array at i is strictly equal to -1
// push array at i to the newArray object
// return new array
