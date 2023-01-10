/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let one = queue.dequeue();
  let two = queue.peek();
  while ( one > two){
    queue.enqueue(one);
    one = queue.dequeue();
    two = queue.peek()
  }
  return one;
}
