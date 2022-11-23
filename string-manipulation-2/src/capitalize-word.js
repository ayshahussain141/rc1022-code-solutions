/* exported capitalizeWord */
function capitalizeWord(word) {
  for (var i = 0; i < word.length; i++) {
    var string = word[0].charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    if (string === 'Javascript') {
      string = string.replace('s', 'S');
    }
  }

  return (string);
}
