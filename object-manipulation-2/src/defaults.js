/* exported defaults */
function defaults(target, source) {
  for (var key in source) {

    if (target[key] === undefined) {
      target[key] = source[key];
    }
  }
}

/*
//Define a function defaults with two parameters target and source//
//In the function code block use a for in statement for key in source///
//write a conditional statment of if target at key is strictly equal to undefined///
return target at key equal to source at key//
*/
