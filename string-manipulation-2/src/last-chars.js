/* exported lastChars */
function lastChars(length, string) {
  var word = string.slice(-length);
  if (word.length <= length) {
    return (string, word);
  }
  return word;
}
