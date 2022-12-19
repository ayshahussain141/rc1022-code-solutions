const request = new Request('https://jsonplaceholder.typicode.com/users');

fetch(request)
  .then(res => res.json())
  .then(json => console.log(json));
