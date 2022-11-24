/* exported isPalindromic */
function isPalindromic(string) {
  var one = string.toLowerCase().replace(' ', '');
  var two = one.split('').reverse().join('');
  return two === one;
}
