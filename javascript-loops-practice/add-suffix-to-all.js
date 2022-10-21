/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var letters = [];
  for (var i = 0; i < words.length; i++) {
    letters.push(words[i] + suffix);
  }
  return letters;
}
