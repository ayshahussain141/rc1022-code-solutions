/* exported getTail */

function getTail(list) {
let newList = list;
let nextList = list.next;
  while (nextList !== null) {
    newList = nextList;
    nextList = newList.next;
  }
  return newList.data;
}
