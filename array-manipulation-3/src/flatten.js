/* exported flatten */
function flatten(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    var three = array[i];
    if (!Array.isArray(three)) {
      arr.push(three);
      continue;
    }
    for (var a = 0; a < three.length; a++) {
      arr.push(three[a]);
    }
  }
  return arr;
}
