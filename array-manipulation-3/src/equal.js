/* exported equal */
function equal(first, second) {

  if (first.length !== second.length) {
    return false;
  }
  for (var i = first.length; i--;) {
    if (first[i] !== second[i]) {
      return false;
    }

  }
  return true;
}
