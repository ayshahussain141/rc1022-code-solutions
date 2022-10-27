/* exported pick */
function pick(source, keys) {
  var object = {};
  for (var key of keys) {
    var list = source[key];
    if (list !== undefined) {
      object[key] = list;
    }
  }
  return object;
}
