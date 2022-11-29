/* exported titleCase */
function titleCase(string) {
  var word = string.split(' ');
  var newWord = [];
  for (var letter in word) {
    newWord[letter] = word[letter][0].toUpperCase() + word[letter].slice(1).toLowerCase();
  }
  for (var i = 0; i < newWord.length; i++) {
    if (newWord[i].includes('Javascript')) {
      newWord[i] = newWord[i].replace('s', 'S');
    }
    if (newWord[i] === 'Api') {
      newWord[i] = newWord[i].replace('pi', 'PI');
    }
    if (newWord[i] === 'In') {
      newWord[i] = newWord[i].replace('I', 'i');
    }
    if (newWord[i] === 'For') {
      newWord[i] = newWord[i].replace('F', 'f');
    }
    if (newWord[i] === 'And') {
      newWord[i] = newWord[i].replace('A', 'a');

    }
    if (newWord[i] === 'On') {
      newWord[i] = newWord[i].replace('O', 'o');

    }
    if (newWord[i] === 'To') {
      newWord[i] = newWord[i].replace('T', 't');

    }
    if (newWord[i] === 'The') {
      newWord[i] = newWord[i].replace('T', 't');

    }
    if (newWord[i] === 'Of') {
      newWord[i] = newWord[i].replace('O', 'o');

    }
    if (newWord[0] === 'the') {
      newWord[0] = newWord[0].replace('t', 'T');
    }
    if (newWord[i].includes('-')) {
      var three = newWord[i].split('-');
      var four = three[0] + '-' + three[1].toUpperCase().charAt(0) + three[1].substring(1);
      newWord[i] = four;
    }
    if (newWord[i].includes(':')) {
      newWord[i] = newWord[i++];
    }
  }
  newWord = newWord.join(' ');
  return newWord;
}
