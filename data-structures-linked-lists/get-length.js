/* exported getLength */
function getLength(list) {
  let lists = list.next;
  let count = 1;
  while (lists) {
    count++;
    lists = lists.next;
  }
  return count;
}
