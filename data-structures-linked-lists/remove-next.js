/* exported removeNext */

function removeNext(list) {
  if(list.next === null){
    return null;
  }
  list.next = list.next.next;
  return list;
}
