/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  const newItem = new LinkedList(value);
while(list.next){
  list = list.next
}
  return list.next = newItem;
}
