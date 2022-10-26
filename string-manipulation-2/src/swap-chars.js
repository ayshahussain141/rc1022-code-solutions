/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  string = string.split('');
  var word = string[firstIndex];
  string[firstIndex] = string[secondIndex];
  string[secondIndex] = word;
  string = string.join('').toString();
  return string;
}

/*
//Define function swapChars with 3 parameters firstIndex, secondIndex and string//
assign the split method of the string object with one argument '' and return it to
string//
//assign string at firstIndex to word//
// make string at firstIndex equal to string at secondIndex//
make string at seconf Index equal to word//
combine join method of the string object with one argument with '' using dot notation
to Stringmethod and return it to string//
return string//
*/
