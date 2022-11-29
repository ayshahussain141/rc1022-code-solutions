/* exported reverseWords */
function reverseWords(string) {
  var three = string.split('');
  var four = three.reverse();
  var five = four.join('');
  var six = five.split(' ');
  var seven = six.reverse();
  var eight = seven.join(' ');
  return eight;
}
