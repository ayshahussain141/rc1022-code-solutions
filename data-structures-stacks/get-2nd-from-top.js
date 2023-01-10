/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const pop = stack.pop();
  const peek = stack.peek();
  if (pop === undefined) {
    return undefined;
  }
  stack.push(pop);
  return peek;
}
