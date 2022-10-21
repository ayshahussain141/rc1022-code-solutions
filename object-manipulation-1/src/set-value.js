/* exported setValue */
function setValue(object, key, value) {
  var code = object[key] = value;
  return code;
}
