/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  string = string.split('');
  var word = string[firstIndex];
  string[firstIndex] = string[secondIndex];
  string[secondIndex] = word;
  string = string.join('').toString();
  return string;
}
