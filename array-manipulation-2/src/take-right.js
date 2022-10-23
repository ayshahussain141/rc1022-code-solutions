/* exported takeRight */
function takeRight(array, count) {
  var newArray = [];

  var length = array.slice(-count);
  newArray.push(length);
  return length;
}
