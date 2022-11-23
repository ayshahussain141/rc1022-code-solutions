/* exported compact */
function compact(array) {
  var list = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== null && array[i] !== false && array[i] !== undefined && array[i] !== 0 && array[i] !== '' && array[i]) {
      list.push(array[i]);

    }

  }
  return list;
}
