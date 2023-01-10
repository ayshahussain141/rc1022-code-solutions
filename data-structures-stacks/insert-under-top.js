/* exported insertUnderTop */
function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return undefined;
  }
  const pop = stack.pop();
  stack.push(value);
  stack.push(pop);
}
