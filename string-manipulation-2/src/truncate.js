/* exported truncate */
function truncate(length, string) {
  var word = string.slice(0, length) + '...';
  if (word.length <= length) {
    return (string, word);
  }
  return word;
}
