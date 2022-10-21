/* exported filterOutNulls */
function filterOutNulls(values) {
  var array = [];
  for (var i = 0; i < values.length; i++) {
    array = values.filter(element => {
      return element !== null;
    });
  }
  return array;
}
