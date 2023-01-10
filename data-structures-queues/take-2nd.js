/* exported take2nd */

function take2nd(queue) {
  if(queue.peek() === undefined){
    return undefined;
  }
  const value = queue.dequeue();
  queue.enqueue(value)
return queue.dequeue();
}
