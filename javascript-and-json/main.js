var books = [
  {
    title: 'The Girl on the Train',
    isbn: '9780735219755',
    author: 'Paula Hawkins'
  },
  {
    title: 'I Hunt Killers',
    isbn: ' 978-0316283632',
    author: 'Paula Hawkins'
  },
  {
    title: 'Bird Box',
    isbn: ' 978-0062259660',
    author: 'Josh Malerman'
  }

];
console.log('Array of books: ', typeof books);
console.log('Array of books: ', books);
console.log('');

var jsonString = JSON.stringify(books);
console.log('JSON string:', typeof jsonString);
console.log('JSON string:', jsonString);
console.log('');

var student = '{"student":"Aysha", "ID number":123456789}';
console.log('Json', typeof student);
console.log(student);
console.log('');

var string = JSON.parse(student);
console.log('Json ', typeof string);
console.log('json object value:', string);
