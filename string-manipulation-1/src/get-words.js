/* exported getWords */
function getWords(string) {
  var array = [];
  var two = string.split(' ');

  array.push(two);
  if (string === '') {
    return [];
  }
  return two;
}
