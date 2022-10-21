/* exported toObject */
function toObject(keyValuePair) {
  var object = {};
  var value = keyValuePair.pop();
  var key = keyValuePair.pop();
  object[key] = value;
  return object;
}
