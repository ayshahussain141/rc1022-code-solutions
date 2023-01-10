/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return undefined
  }
  let i = 0;
  while(i < index){
    i++
    const one = queue.dequeue();
    queue.enqueue(one);
  }
  return queue.dequeue();
}
