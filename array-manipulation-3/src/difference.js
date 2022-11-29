/* exported difference */
function difference(first, second) {
  var newArray = first.concat(second);

  var newestArray = [];

  for (var i = 0; i < newArray.length; i++) {
    if (first.indexOf(newArray[i]) === -1) {
      newestArray.push(newArray[i]);
    }
    if (second.indexOf(newArray[i]) === -1) {
      newestArray.push(newArray[i]);
    }

  }
  return newestArray;
}
