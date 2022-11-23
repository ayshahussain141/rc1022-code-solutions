/* exported chunk */
function chunk(array, size) {
  var newArray = [];
  for (var i = 0; i < array.length; i += size) {
    var slice = array.slice(i, i + size);
    newArray.push(slice);
  }
  return newArray;
}
