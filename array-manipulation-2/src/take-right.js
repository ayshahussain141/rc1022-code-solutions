/* exported takeRight */
function takeRight(array, count) {
  var newArray = [];

  var length = array.slice(-count);
  newArray.push(length);
  return length;
}

/*
write an function takeright with two parameters array and count//
assign an empty array to variable newArray//
assign slice method of the array with one argument that subtract count//
push length into a new array//
return length//
//
*/
