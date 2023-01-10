/* exported maxValue */

function maxValue(stack) {
  if (!Number.isInteger(stack.peek())) {
    return -Infinity;
  }
  let peek = stack.peek();
  while (Number.isInteger(stack.peek())) {
    const pop = stack.pop();
    if (pop > peek) {
      peek = pop;
    }
  }
  return peek;
}
