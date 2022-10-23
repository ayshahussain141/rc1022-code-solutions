/* exported take */
function take(array, count) {
  var newArray = [];
  var length = array.slice(0, count);
  newArray.push(length);
  return length;
}
