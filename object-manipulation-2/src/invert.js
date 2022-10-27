/* exported invert */
function invert(source) {
  var object = {};
  for (var key in source) {
    object[source[key]] = key;
  }
  return object;
}

/*
//Define a function invert with one parameter source//
In the function code block assign an empty object to variable object//
write a for in loop for key in source which returns
object at source at key equals to key;
return object;///
*/
