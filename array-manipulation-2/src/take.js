/* exported take */
function take(array, count) {
  var newArray = [];
  var length = array.slice(0, count);
  newArray.push(length);
  return length;
}

/*
// write function take with two parameters array and count//
assign an empty array to variable new arrayy///
use the slice method of the new array object for two arguments 0 and count and assign it to the variable length//
push the the variable length into new array
return length///
*/
