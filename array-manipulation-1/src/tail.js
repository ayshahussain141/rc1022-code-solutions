/* exported tail */
function tail(array) {

  var newList = [];
  for (var i = 0; i <= array.length - 1; i++) {
    newList[i - 1] = array[i];
  }

  return newList;
}
