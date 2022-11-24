/* exported isAnagram */
function isAnagram(first, second) {
  var one = first.replace(' ', '').toLowerCase().split('').sort().join('');
  var two = second.toLowerCase().replaceAll(' ', '').split('').sort().join('');
  return one === two;
}
