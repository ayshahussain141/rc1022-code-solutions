/* exported capitalizeWords */
function capitalizeWords(string) {
  var word = string.split(' ');
  var newWord = [];
  for (var letter in word) {
    newWord[letter] = word[letter][0].toUpperCase() + word[letter].slice(1).toLowerCase();
  }
  return newWord.join(' ');
}
