/* exported takeSmaller */

function takeSmaller(queue) {
  const one = queue.dequeue();
  const two = queue.dequeue();
  if (two === undefined) {
    return one;
  }
  if (two > one) {
    queue.enqueue(two);
    return one;
  }
    queue.enqueue(one);
    return two;
}
