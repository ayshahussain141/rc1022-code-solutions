/* exported getKeys */
function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}

/*
//Define function getKeys with one parameter object//
in the function assign an empty array to variable keys//
create a for in loop with key in object
in the loop code block use the push method of the keys object with one argument key//
return keys //
*/
