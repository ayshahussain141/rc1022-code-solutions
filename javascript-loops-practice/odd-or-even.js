/* exported oddOrEven */
function oddOrEven(numbers) {
  var numberTwo = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      numberTwo.push('even');
    } else {
      numberTwo.push('odd');
    }

  }
  return numberTwo;
}
